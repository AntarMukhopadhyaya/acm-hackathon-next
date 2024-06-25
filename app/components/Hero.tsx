"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import "./fonts/font.css";
import Timer from "./Timer";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container id="hero" sx={{ maxWidth: { xs: "1300px" } }}>
      <Stack alignContent="center" sx={{ pb: { xs: 20 }, pt: { xs: 10 } }}>
        <Grid
          className="sm:max-lg:flex sm:max-lg:justify-center sm:max-lg:text-center"
          container
          spacing={1}
          sx={(theme) => ({
            width: "100%",
            [theme.breakpoints.down("xs")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            pt: { sm: 10 },
          })}
        >
          <Grid
            item
            sm="auto"
            sx={{ width: { xs: "80%", sm: "40%" }, mt: { xs: 10, sm: 8 } }}
          >
            <Stack spacing={2}>
              <img
                src="images/logo1.png"
                alt="logo of HACKSPIRE"
                style={{ width: "600px", height: "auto", cursor: "pointer" }}
              />
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                }}
              >
                A initiative by
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "popBold",
                  fontSize: "25px",
                  color: "#5DB8DE",
                }}
              >
                FIEM ACM STUDENT CHAPTER
              </Typography>
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                }}
              >
                Future Institute of Engineering and Management
              </Typography>
              <Typography
                color="white"
                sx={{
                  alignSelf: "left",
                  width: { sm: "100%", md: "100%" },
                  fontFamily: "Varela",
                  fontSize: "22px",
                }}
              >
                SONARPUR | KOLKATA
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(1rem, 2vw, 2rem)",
                  fontFamily: "blanka",
                  color: "#1DD8FE",
                }}
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Code | Create | Conquer",
                    1000,
                    "Battle of Development",
                    1000,
                    "Mark the Date",
                    1000,
                    "12.09.2024",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
              <img
                className="sm:max-lg:self-center"
                src="/images/fiemacm.png"
                alt="logo of HACKSPIRE"
                style={{ width: "250px", height: "auto", cursor: "pointer" }}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: "100%", sm: "100%" } }}
              >
                {/* <TextField
                      id="outlined-basic"
                      hiddenLabel
                      size="small"
                      variant="outlined"
                      aria-label="Enter your email address"
                      placeholder="Your email address"
                      inputProps={{
                        autocomplete: 'off',
                        ariaLabel: 'Enter your email address',
                      }}
                    /> */}
                <div
                  className="apply-button"
                  data-hackathon-slug="hackspire"
                  data-button-theme="light"
                  style={{ height: "44px", width: "312px" }}
                ></div>
              </Stack>
              {/* <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                    By clicking &quot;Start now&quot; you agree to our&nbsp;
                    <Link href="#" color="primary">
                      Terms & Conditions
                    </Link>
                    .
                  </Typography> */}
            </Stack>
          </Grid>
          <Grid
            className="visible max-sm:invisible"
            item
            sx={{
              pl: { xs: 50 },
              display: { xs: "none", sm: "block" },
              ml: { xs: 25 },
              mt: { sm: 5 },
              alignItems: { sm: "end" },
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <img
                src="/images/hand.png"
                alt="hand"
                style={{
                  width: "500px",
                  height: "auto",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              />
              <Box sx={{ ml: 15 }}>
                <Timer />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
