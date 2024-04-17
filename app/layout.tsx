import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ContactUs from './components/ContactUs';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const inter = Inter({ subsets: ['latin'] });

import NavBar from './components/Navbar';
import { Box, CssBaseline } from '@mui/material';
import Footer from './components/FooterSection';
export const metadata: Metadata = {
  title: 'Hackspire 2024',
  description:
    '  Hackspire is a statewide initiative to provide engineering students to solve some of the common problems we face in our daily life, and thus inculcate a culture of product innovation and a mindset of real time problem solving.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <Box
            sx={{
              width: '100%',
              backgroundImage: 'linear-gradient(90deg,#000000,#0a085c)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <NavBar />
            {children}
            <ContactUs />
            <Footer />
          </Box>
          <Analytics />
          <SpeedInsights />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
