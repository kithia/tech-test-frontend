import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Layout() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >

          <Outlet />

          <Footer />
          
        </Box>
      </React.Fragment>
  )
}
