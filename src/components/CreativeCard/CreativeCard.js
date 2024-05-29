import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import pizzaImage from '../../images/HomeProductV1-American-Favorite-Feast.jpg'
const CreativeCard = () => {
  // https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
    return (
        <Card sx={{ maxWidth: 345, p: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={pizzaImage}
          title="green iguana"
          style={{
            borderRadius: '10px'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    );
};

export default CreativeCard;