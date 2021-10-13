import React from 'react';
import { styled } from '@mui/material/styles';

const MainHeader = () => {
  return (
    <Wrapper>
      <span>윙잇 MADE</span>
    </Wrapper>
  );
};
const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  padding: '2em 0',
  '& > span': {
    color: theme.palette.text.primary,
    fontSize: '2em',
    fontWeight: 'bold',
  },
}));
export default MainHeader;
