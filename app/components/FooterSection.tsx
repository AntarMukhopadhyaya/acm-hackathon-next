"use client";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


function FooterSection() {
  return (
    <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        backgroundImage: 'linear-gradient(to right, #3F80FF, #5CE1E6)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
        textAlign: 'center',
      
      }}>
        <Box className="items-center text-center" sx={{display:{xs:'none', sm:"flex"}}}> 
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: "clamp(3.5rem, 10vw, 4rem)",
                    fontFamily: "blanka",
                    color: "#084081",
                    pt:"30px",
                    ml:-10
                  }}
                >
                  FOLLOW
                </Typography>
                <div style={{position: "absolute",
                marginLeft:-162,
                marginTop:100
    }}>
                  <Typography
                      component="span"
                      variant="h1"
                      sx={{
                          fontSize: "clamp(3rem, 10vw, 4rem)",
                          fontFamily: "blanka",
                          color: "white",
                          ml:"350px",
                          pt:"-30px"
                        }}
                    >
                      US
                    </Typography>
                </div>
        </Box>
        <Box className="items-center text-center" sx={{display:{xs:'flex', sm:"none"}, marginTop:4 }}> 
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: "28px",
                    fontFamily: "blanka",
                    color: "#084081",
                  }}
                >
                  FOLLOW&nbsp;
                </Typography>

                  <Typography
                      component="span"
                      variant="h1"
                      sx={{
                          fontSize: "28px",
                          fontFamily: "blanka",
                          color: "white",
                        }}
                    >
                      US
                    </Typography>
        </Box>
        <div className="items-center text-center">
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: {sm:"24px", xs:"12px"},
                    fontFamily: "popBold",
                    color: "#040F19",
                    pt:{xs:"30px", sm:"50px"}
                  }}
                >
                  © 2024-25 HACKSPIRE . All rights reserved
                </Typography>
                <Typography
                    component="span"
                    variant="h1"
                    sx={{
                        fontSize: {sm:"24px", xs:"12px"},
                        fontFamily: "popBold",
                        color: "#040F19"
                      }}
                  >
                    www.hackspire.org.in
                  </Typography>
        </div>
        <Box className="items-center text-center flex flex-row mt-5" sx={{width:{xs:30, sm:100}, marginLeft:{sm:-32, xs:-20}}}>
        <img
            src="/images/facebook.png"
            alt="about1"
            style={{ width: "50px", height: "auto", cursor: "pointer", margin: "10px" }}
          />
          <img
            src="/images/instagram.png"
            alt="about1"
            style={{ width: "50px", height: "auto", cursor: "pointer", margin: "10px"  }}
          /><img
          src="/images/linkedin.png"
          alt="about1"
          style={{ width: "50px", height: "auto", cursor: "pointer",margin: "10px"  }}
        />
      
          <img
            src="/images/twitter.png"
            alt="about1"
            style={{ width: "50px", height: "auto", cursor: "pointer", margin: "10px"  }}
          />
        </Box>
        <div className="items-center text-center">
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: {sm:"24px", xs:"12px"},
                    fontFamily: "popBold",
                    color: "#040F19",
                    pt:"30px"
                  }}
                >
                  Made with ❤ by HACKSPIRE TECH TEAM
                </Typography>
        </div>
        <div className="mt-10">

        </div>

      </Box>
  )
}

export default FooterSection;