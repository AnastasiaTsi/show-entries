import React from "react";
import { Select, InputLabel } from "@material-ui/core/";
import { StyledFormControl } from "../styles/genericStyles";

const NativeSelects = ({ onChange, entries }) => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    onChange(event.target.value);
  };

  const options = [];
  entries.forEach(
    (element) =>
      !options.includes(element?.Category) && options.push(element?.Category) //no double
  );

  return (
    <StyledFormControl variant="outlined">
      <InputLabel>Category</InputLabel>
      <Select native value={state} onChange={handleChange} label="Category">
        <option aria-label="None" value="" />
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </StyledFormControl>
  );
};
export default NativeSelects;
