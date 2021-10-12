import React from 'react';
import { Paper } from '@material-ui/core';

const FeatureItem = ({ item }) => {
  return (
    <Paper style={{ background: 'coral', height: 200 }}>
      {/*<img src='' alt='featureImage' />*/}
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Paper>
  );
};

export default FeatureItem;
