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
            fontSize: { sm: "48px", xs: "38px" },
            fontFamily: "blanka",
            color: "white",
          }}
        >
          ABOUT&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "38px" },
              fontFamily: "blanka",
              // color: (theme) =>
              //   theme.palette.mode === "light"
              //     ? "primary.main"
              //     : "primary.light",
              color: "#AAE6FF",
            }}
          >
            US
          </Typography>
        </Typography>
      </Box>
      <Container>
        <Container
          sx={{
            mt: { sm: 10 },
           
            alignSelf: "center",
            alignContent: "middle ",
            // height: { sm: "680px" },
            alignItems: "center",
            textAlign:"center",
            pt: { xs: 5, sm: 10 },
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
                <p
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-sm font-extrabold text-transparent lg:text-3xl p-10"
      >
        Intro video Coming Soon........
      </p>
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
          alignSelf: "center",
          alignContent: "middle ",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            mt: { xs: 5 },
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <img
            src="/images/about1.png"
            alt="About us image"
            style={{ width: "400px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          sm="auto"
          sx={{
            width: { xs: "40%", sm: "40%" },
            ml: { sm: 25 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "38px" },
                fontFamily: "blanka",
                color: "white",
              }}
            >
              WHAT IS
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "38px" },
                fontFamily: "blanka",
                color: "#AAE6FF",
                pl: { sm: 20 },
              }}
            >
              HACKSPIRE
            </Typography>

            <Typography
              color="white"
              sx={{
                alignSelf: "left",
                width: { sm: "100%", md: "100%" },
                fontFamily: "Varela",
                fontSize: "22px",
                pt: { xs: 5 },
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
                fontSize: { sm: "48px", xs: "38px" },
                fontFamily: "blanka",
                color: "white",
                pt: { xs: 10 },
              }}
            >
              IMPORTANT
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { sm: "48px", xs: "38px" },
                fontFamily: "blanka",
                color: "#AAE6FF",
                pl: { sm: 10 },
              }}
            >
              DATES&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "white",
                }}
              >
                AND&nbsp;
              </Typography>
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: { sm: "48px", xs: "38px" },
                  fontFamily: "blanka",
                  color: "#AAE6FF",
                }}
              >
                DEADLINE
              </Typography>
            </Typography>

            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "22px",
                fontFamily: "Varela",
                color: "#1DD8FE",
                pt: { xs: 5 },
              }}
            >
              HACKSPIRE Registration Starts :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                13th June, 2024
              </Typography>
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "22px",
                fontFamily: "Varela",
                color: "#1DD8FE",
              }}
            >
              Registration Closed :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                13th June, 2024
              </Typography>
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "22px",
                fontFamily: "Varela",
                color: "#1DD8FE",
              }}
            >
              HACKSPIRE :&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "22px",
                  fontFamily: "Varela",
                  color: "white",
                }}
              >
                13th June, 2024
              </Typography>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={2} sx={{ display: { sm: "none" }, width: "100%" }}>
        <Box sx={{textAlign:'center'}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "white",
            }}
          >
            WHAT IS
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "#AAE6FF",
            }}
          >
            HACKSPIRE
          </Typography>
        </Box>

        <Typography
          color="white"
          sx={{
            alignSelf: "center",
            width: '90%',
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
          }}
        >
          Hackspire is a statewide initiative to provide engineering students to
          solve some of the common problems we face in our daily life, and thus
          inculcate a culture of product innovation and a mindset of real time
          problem solving.
        </Typography>
        <Box sx={{textAlign:'center', pt:5}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "white",
              pl: { sm: 17 },
            }}
          >
            IMPORTANT&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "#AAE6FF",
            }}
          >
            DATES
          </Typography>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "#AAE6FF",
              pl: { sm: 17 },
            }}
          >
            AND&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "48px", xs: "30px" },
              fontFamily: "blanka",
              color: "white",
            }}
          >
            DEADLINE
          </Typography>
          </Typography>
        </Box>

        <Stack sx={{
            alignSelf: "center",
            width: '90%',
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
          }}>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "22px", xs: "16px" },
              fontFamily: "Varela",
              color: "#1DD8FE",
              pt: { xs: 5 },
            }}
          >
            HACKSPIRE Registration Starts :&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "white",
              }}
            >
              13th June, 2024
            </Typography>
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "22px", xs: "16px" },
              fontFamily: "Varela",
              color: "#1DD8FE",
            }}
          >
            Registration Closed :&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "white",
              }}
            >
              13th June, 2024
            </Typography>
          </Typography>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: { sm: "22px", xs: "16px" },
              fontFamily: "Varela",
              color: "#1DD8FE",
            }}
          >
            HACKSPIRE :&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontFamily: "Varela",
                color: "white",
              }}
            >
              13th June, 2024
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AboutSection;
