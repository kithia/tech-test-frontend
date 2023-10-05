import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 * Functional component for the list of all cards
 * @returns The JSX representation of the component
 */
export default function CardList() {
    
    // Functional states
    const [cards, setCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // Page title
    document.title = "Card Listings | Moonpig"

    // Styling
    const cardStyle = { 
        position: 'relative', 
        height: '307px',
        width: '217px', 
        m: 'auto'
    }

    // Executes on load and everytime any dependacy changes
    useEffect(() => {
        // Fetches the card details from the Moonpig API
        const loadCards = async () => {
            fetch('https://moonpig.github.io/tech-test-frontend/search.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCards(data.Products);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            })
        }

        loadCards();

    }, [setCards, setIsLoading, setIsError])

  return (
    <Container component="main" sx={{ my: 16 }} maxWidth="lg">
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
          * error message to the user.
          */}
        {isError ? <Box>
            <Typography variant="h2" gutterBottom>
                An error has occured, please refresh the page.
            </Typography>
        </Box> : <></>}

        {/**
         * Card list
         */}
        {cards ? <Grid container spacing={6}>

            {cards.map((card) => (
                <Grid item xs={12} sm={6} md={3} key={card.ProductId}>

                    <Card raised={true}
                        sx={cardStyle}>
                        <Link href={`/cards/${card.MoonpigProductNo}`}>
                        <CardActionArea sx={{ bottom: '0', position: 'absolute' }}>
                            <CardMedia
                            component="img"
                            height="307"
                            width="217"
                            sx={{ width: '100%', height: 'auto' }}
                            src={card.ProductImage.Link.Href}
                            alt={card.seo} />
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            ))}

        </Grid> : <></>}

    </Container>
  )
}
