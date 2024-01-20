import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContent } from "./TabContent";
import { useState } from "react";

type BasicTabsProps = {
  tabContents: TabContent[];
};

export const BasicTabs = ({ tabContents }: BasicTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabContents.map(({ label }, index) => (
            <Tab
              key={index}
              label={label}
              id={`simple-tab-${index}`}
              aria-controls={`simple-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>
      {tabContents.map((tabContent, index) => (
        <TabContent key={index} value={value} tabContent={tabContent}/>
      ))}
    </Box>
  );
};
