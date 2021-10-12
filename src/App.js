import React from 'react';
import { Router } from 'routes';
import { Global } from '@emotion/react';
import { GlobalStyle, CustomThemeProvider } from './styles';
import { GeneralLayout } from './layouts';

const App = () => {
  return (
    <CustomThemeProvider>
      <Global styles={GlobalStyle} />
      <GeneralLayout>
        <Router />
      </GeneralLayout>
    </CustomThemeProvider>
  );
};

export default App;
