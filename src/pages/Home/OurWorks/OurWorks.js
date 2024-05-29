import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurWorks = () => {
    return (
        <Box sx={{mt: 5}}>
            {/* Heading Section */}
            <Box>
                <SectionTitle title={'Here are some of'} colored={'Our Works'} sx={{
                    textAlign: 'left'
                }} />
                <Box>

                </Box>
            </Box>
        </Box>
    );
};

export default OurWorks;