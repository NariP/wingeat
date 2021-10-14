import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constants';

export const ColorModeContext = createContext({});

const CustomThemeProvider = ({ children }) => {
  const localThemeMode = localWorker.getItem(LS_KEY.THEME_MODE);
  const [mode, setMode] = useState(localThemeMode || LIGHT);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => {
          const themeMode = prevMode === LIGHT ? DARK : LIGHT;
          localWorker.setItem(LS_KEY.THEME_MODE, themeMode);
          return themeMode;
        });
      },
    }),
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                logoFilter: 'none',
                brightGrey: '#f5f5f5',
              }
            : {
                logoFilter: 'brightness(0) invert(1)',
                brightGrey: '#383b42',
              }),
        },
        breakpoints: {
          values: {
            xs: 0,
            mobile: 991,
            desktop: 1200,
          },
        },
        typography: {
          pageTitle: {
            fontSize: '2em',
            fontWeight: 'bold',
          },
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
const [LIGHT, DARK] = ['light', 'dark'];
export default CustomThemeProvider;
