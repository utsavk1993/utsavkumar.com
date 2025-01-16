import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';

export default function Recommendations() {

  useEffect(() => {
    // Dynamically inject the script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-recommendations/widget.js';
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box id={'recommendations'}>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid item xs={12} md={10}>
          <div
            className="sk-ww-linkedin-recommendations"
            data-embed-id="25456507"
          ></div>
        </Grid>
      </Grid>
    </Box>
  );
}
