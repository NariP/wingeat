import React from 'react';
import { styled } from '@mui/material/styles';
import { ThemeToggle, CartButton, LogoButton } from './sections';

const DesktopHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <ThemeToggle />
        <CartButton>
          <CartText>장바구니</CartText>
        </CartButton>
      </HeaderTop>
      <HeaderMain>
        <LogoButton size={200} />
      </HeaderMain>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled('header')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
}));
const HeaderTop = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '.8rem 1.3rem',
  backgroundColor: theme.palette.brightGrey,
}));
const CartText = styled('span')(({ theme }) => ({
  padding: '0 0.9rem',
  fontSize: '0.9rem',
  color: theme.palette.text.primary,
}));
const HeaderMain = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  justifyContent: 'center',
  padding: '3rem 0 1.8rem',
}));
export default DesktopHeader;
