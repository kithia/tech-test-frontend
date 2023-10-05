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

  // Styling
  const centerBoxStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  const imageCardStyle = {
    width: '350px',
    height: 'auto',
    margin: 'auto'
  }

  const priceBoxStyle = {
    my: '0.5rem',
    height: 'auto',
    overflowY: 'auto'
  }

  const priceCardStyle = { display: 'flex',
    p: '1rem',
    justifyContent: 'space-between',
    mb: '1rem' 
  }

  const buyButtonStyle = { 
    bottom: 0, 
    position: 'relative',
    width: '17.5rem',
    p: '1rem'
  }

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

          /**
           * Sorts the card sizes in order of DisplayOrder
           * and stores them
           */ 
          setCardSizes(data.AvailableSizes.sort((a, b) => a.DisplayOrder - b.DisplayOrder));
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

  /**
   * Sets isHovering state to true
   */
  function handleOnMouseEnter() {
    setIsHovering(true);
  } 

  /**
   * Sets isHovering state to false
   */
  function handleOnMouseLeave() {
    setIsHovering(false);
  }

  return (
    <Container component="main" sx={{ my: 12 }} maxWidth="lg">
      {/** 
       * Loading circle upon component load
       */}
      {isLoading ? <Box sx={centerBoxStyle}>
            <CircularProgress />
        </Box> : <></>}

      {/** 
       * Error message upon API error response
       * 
       * Currently it assumes a 404 error.
       * If I had more time, I would identify the error
       * status, and give a more appropriate, specific 
       * error message to the user
       */}
      {isError ? <Box sx={centerBoxStyle}>
          <Typography variant="h2" gutterBottom>
              Sorry, it seems this item does not exist
          </Typography>
      </Box> : <></>}

      {/**
       * Card details
       */}
      {cardDetail ? <Grid container spacing={1}>

          {/** Card image */}
          <Grid item sm={12} md={6} sx={{ pb: '3rem' }}>
              <Card raised={true} sx={imageCardStyle}>
                  <CardMedia
                  component="img"
                  src={isHovering ? cardDetail.ImageUrls[3].ImageUrl : cardDetail.ImageUrls[0].ImageUrl}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave} />
              </Card>
          </Grid>

          {/** Card text details */}
          <Grid item sm={12} md={6} sx={{ position: 'relative' }}>
              <Typography variant="h4">
                {cardDetail.Title}
              </Typography>

              <Typography variant="h5">
                <i>
                {cardDetail.ProductCategoryGroup.Name}
                </i>
              </Typography>

              <p>
                {cardDetail.Description}
              </p>

              {/** Available card sizes */}
              {cardSizes ? <div>
                <Typography variant="h5" sx={{ mt: '2rem' }}>
                  Available sizes:
                </Typography>

                <Box sx={priceBoxStyle}>

                {cardSizes.map((size) => (
                    <Card variant="outlined" key={size.Id} sx={priceCardStyle}>
                      <Typography variant='h5'>
                        {size.DisplayName}
                      </Typography>
                      <Typography variant='h5'>
                        {`${size.Currency} ${size.Price}`}
                      </Typography>
                    </Card>
                  ))}

                </Box>
              </div> : <></>}

            <Button variant="outlined" size="large"
            sx={buyButtonStyle}>Buy Me</Button>
          </Grid>

        </Grid> : <></>}
    </Container>
  )
}
