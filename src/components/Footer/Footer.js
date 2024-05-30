import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', py:8 }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography sx={{ fontSize: '1.5rem', color: 'white', flex: 1 }}>
                        Creative Agency
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ color: 'rgba(225,225,225, 0.5)' }}>
                            Creative Agency
                        </Typography>
                        <Button sx={{ bgcolor: 'primary.green', ml: 2, '&:hover' : {bgcolor: 'primary.green'}, }}>Get Started</Button>
                    </Box>
                </Box>
                <Divider sx={{mt: 3, bgcolor: 'rgba(255,255,255,0.5)'}}></Divider>

            </Container>
        </Box>
    );
};

export default Footer;