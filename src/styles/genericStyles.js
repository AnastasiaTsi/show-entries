import { withStyles } from "@material-ui/core/styles";
import { FormControl, TextField, TableRow, TableCell } from "@material-ui/core";
import { Pagination } from "@material-ui/lab/";
import colors from "./colors";

export const StyledFormControl = withStyles({
  root: {
    textAlign: "center",
    backgroundColor: "white",
    fontFamily: ["Muli", "Verdana"].join(","),
    "&:focus": {
      backgroundColor: "inherit",
    },
    "& label.Mui-focused": {
      color: colors.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.primary,
      borderColor: colors.primary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.primary,
      },
      "&:hover fieldset": {
        borderColor: colors.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.primary,
      },
    },
  },
})(FormControl);

export const StyledTextField = withStyles({
  root: {
    borderColor: colors.primary,
    backgroundColor: "white",
    color: colors.primary,

    "& label.Mui-focused": {
      color: colors.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.primary,
      borderColor: colors.primary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.primary,
      },
      "&:hover fieldset": {
        borderColor: colors.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.primary,
      },
    },
  },
})(TextField);

export const StyledPagination = withStyles({
  root: {
    borderColor: colors.primary,
    backgroundColor: "white",
    color: colors.primary,
    width: "fit-content",
    borderRadius: "20px",
    marginTop: "2%",
  },
})(Pagination);

export const StyledTableRow = withStyles({
  root: {
    backgroundColor: colors.primary,
  },
})(TableRow);

export const StyledTableCell = withStyles({
  root: {
    backgroundColor: colors.lightPrimary,
  },
})(TableCell);

/**
 * App
 */
export const mainDiv = {
  // backgroundColor: colors.lightSecondary,
  minHeight: "100vh",
};
export const topContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: "3%",
};
