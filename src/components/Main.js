import React from "react";
import { Container, Grid } from "@mui/material";
import "../style/styles.css";

const Main = () => {
  return (
    <Container className="main" data-aos="fade-up" data-aos-duration="1500">
      <h1>Mengapa Memilih Kami</h1>
      <p>Belajar Dimana Saja Kapan Saja</p>

      <Grid container rowSpacing={1} sx={{ mt: 4 }}>
        <Grid item sm={4} alignItems="center" sx={{ display: "flex" }}>
          <img src="./assets/main-circle1.svg" alt="main-circle1"></img>
          <h2>Kapan Saja</h2>
        </Grid>
        <Grid item sm={4} alignItems="center" sx={{ display: "flex" }}>
          <img src="./assets/main-circle2.svg" alt="main-circle2"></img>
          <h2>Dimana Saja</h2>
        </Grid>
        <Grid item sm={4} alignItems="center" sx={{ display: "flex" }}>
          <img src="./assets/main-circle3.svg" alt="main-circle3"></img>
          <h2>Harga Terjangkau</h2>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
