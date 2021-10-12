import React from 'react';
import { styled } from '@mui/material/styles';
import { LogoButton, CartButton, ThemeToggle } from './sections';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MobileHeader = () => {
  return (
    <HeaderWrapper>
      <LogoButton size={150} />
      <div>
        <CartButton>
          <ShoppingCartIcon />
        </CartButton>
        <ThemeToggle />
      </div>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  padding: '2.8rem 1rem',
  svg: {
    color: theme.palette.text.primary,
  },
  '& > div > button': {
    marginLeft: '0.5em',
  },
}));
export default MobileHeader;
