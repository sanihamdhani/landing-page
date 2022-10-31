import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "../style/styles.css";
import { Container } from "@mui/material";
const Hero = () => {
  return (
    <div>
      <Container className="hero ">
        <Grid container rowSpacing={1}>
          <Grid item sm={6} data-aos="fade-up" data-aos-duration="1500">
            <h1>Belajar Apapun Yang Kamu Suka</h1>
            <p>
              Belajar hal yang kamu suka, apapun itu, mulai dari menari hingga
              membuat kopi kekinian
            </p>

            <Button
              variant="contained"
              style={{
                borderRadius: 300,
                backgroundColor: "#0E811C",
                padding: "16px 40px",
                fontSize: "20px",
                fontWeight: "600",
                margin: 10,
              }}
            >
              Yuk Mulai
            </Button>
          </Grid>

          <Grid item sm={6}>
            <img src="./assets/elips.svg" alt="elips"></img>
            <span>
              <img src="./assets/hero1.svg" alt="people"></img>
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
