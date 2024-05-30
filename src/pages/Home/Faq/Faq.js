import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import CreativeAccordion from '../../../components/CreativeAccordion/CreativeAccordion';

const Faq = () => {
    return (
        <Box sx={{
            mb: 8
        }}>
            <SectionTitle title={'Frequently asked'} colored={'questions'}></SectionTitle>
            <Box sx={{
                display:'flex',
                flexDirection: 'column',
                columnGap: 2,
                mt: 5
            }}>
                <CreativeAccordion title={'How do I pay for the Essentials or Premium plan?'} discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore architecto neque id ipsam doloremque labore perferendis itaque maiores natus!'}></CreativeAccordion>
                <CreativeAccordion title={'Can I cancel my Essentials or Premium plan subscription at any time?'} discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore architecto neque id ipsam doloremque labore perferendis itaque maiores natus!'}></CreativeAccordion>
                <CreativeAccordion title={'We need to add new users to our team. How will that be billed?'} discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore architecto neque id ipsam doloremque labore perferendis itaque maiores natus!'}></CreativeAccordion>
                <CreativeAccordion title={'My team wants to cancel its subscription. How do we do that? Can we get a refund?'} discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore architecto neque id ipsam doloremque labore perferendis itaque maiores natus!'}></CreativeAccordion>
                <CreativeAccordion title={'Do you offer discounts for non-profit organizations or educational institutions?'} discription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore architecto neque id ipsam doloremque labore perferendis itaque maiores natus!'}></CreativeAccordion>
            </Box>
        </Box>
    );
};

export default Faq;