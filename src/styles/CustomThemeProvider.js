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
      toggleColorMode: () =>
        setMode(prevMode => (prevMode === LIGHT ? DARK : LIGHT)),
    }),
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        breakpoints: {
          values: {
            mobile: 990,
            laptop: 1024,
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
