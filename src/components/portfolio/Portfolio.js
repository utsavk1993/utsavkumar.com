import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio({ innerRef }) {
  return (
    <Box id={'portfolio'} ref={innerRef}>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
