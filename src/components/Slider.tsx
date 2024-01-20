import * as React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, Input } from "@mui/material";

type SliderProps = {
  value: number;
  setValue: (value: number) => void;
};

export const MySlider = ({ value, setValue }: SliderProps) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item xs>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Grid>
      <Grid item>
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Grid>
    </Grid>
  );
};
