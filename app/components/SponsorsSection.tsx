import Image from "next/image";
import { Box } from "@mui/material";

const Sponsors = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{display: 'flex', justifyContent: 'center', mb:8}}>
        <Image src="/images/1.png" width={800} height={20} alt="Gold Sponsors" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 20 }}>
        <Image src="/images/devfolio.png" width={300} height={100}  alt="DEVFOLIO LOGO" />
        <Image src="/images/polygon.png" width={300} height={100} alt="POLYGON LOGO" />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center',mb:8}}>
        <Image src="/images/4.png" width={800} height={100} alt="Silver Sponsors" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 20 }}>
        <Image src="/images/ethindia.png" width={300} height={100} alt="ETHINDIA LOGO" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8}}>
        <Image src="/images/5.png" width={800} height={100} alt="Silver Sponsors" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 20 }}>
        <Image src="/images/acm.jpeg" width={600} height={20}  alt="acm" />
        <Image src="/images/eds.jpeg" width={300} height={20} alt="eds" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center',}}>
        <Image src="/images/2.png" width={800} height={100} alt="Silver Sponsors" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center',}}>
        <Image src="/images/3.png" width={800} height={100} alt="Silver Sponsors" />
      </Box>
    </Box>
  );
}

export default Sponsors;
