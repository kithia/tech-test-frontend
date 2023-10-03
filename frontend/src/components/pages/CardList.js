import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from '@mui/material';

export default function CardList() {
    document.title = "Card Listings | Moonpig"

    const [cards, setCards] = useState(null);

    useEffect(() => {
        const loadCards = async () => {
            fetch('https://moonpig.github.io/tech-test-frontend/search.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCards(data.Products);
            })
            .catch((error) => {
                console.log(error);
            })
        }

        loadCards();

    }, [setCards])

  return (
    <Container component="main" sx={{ my: 16 }} maxWidth="lg">
        <Grid container spacing={2}>

            {cards ? cards.map((card) => (
                <Grid item xs={12} sm={6} md={3} key={card.ProductId}>

                    <Card raised={true}
                        sx={{ position: 'relative', height: '307px',
                        width: '217px' }}>
                        <Link href={'/cards/' + card.MoonpigProductNo}>
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
            )) : <></>}

        </Grid>
    </Container>
  )
}
