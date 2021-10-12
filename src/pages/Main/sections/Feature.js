import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import axiosInstance from 'api/apiController';

const Feature = () => {
  const theme = useTheme();
  const [MOBILE] = theme.breakpoints.keys;
  const isMobile = useMediaQuery(theme.breakpoints.down(MOBILE));
  const [images, setImages] = useState([]);
  useEffect(() => {
    const init = async () => {
      const res = await axiosInstance.get('/features');
      setImages(res.data);
    };
    init();
  }, []);

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      stopAutoPlayOnHover={true}
      indicatorContainerProps={{
        style: {
          textAlign: 'right',
          bottom: 10,
          right: 10,
          position: 'absolute',
        },
      }}
    >
      {images.map(({ image, mobileImage }, id) => {
        const imageUrl = isMobile ? mobileImage : image;
        return (
          <div key={id} style={{ width: '100%' }}>
            <img
              src={`${BASE}${imageUrl}`}
              alt={`featureImage${id + 1}`}
              style={{ width: 'inherit' }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};
const BASE = 'https://image.wingeat.com/';
export default Feature;
