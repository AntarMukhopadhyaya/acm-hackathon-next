import { Box, alpha } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";


import "./fonts/font.css";

function AboutSection() {
  return (
    <Box id="aboutus">
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(3.5rem, 10vw, 4rem)",
            fontFamily: "blanka",
          }}
        >
          About&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 4rem)",
              fontFamily: "blanka",
              // color: (theme) =>
              //   theme.palette.mode === "light"
              //     ? "primary.main"
              //     : "primary.light",
              color: "primary.light"
            }}
          >
            us
          </Typography>
        </Typography>
      </Box>
      <Container>
        <Container
          sx={{
            mt: { xs: 8, sm: 10 },
            display: "flex",
            alignSelf: "center",
            alignContent: "middle ",
            height: "680px",
            alignItems: "center",
            pt: { xs: 20, sm: 10 },
            pb: { xs: 8, sm: 12 },
            // [theme.breakpoints.up("xs")]: {
            //   backgroundSize: "cover",
            //   borderRadius: "10px",
            //   outline: "1px solid",
            //   outlineColor:alpha("#9CCCFC", 0.1),
            //   boxShadow:`0 0 24px 12px ${alpha("#033363", 0.2)}`,
            // },
          }}
        >
          <video
            id="bannerVideo"
            autoPlay
            muted
            loop
            style={{ marginTop: "10px" }}
          >
            <source src="/videos/acmvideo.mp4" type="video/mp4" />
          </video>
        </Container>
      </Container>
      <Grid
        container
        spacing={1}
        sm="auto"
        sx={{
          width: "100%",
     

          pt: { xs: 0, sm: 15 },
          pl: { sm: 15 },
        }}
      >
        <Grid
          item
          sx={{
            mt:{xs:5},
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
            
          }}
        >
          <img
            src="/images/about1.png"
            alt="About us image"
            style={{ width: "500px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          sm="auto"
          
          sx={{ width: { xs: "40%", sm: "40%" }, ml:{xs: 40} }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
                fontFamily: "blanka",
              }}
            >
              What is
            </Typography>
            <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                  fontFamily: "blanka",
                  color: "primary.light",
                  pl:{xs:25}
                }}
              >
                Hackspire
              </Typography>

            <Typography
              color="primary.light"
              sx={{
                alignSelf: "left",
                width: { sm: "100%", md: "100%" },
                fontFamily: "Varela",
                fontSize: "22px",
                pt:{xs:5}
              }}
            >
              Hackspire is a statewide initiative to provide engineering
              students to solve some of the common problems we face in our daily
              life, and thus inculcate a culture of product innovation and a
              mindset of real time problem solving.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
                fontFamily: "blanka",
                pt:{xs:10}
              }}
            >
              important
            </Typography>
            <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 10vw, 2rem)",
            fontFamily: "blanka",
            color:"primary.light",
            pl:{xs:17}
          }}
        >
          Dates&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: "clamp(2.5rem, 10vw, 2rem)",
              fontFamily: "blanka",
              color:"white"
            }}
          >
            And&nbsp;
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: "clamp(2.5rem, 10vw, 2rem)",
              fontFamily: "blanka",
              color:"primary.white"
            }}
          >
            Deadline
          </Typography>
        </Typography>

        <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"#1DD8FE",
              pt:{xs:5}
            }}
          >
            HACKSPIRE Registration Starts :&nbsp;
            <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"white"
            }}
          >
            13th June, 2024
          </Typography>
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"#1DD8FE"
            }}
          >
            Registration Closed :&nbsp;
            <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"white"
            }}
          >
            13th June, 2024
          </Typography>
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"#1DD8FE"
            }}
          >
            HACKSPIRE :&nbsp;
            <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize:"22px",
              fontFamily: "Varela",
              color:"white"
            }}
          >
            13th June, 2024
          </Typography>
          </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;