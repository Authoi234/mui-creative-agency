import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({ image }) => {
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 'none',
            '&:hover': {
                boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)'
            }
        }}>
            <CardMedia
                sx={{
                    width: 'auto',
                    mx: 'auto',
                }}
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent sx={{
                textAlign: 'center'
            }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontWeight: 'bold'
                }}>
                    Web & Mobile design
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Service;