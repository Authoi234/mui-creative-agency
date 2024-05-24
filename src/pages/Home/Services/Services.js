import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box>
            <SectionTitle title={'Provide awesome'} colored={'Services'}></SectionTitle>

            <Grid container spacing={2}>
                {serviceImages.map((image, i) => {
                    <Service image={image} key={i}></Service>
                })}
            </Grid>
        </Box>
    );
};

export default Services;