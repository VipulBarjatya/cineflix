import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import useStyles from './styles';

const redLogo =
  'https://fontmeme.com/permalink/221110/af693086783cea474b5a4d0307e92594.png';
const blueLogo =
  'https://fontmeme.com/permalink/221110/87040a23b9b330d61fbe95078ace7eff.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="Cineflix logo"
        />
      </Link>
    </>
  );
};

export default Sidebar;
