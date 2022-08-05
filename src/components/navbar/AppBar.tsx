import * as React from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

export default AppBar;