import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Codebase avilable on '}
        <Link color="inherit" href="https://github.com/kithia/tech-test-frontend">
          GitHub
        </Link>
        {'.'}
      </Typography>
    );
  }

function Footer() {
  return (
    <Box
        component="footer"
        sx={{
        py: 3,
        px: 2,
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        }}
    >
        <Container maxWidth="sm">
        <Typography variant="body1">
            Created by Kĩthia Ngigĩ
        </Typography>
        <Copyright />
        </Container>
    </Box>
  )
}

export default Footer