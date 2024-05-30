import { Box, Grid, IconButton, Tab, Tabs } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../components/CreativeCard/CreativeCard';
import { cardData } from './cardData';

const OurWorks = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ my: 5, mb: 10 }}>
            {/* Heading Section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <SectionTitle title={'Here are some of'} colored={'Our Works'} sx={{
                    textAlign: 'left'
                }} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        '& .Mui-selected': {
                            color: 'primary.green',
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize',
                        },
                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile App" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{ border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}}`, mr: 2 }} onClick={() => setValue(value - 1)} disable={value === 0}>
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton sx={{ border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}}` }} onClick={() => setValue(value + 1)} disable={value === 2}>
                            <ArrowBackIcon sx={{
                                transform: 'rotate(180deg)'
                            }}></ArrowBackIcon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Card Section */}

            <Grid container spacing={3} justifyContent='center'>
                {
                    cardData[value].map(image => (
                        <Grid item>
                            <CreativeCard image={image}></CreativeCard>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default OurWorks;