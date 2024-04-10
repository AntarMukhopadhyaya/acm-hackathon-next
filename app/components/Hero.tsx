"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import "./fonts/font.css";
import Timer from "./Timer";

export default function Hero() {
  return (
    <Stack id="hero" alignContent="center" sx={{pb:{xs:20},pt:{xs:10}}}>
      <Grid
        container
        spacing={1}
        sm="auto"
        sx={(theme) => ({
          width: "100%",
          // backgroundImage:
          //   theme.palette.mode === 'light'
          //     ? 'linear-gradient(to left, #aad1fa, #FFF)'
          //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },

          pt: { xs: 3, sm: 15 },
          pl: { sm: 15 },
        })}
      >
        <Grid
          item
          sm="auto"
          sx={{ width: { xs: "40%", sm: "40%" }, mt: { xs: 40, sm: 8 } }}
        >
          <Stack spacing={2}>
            <img
              src="images/logo1.png"
              alt="logo of HACKSPIRE"
              style={{ width: "600px", height: "auto", cursor: "pointer" }}
            />
            <Typography
              color="text.secondary"
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
                color: "primary.light",
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
              Future Institute of Engineering and Management SONARPUR | KOLKATA
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(1rem, 2vw, 2rem)",
                fontFamily: "blanka",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
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
                  "15.08.2024",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </Typography>
            <img
              src="/images/fiemacm.png"
              alt="logo of HACKSPIRE"
              style={{ width: "200px", height: "auto", cursor: "pointer" }}
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
              <Button variant="contained" color="primary">
                <Typography fontFamily="Varela">
                  Submit using DEVFOLIO
                </Typography>
              </Button>
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
          item
          sx={{
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
            ml: { xs: 25 },
          }}
        >
          <img
            src="/images/hand.png"
            alt="hand"
            style={{ width: "600px", height: "auto", cursor: "pointer" }}
          />
          <Box sx={{ ml: { sm: 22 } }}>
            <Timer />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
