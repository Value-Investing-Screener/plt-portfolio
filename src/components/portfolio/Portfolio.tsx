import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  CircularProgress,
} from "@mui/material";
import { SectorChart } from "./SectorChart";
import { ContinentChart } from "./ContinentChart";
import { SizeChart } from "./SizeChart";
import { Company } from "../types";

type PortfolioProps = {
  label: string;
  companies: Company[];
  currency: string;
};

export const Portfolio = ({ label, companies, currency }: PortfolioProps) => {
  const averageDividendPerYear = 4.6;

  if (companies.length === 0) {
    return (
      <div className="my-28 flex justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="my-28">
      <Typography variant="h3">{label}</Typography>
      <TableContainer className="my-9 shadow-md">
        <Table className="bg-slate-50 ">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="center">Ticker</TableCell>
              <TableCell align="center">Part en devise</TableCell>
              <TableCell align="center">Devise</TableCell>
              <TableCell align="center">Part en {currency}</TableCell>
              <TableCell align="center">{"Cours de l'action"}</TableCell>
              <TableCell align="center">Quantité de titre </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((row) => (
              <TableRow key={row.ticker}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.ticker}</TableCell>
                <TableCell align="right">
                  {row.shareInStockCurrency.toFixed(2).toLocaleString()}
                </TableCell>
                <TableCell align="right">{row.currency}</TableCell>
                <TableCell align="right">
                  {row.shareInChosenCurrency.toFixed(2).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {row.stockPrice.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {Math.round(row.nbStocks).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h4">
        Dividende annuel moyen du portefeuille:{" "}
        {averageDividendPerYear.toLocaleString("fr-FR")}%
      </Typography>
      <Grid container columns={{ md: 3 }} className="my-12" height={"300px"}>
        <Grid item md={1}>
          <SectorChart companies={companies} />
        </Grid>
        <Grid item md={1}>
          <ContinentChart companies={companies} />
        </Grid>
        <Grid item md={1}>
          <SizeChart companies={companies} />
        </Grid>
      </Grid>
    </div>
  );
};
