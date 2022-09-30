import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface ISelectComponent {
  selectedValue: string;
  setSelectedValue: (par: string) => void;
  options: string[];
}

const SelectComponent: React.FC<ISelectComponent> = ({
  selectedValue,
  setSelectedValue,
  options,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedValue}
          onChange={handleChange}
          label="Age"
        >
          {options.map((option, idx) => (
            <MenuItem value={option} key={idx}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectComponent;
