"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";

import "./fonts/font.css";
import Link from "next/link";

const logoStyle = {
  width: "130px",
  height: "auto",
  cursor: "pointer",
};

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(10px)",
              height: "90px",
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "20px",
                px: 1,
              }}
            >
              <Box
                sx={{
                  mr: "40px",
                }}
              >
                <Link href="/">
                  <img
                    onClick={() => scrollToSection("hero")}
                    src="/images/logo.png"
                    style={logoStyle}
                    alt="logo of sitemark"
                  />
                </Link>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Button
                    onClick={handleClick}
                    aria-controls={openMenu ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                  >
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      Discover HACKSPIRE
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    <Link href="/problem-statement">Problem Statements</Link>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("processflow")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    <Link href="/executive-team">Executive Team</Link>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("pricing")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    <Link href="/guidelines">Guidelines</Link>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("faq")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    Idea Template
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    <Link href="/hackathon-details">Hackathon Details</Link>
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            ></Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "50px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(4px)",
                  boxShadow:
                    "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",}}>
                <Box onClick={toggleDrawer(false)}
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "#0d0d0d",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/">Discover HACKSPIRE</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                  sx={{ py: "20px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    <Link href="/problem-statement">Problem Statements</Link>
                  </Typography>
                </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/executive-team">Executive Team</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/guidelines">Guidelines</Link>
                    </Typography>
                  </MenuItem >
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      Idea Template
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ py: "20px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      fontSize="20px"
                      fontFamily="Varela"
                    >
                      <Link href="/hackathon-details">Hackathon Details</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                  sx={{ py: "20px", px: "12px" }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    fontSize="20px"
                    fontFamily="Varela"
                  >
                    FAQ
                  </Typography>
                </MenuItem>
                </Box>
              </Drawer>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="basic-menu"
              open={openMenu}
              onClose={handleClose}
              onClick={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                mt: "1px",
                "& .MuiMenu-paper": {
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(24px)",
                  boxShadow:
                    "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                },
              }}

            >
              <MenuItem onClick={() => scrollToSection("aboutus")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  About HACKSPIRE 2024
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("processflow")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  HACKSPIRE Process Flow
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("theme")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  HACKSPIRE Themes
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("#")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  HACKSPIRE Teams
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("prizes")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  HACKSPIRE Rewards & Prizes{" "}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("#")}>
                <Typography
                  color="white"
                  fontSize="16px"
                  fontFamily="Varela"
                  padding="5px"
                >
                  HACKSPIRE Rules and Regualation
                </Typography>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
