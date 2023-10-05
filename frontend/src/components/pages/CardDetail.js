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
  const [cardSizes, setCardSizes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [documentTitle, setDocumentTitle] = useState('Moonpig');

  const [isHovering, setIsHovering] = useState(false);

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
          setCardSizes(data.AvailableSizes);
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

}, [setCardDetail, setCardSizes, setIsLoading, setIsError, cardDetail, id])

  function handleOnMouseEnter() {
    setIsHovering(true);
  } 

  function handleOnMouseLeave() {
    setIsHovering(false);
  }

  return (
    <Container component="main" sx={{ my: 12 }} maxWidth="lg">
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
      {cardDetail ? <Grid container spacing={1}>

          <Grid item sm={12} md={6} sx={{ paddingBottom: '3rem' }}>
              <Card raised={true} sx={{ width: '320px', height: 'auto', margin: 'auto' }}>
                  <CardMedia
                  component="img"
                  src={isHovering ? cardDetail.ImageUrls[3].ImageUrl : cardDetail.ImageUrls[0].ImageUrl}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave} />
              </Card>
          </Grid>

          <Grid item sm={12} md={6} sx={{ position: 'relative' }}>
              <Typography variant="h3" sx={{ paddingBottom: '1.5rem' }}>
                {cardDetail.Title}
              </Typography>

              <Typography variant="h5">
                <i>
                {cardDetail.ProductCategoryGroup.Name}
                </i>
              </Typography>

              <p sx={{ paddingBottom: '1.5rem' }}>
                {cardDetail.Description}
              </p>

              {cardSizes ? <div>
                <Typography variant="h5" >
                  Available sizes:
                </Typography>

                <Box sx={{ marginTop: '1rem', maxHeight: '200px', overflowY: 'auto' }}>

                {cardSizes.map((size) => (
                    <Box key={size.Id} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <Typography variant='h4'>
                        {size.DisplayName}
                      </Typography>
                      <Typography variant='h4'>
                        {`${size.Currency} ${size.Price}`}
                      </Typography>
                    </Box>
                  ))}

                </Box>
              </div> : <></>}

            <Button variant="outlined" size="large"
            sx={{ bottom: 0, position: 'relative' }}>Buy Me</Button>
          </Grid>

        </Grid> : <></>}
    </Container>
  )
}
