import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import axiosInstance from 'api/apiController';
import { FEATURE_URL } from 'utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Feature = () => {
  const theme = useTheme();
  const [XS, MOBILE] = theme.breakpoints.keys;
  const isMobile = useMediaQuery(theme.breakpoints.between(XS, MOBILE));
  const [images, setImages] = useState([]);
  useEffect(() => {
    const init = async () => {
      const res = await axiosInstance.get('/features');
      setImages(res.data);
    };
    init();
  }, []);
  return (
    <CustomSlider {...settings}>
      {images?.map(({ image, mobileImage }, id) => {
        const imageUrl = isMobile ? mobileImage : image;
        return (
          <img
            key={id}
            src={`${FEATURE_URL}${imageUrl}`}
            alt={`featureImage${id + 1}`}
          />
        );
      })}
    </CustomSlider>
  );
};
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  speed: 3000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CustomSlider = styled(Slider)({
  '.slick-dots': {
    width: 'auto',
    bottom: 10,
    right: 5,
  },
});
export default Feature;
