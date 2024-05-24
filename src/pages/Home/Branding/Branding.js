import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({theme}) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',  
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
    display: 'flex',
    justifyContent: 'space-between',
}))

const Branding = () => {
    return (
        <BrandingWrapper>
            <Box>
                <Typography sx={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>Let's Grow Your Brand To The Next Level</Typography>
                <Typography sx={{
                    my:2
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </Typography>
                <Button>Hire Us</Button>
            </Box>
            <Box>
                <img src="https://i.ibb.co/xfww0j9/image.png" alt="Branding" style={{width: '100%'}} />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;