import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

/**
 * Functional component for the outermost layout
 * of each web page
 * @returns The JSX representation of the component
 */
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
          {/** 
           * The variable child component,
           * which is swaped aout the the corresponidng
           * component of each url path
           */}
          <Outlet />
          
        </Box>
      </React.Fragment>
  )
}
