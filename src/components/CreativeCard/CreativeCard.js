import React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@mui/material';

const CreativeCard = ({ image }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', minWidth: '345px' }}>
      <CardMedia
        sx={{ height: 170 }}
        image={image}
        title="green iguana"
        style={{
          borderRadius: '10px'
        }}
      />
      <CardContent sx={{
        p: 0,
        pb: 0,
        pt: 4,
        '&:last-child': {
          pb: 0
        },
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box>
          <Typography gutterBottom variant="h5" component="div" color="text.secondary" >
            Web Design
          </Typography>
          <Typography variant="body2" color='primary.main' fontWeight={600} fontSize={20}>
            Web Design Research
          </Typography>
        </Box>
        <IconButton sx={{
          height: '30px',
          width: '30px',
          '& svg': {
            color: 'primary.main'
          }
        }}>
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;