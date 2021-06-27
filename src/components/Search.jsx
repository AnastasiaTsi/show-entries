import { StyledTextField } from "../styles/genericStyles";

const Search = ({ onChange }) => {
  return (
    <StyledTextField
      label="Search"
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Search;
