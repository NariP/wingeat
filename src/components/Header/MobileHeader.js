import React from 'react';
import { styled } from '@mui/material/styles';
import { LogoButton, CartButton, ThemeToggle } from './sections';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MobileHeader = () => {
  return (
    <HeaderWrapper>
      <LogoButton size={150} />
      <ButtonWrapper>
        <CartButton>
          <ShoppingCartIcon />
        </CartButton>
        <ThemeToggle />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  backgroundColor: theme.palette.background.default,
  padding: '2.8rem 1rem',
}));
const ButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  svg: {
    color: theme.palette.text.primary,
  },
  '& > span': {
    position: 'relative',
  },
  '& > button': {
    marginLeft: '0.5em',
    padding: 0,
    position: 'relative',
    bottom: 2,
  },
}));
export default MobileHeader;
