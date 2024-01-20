"use client";
import { PortfolioConfig } from "@/components/portfolio-config/PortfolioConfig";
import { Tabs } from "@/components/tabs";
import { useGetPortofliosQuery } from "../api/useGetPortfolios";

export default function Config() {
  const { data: portfolios = [] } = useGetPortofliosQuery();

  return (
    <Tabs
      tabContents={[
        {
          label: "Portefeuille Efficient",
          index: 0,
          children: <PortfolioConfig companies={portfolios[0]?.companies || []} />,
        },
        {
          label: "Portefeuille Dividende",
          index: 1,
          children: <PortfolioConfig companies={portfolios[1]?.companies || []} />,
        },
        {
          label: "Portefeuille Antifragile",
          index: 2,
          children: <PortfolioConfig companies={portfolios[2]?.companies || []} />,
        },
      ]}
    />
  );
}
