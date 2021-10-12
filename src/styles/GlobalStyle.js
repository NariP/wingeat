import { css } from '@emotion/react';
const GlobalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
  a: {
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
  },
  li: {
    listStyle: 'none',
  },
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  input: {
    '&:focus': { outline: 'none' },
  },
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 'normal',
    fontSize: '1em',
  },
});
export default GlobalStyle;
