import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopHeader, MobileHeader } from 'components';

const GeneralLayout = ({ children }) => {
  const theme = useTheme();
  const [MOBILE] = theme.breakpoints.keys;
  const isMobile = useMediaQuery(theme.breakpoints.down(MOBILE));
  return (
    <div>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <div style={{ backgroundColor: 'coral' }}>carousel</div>
      <div>{children}</div>
    </div>
  );
};

export default GeneralLayout;
