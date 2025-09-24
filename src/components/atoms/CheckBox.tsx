import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface CheckBoxProps {
  options: string[];
}

const CheckBox: React.FC<CheckBoxProps> = ({ options }) => {
  return (
    <FormGroup>
      {options?.map((item: string) => {
        return (
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-xs sm:text-sm">{item}</span>}
          />
        );
      })}
    </FormGroup>
  );
};

export default CheckBox;
