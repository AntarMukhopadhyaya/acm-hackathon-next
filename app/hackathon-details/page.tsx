"use Client"

// import "../components/styles/details.css"
import Logo from "./Logo.png"
import College from "./College.jpeg"
import Location from "./Location.png"
import Calendar from "./Calendar.png"
import Prize from "./Prize.png"
import Hero from "./Hero.png"
import { SocialIcon } from 'react-social-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { Box, alpha } from "@mui/material";


function Home() {
  return (
<Box sx={{mb:10}}>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
          paddingTop: "150px",
          display:{xs:'flex'},
          justifyContent: {xs:'center'},
          alignItems:{xs:'center'},
        }}
      >
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
              color: "primary.light",
            }}
          >
            VENUE
          </Typography>
      </Box>
      <Box className="flex justify-center items-center mt-10">
      <img
          className="rounded-lg"
            src="/images/College.jpeg"
            alt=""
            style={{}}
          />
      </Box>
      <Stack sx={{display:{xs:'flex'},
          justifyContent: {xs:'center'},
          alignItems:{xs:'center'},}}>
        <Box sx={{alignSelf: "center",
                textAlign: "center",
                paddingTop: "50px",
        }}>
        <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: {sm:"38px", xs:"28px"},
                fontFamily: "blanka",
                color: "primary.light",
              }}
            >
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </Typography>
        </Box>
        <Box sx={{alignSelf: "center",
                textAlign: "center",
                paddingTop: "50px",
                width:{xs:"80%"}
            }}>
        <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: {sm:"24px", xs:"16px"},
                fontFamily: "blanka",
                color: "white",
                marginTop: "50px",
                width:{sm:100},
                textAlign: "center",
                alignSelf: "center",
        
              }}
            >
              SONARPUR STATION RD, MISSION PALLY, NARENDRAPUR, KOLKATA, WEST BENGAL 700150
            </Typography>
        </Box>
      </Stack>
      <Box className="flex flex-col justify-center items-center mt-10">
      <a href="https://www.google.com/maps/place/Future+Institute+of+Engineering+and+Management/@22.4433497,88.4128536,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0272166e4cb263:0x27f12170efd9ddee!8m2!3d22.4433497!4d88.4154285!16s%2Fm%2F0j7j5ls?entry=ttu" target="_blank">
        <img
            className="rounded-lg"
              src="/images/Location.png"
              alt=""
              style={{}}
            />
      </a>
      <Button sx={{marginTop:5, borderRadius:100, fontFamily: "Varela", backgroundColor:"bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6]"}} variant="contained" size="large">
      Visit FIEM
        </Button>
      </Box>

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
            src="/images/Calender.png"
            alt="About us image"
            style={{ width: "600px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          sm="auto"
          
          sx={{ width: { xs: "80%", sm: "40%" }, ml:{xs:5, sm:20} }}
        >
          <Stack spacing={2} sx={{display:{xs:'flex'},
          justifyContent: {xs:'center'},
          alignItems:{xs:'center'},}}>
            <Box sx={{alignSelf: "center",
              textAlign: "center",
              paddingTop: "50px",
          }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {sm:"48px",xs:"38px"},
                  fontFamily: "blanka",
                  color:"#AAE6FF"
                }}
              >
                REGISTRATION
              </Typography>
              <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: {sm:"48px",xs:"38px"},
                    fontFamily: "blanka",
                    color: "white",
                  }}
                >
                  AND
                </Typography>
                <Typography
                variant="h1"
                sx={{
                  fontSize: {sm:"48px",xs:"38px"},
                  fontFamily: "blanka",
                  color:"#AAE6FF"
                }}
              >
                UPDATES
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color:"#1DD8FE"
                }}
              >
                Registration & Idea Submission : 
              </Typography>
              <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  Begins on 13th June,2024 and ends on 13th July,2024.
                </Typography>
                <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color:"#1DD8FE",
                  mt:2
                }}
              >
                Shortlisted Teams Announcement :&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  1st August,2024.
                </Typography>
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color:"#1DD8FE",
                  mt:2
                }}
              >
                HACKSPIRE begins : &nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Varela",
                    color: "white",
                  }}
                >
                  13th August, 2024
                </Typography>
              </Typography>
              <Box sx={{alignSelf: "center",
              textAlign: "center",
              paddingTop: "50px",
          }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {sm:"48px",xs:"38px"},
                  fontFamily: "blanka",
                  color:"#AAE6FF"
                }}
              >
                REGISTRATION
              </Typography>
              <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: {sm:"48px",xs:"38px"},
                    fontFamily: "blanka",
                    color: "white",
                  }}
                >
                  FEES
                </Typography>
                <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Varela",
                  color:"#1DD8FE",
                  mt:1
                }}
              >
                Registration Fees is FREE
              </Typography>
            </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Box  sx={{alignSelf: "center",
              textAlign: "center",
              alignItems:"center",
              alignContent: "center",
              justifyContent: "center",
              paddingTop: "50px",}}> 
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: {sm:"48px",xs:"28px"},
                    fontFamily: "blanka",
                    color: "#AAE6FF",
                    pt:"30px",
                    
                  }}
                >
                  REWARDS&nbsp;
                   <Typography
                      component="span"
                      variant="h1"
                      sx={{
                        fontSize: {sm:"48px",xs:"28px"},
                          fontFamily: "blanka",
                          color: "white",
                         
                        }}
                    >
                      AND&nbsp;
                      <Typography
                      component="span"
                      variant="h1"
                      sx={{
                        fontSize: {sm:"48px",xs:"28px"},
                          fontFamily: "blanka",
                          color: "#AAE6FF",
                         
                        }}
                    >
                      PRIZES&nbsp;
                    </Typography>
                    </Typography>
                </Typography>
        </Box>
        <Stack sx={{
            alignSelf: "center",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            // pl:{sm:10},
            // maxWidth: { sm: "80%" }
          }}>
          <Typography
            sx={{
              alignSelf: "left",
              width: { sm: "80%", xs: "100%" },
              mt: { xs: 3 },
              fontFamily: "Varela",
              fontSize: {sm:"22px",xs:"16px"},
              color: "white",
            }}
          >
            
            Participants can submit their innovative ideas according to their
            choice of concerned theme irrespective of the already present problem
            statements.
          </Typography>
         
          <img
            src="/images/Prize.png"
            alt="About us image"
            style={{ width: "1000px", height: "auto", cursor: "pointer",alignSelf: "center", }}
          />
          
          <Typography
            sx={{
              alignSelf: "left",
              textAlign:"left",
              width: { sm: "100%", xs: "90%" },
              mt: { xs: 3 },
             
              fontFamily: "Varela",
              fontSize: {sm:"22px",xs:"16px"},
              color: "white",
            }}
          ><ul>
            <li>
            <p>Total cash prizes worth INR 45,000 + goodies for HACKSPIRE 2024</p>
            </li>
            <li>
            <p>Best Prize for innovation and creativity of INR 2,000</p>
            </li>
            <li>
            <p>Certificate of distinction for top 10 teams</p>
            </li>
            <li>
            <p>TCertificate of participation to all teams</p>
            </li>
          </ul>
          </Typography>

               
        </Stack>

        
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
          sm="auto"
          
          sx={{ width: { xs: "100%", sm: "40%" }, ml:{xs: 5, sm:20} }}
        >
          <Stack spacing={2}>
            <Box sx={{alignSelf: "center",
              textAlign: "center",
              paddingTop: "50px",
          }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {sm:"48px",xs:"38px"},
                  fontFamily: "blanka",
                  color:"#AAE6FF"
                }}
              >
                ELIGIBILITY
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {sm:"22px",xs:"16px"},
                  fontFamily: "Varela",
                  color:"#1DD8FE",
                  marginTop: "10px",
                }}
              >
                <ul>
            <li>
            <p>College Students</p>
            </li>
            <li>
            <p>University Students</p>
            </li>
            <li>
            <p>Polytechnic/ Diploma Students</p>
            </li>
          </ul>
              </Typography>
              
            </Box>
            </Stack>
        </Grid>
        <Grid
          item
          sx={{
            mt:{xs:5},
            pl: { sm: 45, xs: 90 },
            display: { xs: "none", sm: "block" },
            
          }}
        >
          <img
            src="/images/Calender.png"
            alt="About us image"
            style={{ width: "600px", height: "auto", cursor: "pointer" }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home