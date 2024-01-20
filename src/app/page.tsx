"use client";

import { Portfolio } from "@/components/portfolio";
import { MySlider } from "@/components/Slider";
import {
  FormControl,
  Grid,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useGetPortofliosQuery } from "./api/useGetPortfolios";
import { useGetConversionsQuery } from "./api/useGetConversion";

import { convertCurrency } from "@/converter";
import { sum, uniq } from "lodash";
import { PortfolioAllocation } from "@/database/getPortfolios";

const getCompaniesWithConversions = (
  capital: number,
  currency: string,
  portfolioPercentage: number,
  rates: { [currency: string]: number },
  companies: PortfolioAllocation[]
) => {
  return companies.map((company) => {
    const shareInChosenCurrency =
      (((capital * company.allocation) / 100) * portfolioPercentage) / 100;
    const shareInStockCurrency = convertCurrency({
      from: currency,
      to: company.currency!,
      amount: shareInChosenCurrency,
      rates,
    });
    return {
      allocation: company.allocation,
      name: company.name || "",
      ticker: company.ticker,
      currency: company.currency || "",
      sector: company.sector || "",
      countryCode: company.countryCode || "",
      continentCode: company.continentCode || "",
      dividendYieldTTM: company.dividendYieldTTM || 0,
      stockPrice: company.stockPrice || 0,
      marketCapSize: company.marketCapSize || "",
      shareInChosenCurrency,
      shareInStockCurrency,
      nbStocks: shareInStockCurrency / (company.stockPrice ?? 0),
    };
  });
};

export default function Home() {
  const [capital, setCapital] = useState(10000);
  const [currency, setCurrency] = useState("EUR");

  const handleCapitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const { data: portfolios } = useGetPortofliosQuery();
  const { data: rates } = useGetConversionsQuery();

  const [efficientPortfolioPourcentage, setEfficientPortfolioPourcentage] =
    useState(0);
  const [dividendPortfolioPourcentage, setDividendPortfolioPourcentage] =
    useState(0);
  const [antifragilePortfolioPourcentage, setAntifragilePortfolioPourcentage] =
    useState(0);

  const efficentPorfolioCompanies = useMemo(() => {
    if (portfolios?.[0]?.companies && rates) {
      return getCompaniesWithConversions(
        capital,
        currency,
        efficientPortfolioPourcentage,
        rates,
        portfolios?.[0]?.companies
      );
    }
    return [];
  }, [capital, currency, efficientPortfolioPourcentage, portfolios, rates]);

  const dividendPorfolioCompanies = useMemo(() => {
    if (portfolios?.[1]?.companies && rates) {
      return getCompaniesWithConversions(
        capital,
        currency,
        dividendPortfolioPourcentage,
        rates,
        portfolios?.[1]?.companies
      );
    }
    return [];
  }, [capital, currency, dividendPortfolioPourcentage, portfolios, rates]);

  const antifragilePorfolioCompanies = useMemo(() => {
    if (portfolios?.[2]?.companies && rates) {
      return getCompaniesWithConversions(
        capital,
        currency,
        antifragilePortfolioPourcentage,
        rates,
        portfolios?.[2]?.companies
      );
    }
    return [];
  }, [portfolios, rates, capital, currency, antifragilePortfolioPourcentage]);

  const deviseRows = useMemo(() => {
    const allPortfolio = [
      ...efficentPorfolioCompanies,
      ...dividendPorfolioCompanies,
      ...antifragilePorfolioCompanies,
    ];
    const allCurrencies = uniq(allPortfolio.map(({ currency }) => currency));

    return allCurrencies.map((currentCurrency) => {
      return {
        currency: currentCurrency,
        price: sum(
          allPortfolio
            .filter((company) => company.currency === currentCurrency)
            .map(({ shareInStockCurrency }) => shareInStockCurrency)
        ),
      };
    });
  }, [
    antifragilePorfolioCompanies,
    dividendPorfolioCompanies,
    efficentPorfolioCompanies,
  ]);

  const totalPourcentage =
    efficientPortfolioPourcentage +
    dividendPortfolioPourcentage +
    antifragilePortfolioPourcentage;

  return (
    <main className="min-h-screen flex-col p-18 max-w-4xl m-auto">
      <Typography variant="h1">Portefeuilles PLT Insider</Typography>
      <Grid
        container
        columns={{ md: 2 }}
        rowSpacing={2}
        alignItems="center"
        className="my-3"
      >
        <Grid item md={1}>
          <Typography variant="h4">{"Capital à investir :"}</Typography>
        </Grid>
        <Grid item md={1}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <Input
                value={capital}
                size="small"
                onChange={handleCapitalChange}
                inputProps={{
                  step: 1000,
                  min: 0,
                  type: "number",
                }}
              />
            </Grid>
            <Grid item>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120, margin: 0 }}
              >
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={currency}
                  onChange={(event: SelectChangeEvent) =>
                    setCurrency(event.target.value)
                  }
                  label="Devise"
                >
                  <MenuItem value={"EUR"}>EUR</MenuItem>
                  <MenuItem value={"CHF"}>CHF</MenuItem>
                  <MenuItem value={"USD"}>USD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h4">
            {"Exposition Portefeuille efficient (%) :"}
          </Typography>
        </Grid>
        <Grid item md={1}>
          <MySlider
            value={efficientPortfolioPourcentage}
            setValue={setEfficientPortfolioPourcentage}
          />
        </Grid>
        <Grid item md={1}>
          <Typography variant="h4">
            {"Exposition Portefeuille dividende (%) :"}
          </Typography>
        </Grid>
        <Grid item md={1}>
          <MySlider
            value={dividendPortfolioPourcentage}
            setValue={setDividendPortfolioPourcentage}
          />
        </Grid>
        <Grid item md={1}>
          <Typography variant="h4">
            {"Exposition Portefeuille antifragile (%) :"}
          </Typography>
        </Grid>
        <Grid item md={1}>
          <MySlider
            value={antifragilePortfolioPourcentage}
            setValue={setAntifragilePortfolioPourcentage}
          />
        </Grid>
      </Grid>
      <Typography variant="h4" className="text-right p-4">
        Total :{" "}
        <span
          className={totalPourcentage === 100 ? "" : "text-red-400"}
        >
          {totalPourcentage}%
        </span>
      </Typography>
      <TableContainer className="my-9 max-w-96 shadow-md m-auto">
        <Table className="bg-slate-50 ">
          <TableHead>
            <TableRow>
              <TableCell>Devise</TableCell>
              <TableCell align="right">
                Somme en {currency} à convertir
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deviseRows.map((row) => (
              <TableRow key={row.currency}>
                <TableCell component="th" scope="row">
                  {row.currency}
                </TableCell>
                <TableCell align="right">
                  {row.price.toFixed(2).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Portfolio
        label="Portefeuille Efficient"
        companies={efficentPorfolioCompanies}
        currency={currency}
      />
      <Portfolio
        label="Portefeuille Dividende"
        companies={dividendPorfolioCompanies}
        currency={currency}
      />
      <Portfolio
        label="Portefeuille Antifragile"
        companies={antifragilePorfolioCompanies}
        currency={currency}
      />
    </main>
  );
}
