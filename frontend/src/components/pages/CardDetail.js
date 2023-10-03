import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function CardDetail() {
  const [cardDetail, setCardDetail] = useState(null);
  const [documentTitle, setDocumentTitle] = useState('Moonpig')
  const { id } = useParams();

  document.title = documentTitle;

  useEffect(() => {
    const loadCardDetail = async () => {
        fetch(`https://moonpig.github.io/tech-test-frontend/product/${id}.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCardDetail(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadCardDetail();
    
    if (cardDetail) { 
      setDocumentTitle(`${cardDetail.Title} | Moonpig`);
    }

}, [setCardDetail, cardDetail, id])

  return (
    <Container component="main" sx={{ mt: 12, mb:'auto' }} maxWidth="lg">
      { cardDetail ?
        <Grid container spacing={2}>
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
        </Grid> : null }
    </Container>
  )
}
