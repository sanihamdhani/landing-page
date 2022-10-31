import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/styles.css";
import { Container, Button } from "@mui/material";

const Header = (props) => {
  return (
    <Box>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container className="navbar">
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            sx={{ p: 2 }}
          >
            <Grid item sm={2}>
              <img src="./assets/logo.svg" alt="logo" />
            </Grid>

            <Grid item sm={3}>
              <a href="html">Masuk </a>
              <Button
                className="btn"
                variant="contained"
                color="success"
                sx={{
                  borderRadius: 300,
                  backgroundColor: "#0E811C",
                  ml: 2,
                  p: 2,
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                Yuk Mulai
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
