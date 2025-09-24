import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import type React from "react";

interface RadioProps {
  title: string;
  options: { _id: number; name: string; value: string }[];
  isDisable?: boolean;
}

const RadioButton: React.FC<RadioProps> = ({
  title = "",
  options = [],
  isDisable = false,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {options?.map((itm: { _id: number; name: string; value: string }) => {
          return (
            <FormControlLabel
              value={itm?.value}
              control={<Radio />}
              label={itm?.name}
              disabled={isDisable}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
