import React from 'react';
import IconLink from './IconLink';
import { Box, Typography } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title, description } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '1.7rem' }}>{title}</h1>
      <Typography
        component="p"
        variant="body2"
        style={{ textAlign: 'center', maxWidth: '325px', minHeight: '40px' }}
      >
        {description}
      </Typography>
      <Box
        className={'portfolio'}
        display={'flex'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.2rem'}
        py={'2rem'}
      >
        {live && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
          </Box>
        )}
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
