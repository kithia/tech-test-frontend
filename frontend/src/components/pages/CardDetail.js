import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

/**
 * Functional component for the details of a given card
 * @returns The JSX representation of the component
 */
export default function CardDetail() {

  // Functional states
  const [cardDetail, setCardDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [documentTitle, setDocumentTitle] = useState('Moonpig')

  // MoonpigProductId taken from URL parameters
  const { id } = useParams();

  // Page title
  document.title = documentTitle;

  // Executes on load and everytime any dependacy changes
  useEffect(() => {
    // Fetches the card details from the Moonpig API
    const loadCardDetail = async () => {
        fetch(`https://moonpig.github.io/tech-test-frontend/product/${id}.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCardDetail(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsError(true);
          setIsLoading(false);
        });
    }

    loadCardDetail();
    
    // Updates page title
    if (cardDetail) { 
      setDocumentTitle(`${cardDetail.Title} | Moonpig`);
    }

}, [setCardDetail, setIsLoading, setIsError, cardDetail, id])

  return (
    <Container component="main" sx={{ mt: 12, mb:'auto' }} maxWidth="lg">
      {/** 
       * Loading circle upon component load
       */}
      {isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress className='mx-auto' />
        </Box> : <></>}

      {/** 
       * Error message upon API error response
       * 
       * Currently it assumes a 404 error.
       * If I had more time, I would identify the error
       * status, and give a more appropriate, specific 
       * error message to the user
       */}
      {isError ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h2" gutterBottom>
              Sorry, it seems this item does not exist
          </Typography>
      </Box> : <></>}

      {/**
       * Card details
       */}
      {cardDetail ? <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
              <Card raised={true} sx={{ width: '300px', height: 'auto', margin: 'auto' }}>
                  <CardMedia
                  component="img"
                  src={cardDetail.ImageUrls[0].ImageUrl} />
              </Card>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Typography variant="h4">
              {cardDetail.Title}
            </Typography>

            <Button variant="contained" size="large"
            sx={{ bottom: 0, position: 'absolute' }}>Buy Me</Button>
          </Grid>

        </Grid> : <></>}
    </Container>
  )
}
