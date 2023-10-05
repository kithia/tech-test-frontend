import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

/**
 * Adapted from https://github.com/mui/material-ui/tree/v5.14.11/docs/data/material/getting-started/templates/sticky-footer
 */

/**
 * Functional component for a link to
 * this GitHub repository
 * @returns The JSX representation of the component
 */
function Repository() {
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

/**
 * Functional component for the footer
 * of each web page
 * @returns The JSX representation of the component
 */
function Footer() {
  return (
    <Box
        component="footer"
        sx={{
        py: 3,
        px: 2,
        mt: 'auto',
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
        <Repository />
        </Container>
    </Box>
  )
}

export default Footer