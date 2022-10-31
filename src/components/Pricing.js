import { Button, Container, Grid } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <Container className="pricing" data-aos="fade-up" data-aos-duration="1000">
      <h1>PricingList</h1>
      <p>Kami Menawarkan Harga Yang Kompetitif</p>

      <Grid container rowSpacing={1} sx={{ mt: 4 }} justifyContent="center">
        <Grid
          item
          sm={3}
          sx={{ border: 3, p: 5, borderRadius: 5, m: 1 }}
          className="pricing-list"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>Pemula</h3>
          <h2>
            <span>0</span> IDR
          </h2>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>1 Course Setiap Bulan</h2>
          </div>
          <div style={{ height: 255 }} />
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              borderRadius: 40,
              width: 200,
              backgroundColor: "#0E811C",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Gaskan
          </Button>
        </Grid>
        <Grid
          item
          sm={3}
          sx={{ border: 3, p: 5, borderRadius: 5, m: 1 }}
          className="pricing-list"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3>Pro</h3>
          <h2>
            <span>100</span> IDR
          </h2>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>10 Course Setiap Bulan</h2>
          </div>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>Chat Mentor</h2>
          </div>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>Forum Diskusi</h2>
          </div>
          <div className="detail-pricing" />
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              borderRadius: 40,
              width: 200,
              backgroundColor: "#0E811C",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Gaskan
          </Button>
        </Grid>
        <Grid
          item
          sm={3}
          sx={{ border: 3, p: 5, borderRadius: 5, m: 1 }}
          alignItems="center"
          className="pricing-list"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>Sultan</h3>
          <h2>
            <span>150K</span> IDR
          </h2>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>Unlimited Course</h2>
          </div>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>Chat Mentor</h2>
          </div>
          <div className="detail">
            <img src="./assets/check.svg" alt="check"></img>
            <h2>Forum Diskusi</h2>
          </div>
          <div className="detail-pricing" />
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              borderRadius: 40,
              width: 200,
              backgroundColor: "#0E811C",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Gaskan
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
