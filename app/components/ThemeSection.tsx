"use client";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { themes } from "./ThemesList";
import Link from "next/link";

function ThemeSection() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="theme" sx={{ mt: { xs: 20 }, maxWidth: { xs: "1300px" } }}>
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
            color: "#AAE6FF",
          }}
        >
          THEMES
        </Typography>
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 5 },
            mb: { xs: 5 },
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
            color: "white",
          }}
        >
          No problem is too big... No idea is too small
        </Typography>
      </Box>
      <div className="slider-container">
        <Slider {...settings}>
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="card w-96 bg-gradient-to-r from-[#3F80FF] to-[#5CE1E6] shadow-xl">
                <figure>
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="rounded-xl"
                    style={{ maxWidth: 390 , height: 'auto' }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h1
                    className="card-title"
                    style={{ fontFamily: "popBold", fontSize: "24px" }}
                  >
                    {theme.title}
                  </h1>
                  <div className="card-actions">
                    <Link href="/problem-statement" className="btn  btn-secondary">Know More</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            alignSelf: "left",
            width: { sm: "100%", md: "100%" },
            mt: { xs: 3 },
            fontFamily: "Varela",
            fontSize: { sm: "22px", xs: "16px" },
            color: "white",
          }}
        >
          Participants can submit their innovative ideas according to their
          choice of concerned theme irrespective of the already present problem
          statements.
        </Typography>
      </Box>
    </Container>
  );
}

export default ThemeSection;