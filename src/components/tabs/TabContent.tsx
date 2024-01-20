import { Box, Typography } from "@mui/material";

export type TabContent = {
  label: string;
  index: number;
  children?: React.ReactNode;
};

export type TabContentProps = {
  tabContent: TabContent;
  value: number;
};

export const TabContent = ({
  tabContent: { index, children },
  value,
}: TabContentProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
