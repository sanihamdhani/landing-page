import { Container, Grid } from "@mui/material";
import React from "react";
import "../style/styles.css";

const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={2} alignItems="center">
            <img src="./assets/logo.svg" alt="main-circle1"></img>
          </Grid>

          <Grid item sm={2} alignItems="center" sx={{ display: "flex" }}>
            <img src="./assets/instagram.svg" alt="main-circle3"></img>
            <img src="./assets/twitter.svg" alt="main-circle3"></img>
            <img src="./assets/facebook.svg" alt="main-circle3"></img>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
};

export default Footer;
