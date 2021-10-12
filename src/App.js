import React from 'react';
import { Router } from 'routes';
import { GeneralLayout } from './layouts';

const App = () => {
  return (
    <GeneralLayout>
      <Router />
    </GeneralLayout>
  );
};

export default App;
