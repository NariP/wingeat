import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const MainHeader = () => {
  return (
    <Wrapper>
      <Typography variant="pageTitle" component="div" color="text.primary">
        윙잇 MADE
      </Typography>
    </Wrapper>
  );
};
const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  padding: '2em 0',
}));
export default MainHeader;
