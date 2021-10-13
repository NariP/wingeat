import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DesktopHeader, MobileHeader } from 'components';

const GeneralLayout = ({ children }) => {
  const theme = useTheme();
  const [XS, MOBILE] = theme.breakpoints.keys;
  const isMobile = useMediaQuery(theme.breakpoints.between(XS, MOBILE));
  return (
    <div style={{ backgroundColor: theme.palette.background.paper }}>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <main>{children}</main>
    </div>
  );
};

export default GeneralLayout;
