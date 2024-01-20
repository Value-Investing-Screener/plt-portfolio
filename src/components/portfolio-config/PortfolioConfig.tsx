import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
} from "@mui/material";
import { sum } from "lodash";
import { Company } from "../types";

type PortfolioConfigProps = {
  companies?: (Company & { allocation: number })[];
};

export const PortfolioConfig = ({ companies = [] }: PortfolioConfigProps) => {
  return (
    <>
      <TableContainer className="my-9 shadow-md">
        <Table className="bg-slate-50 ">
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Nom</TableCell>
              <TableCell className="font-bold" align="center">
                Ticker
              </TableCell>
              <TableCell className="font-bold" align="center">
                Secteur
              </TableCell>
              <TableCell className="font-bold" align="center">
                Pays
              </TableCell>
              <TableCell className="font-bold" align="center">
                Continent
              </TableCell>
              <TableCell className="font-bold" align="center">
                Dividende
              </TableCell>
              <TableCell className="font-bold" align="center">
                {"Prix de l'action"}
              </TableCell>
              <TableCell className="font-bold" align="center">
                Devise
              </TableCell>
              <TableCell className="font-bold" align="center">
                Optimal Weights corrigé
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((row) => (
              <TableRow key={row.ticker}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.ticker}</TableCell>
                <TableCell align="center">{row.sector}</TableCell>
                <TableCell align="center">{row.countryCode}</TableCell>
                <TableCell align="center">{row.continentCode}</TableCell>
                <TableCell align="center">
                  {row.dividendYieldTTM
                    ? `${row.dividendYieldTTM?.toLocaleString()} %`
                    : "-"}
                </TableCell>
                <TableCell align="center">
                  {row.stockPrice ? row.stockPrice?.toLocaleString() : "-"}
                </TableCell>
                <TableCell align="center">{row.currency}</TableCell>
                <TableCell align="center">{row.allocation} %</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h4" className="text-right p-3">{`Total : ${sum(
        companies.map((c) => c.allocation)
      ).toFixed(0)}%`}</Typography>
    </>
  );
};
