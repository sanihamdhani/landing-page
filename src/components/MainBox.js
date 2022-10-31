import { Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const MainBox = () => {
  return (
    <Container
      className="main-box"
      data-aos="fade-up"
      data-aos-duration="1500"
      sx={{ mt: 15 }}
    >
      <Grid container rowSpacing={1}>
        <Grid item sm={6}>
          <img src="./assets/main-box.svg" alt=""></img>
        </Grid>

        <Grid item sm={6}>
          <h1>Keluar Dari Comfort Zone Kamu</h1>
          <p>
            Pelajari hal baru dapatkan skill baru, lihat lebih banyak kesempatan
            yang akan terbuka dengan skill yang kamu punya
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
      </Grid>

      <Grid
        container
        rowSpacing={1}
        sx={{ mt: 20 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Grid item sm={6}>
          <h1>Dapatkan Pekerjaan Yang Kamu Cintai</h1>
          <p>
            Dengan skill baru yang kamu pelajari disini, kamu bisa mendapatkan
            Pekerjaan yang benar-benar kamu cintai dan nikmati
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
          <span>
            <img src="./assets/loving.svg" alt=""></img>
          </span>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainBox;
