import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Feature, MainHeader, List } from './sections';

const Main = () => {
  return (
    <Wrapper maxWidth="desktop">
      <Feature />
      <MainHeader />
      <List />
    </Wrapper>
  );
};
const Wrapper = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 0,
}));

export default Main;
