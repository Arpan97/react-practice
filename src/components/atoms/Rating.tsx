import * as React from "react";
import Rating from "@mui/material/Rating";

interface RateProps {
  value: number;
  onChange?: (val: number) => void;
}

const Rate: React.FC<RateProps> = ({ value, onChange }) => {
  //   const [value, setValue] = React.useState<number | null>(4);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        if (onChange && newValue !== null) {
          onChange(newValue); // safe call
        }
      }}
    />
  );
};

export default Rate;
