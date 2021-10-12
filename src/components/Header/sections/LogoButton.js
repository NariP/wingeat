import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { PATH } from 'routes';
import PropTypes from 'prop-types';

const LogoButton = ({ size }) => {
  return (
    <LinkWrapper to={PATH.MAIN} size={size}>
      <Logo src="/static/we_logo_transparent.png" alt="logo" />
    </LinkWrapper>
  );
};

LogoButton.prototype = {
  size: PropTypes.number.isRequired,
};

const LinkWrapper = styled(Link)(({ size }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: size,
}));
const Logo = styled('img')(({ theme }) => ({
  filter: theme.palette.logoFilter,
  width: 'inherit',
}));
export default LogoButton;
