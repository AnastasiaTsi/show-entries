import "../styles/Loading.css";
import React from "react";
import logo from "../logo.svg";
import { Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <div>
      <header className="Loading-header">
        <img src={logo} className="Loading-logo" alt="logo" />
        <Typography variant="h4" component="h1">
          Fetching Data...
        </Typography>
      </header>
    </div>
  );
};

export default Loading;
