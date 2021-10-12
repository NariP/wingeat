import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Main, Cart, PageNotFound } from 'pages';

const Router = () => {
  return useRoutes([
    {
      path: '*',
      children: [
        {
          path: '',
          element: <Main />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: '404',
          element: <PageNotFound />,
        },
        {
          path: '*',
          element: <Navigate to="/404" />,
        },
      ],
    },
  ]);
};
export default Router;
