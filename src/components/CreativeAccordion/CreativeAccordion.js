import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';

const customExpandIcon = () => {
    return (
        <div>
            <div className='expandMoreIcon'>
                <AddIcon></AddIcon>
            </div>
            <div className='removeExpandIcon'>
                <RemoveIcon></RemoveIcon>
            </div>
        </div>
    )
}

const CreativeAccordion = ({title, discription}) => {
    return (
        <Accordion sx={{
            boxShadow: 'none',
            border: '1px solid #ESEAF4',
            p: 2,
            '& .Mui-expanded' : {
                '& .expandMoreIcon': {
                    display: 'none'
                },
                '& .removeExpandeIcon': {
                    display: 'block'
                }
            }
        }}>
            <AccordionSummary
                sx={{
                    '& .removeExpandIcon':{
                        display: 'none'
                    },
                    '& p': {
                        color: 'primary.main',
                        fontWeight: 'bold'
                    },
                    '& .Mui-expanded': {
                        '& p': { color: 'primary.green' }
                    }
                }}
                expandIcon={
                    <customExpandIcon></customExpandIcon>
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   {discription}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CreativeAccordion;