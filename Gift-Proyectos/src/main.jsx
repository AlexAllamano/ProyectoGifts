import React from "react";
import ReactDOM from "react-dom/client";
import { GiftApp } from "./GiftApp";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <Typography component={'span'} variant={'body2'}>
        <GiftApp />
      </Typography>
    </Container>
  </React.StrictMode>
);
