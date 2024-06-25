"use client";
import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const Sponsors = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ textAlign: 'center', mt: 20 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/1.png"
          width={isSmallScreen ? 400 : 800}
          height={20}
          alt="Gold Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: isSmallScreen ? 2 : 20, mb: 20, flexWrap: isSmallScreen ? 'wrap' : 'nowrap' }}>
        <Image
          src="/images/devfolio.png"
          width={isSmallScreen ? 150 : 300}
          height={100}
          alt="DEVFOLIO LOGO"
        />
        <Image
          src="/images/polygon.png"
          width={isSmallScreen ? 150 : 300}
          height={100}
          alt="POLYGON LOGO"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/4.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 20 }}>
        <Image
          src="/images/ethindia.png"
          width={isSmallScreen ? 150 : 300}
          height={100}
          alt="ETHINDIA LOGO"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/5.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: isSmallScreen ? 1 : 6, mb: 20, flexWrap: isSmallScreen ? 'wrap' : 'nowrap' }}>
        <Image
          src="/images/acm.jpeg"
          width={isSmallScreen ? 150 : 150}
          height={20}
          alt="acm"
        />
        <Image
          src="/images/aicte.jpeg"
          width={isSmallScreen ? 150 : 150}
          height={20}
          alt="acm"
        />
        <Image
          src="/images/iic.jpeg"
          width={isSmallScreen ? 150 : 250}
          height={20}
          alt="acm"
        />
        <Image
          src="/images/moe.jpeg"
          width={isSmallScreen ? 150 : 250}
          height={20}
          alt="acm"
        />
        <Image
          src="/images/eds.jpeg"
          width={isSmallScreen ? 150 : 250}
          height={20}
          alt="eds"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/2.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Image
          src="/images/3.png"
          width={isSmallScreen ? 400 : 800}
          height={100}
          alt="Silver Sponsors"
        />
      </Box>
    </Box>
  );
};

export default Sponsors;
