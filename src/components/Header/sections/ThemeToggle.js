import React, { useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from 'styles/CustomThemeProvider';

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? (
        <Brightness4Icon />
      ) : (
        <Brightness7Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
