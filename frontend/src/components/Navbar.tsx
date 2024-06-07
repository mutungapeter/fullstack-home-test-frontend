import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      style={{ backgroundColor: "var(--primary-steel-blue)" }}
      >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{ color: "var(--primary-yellow)" }}
          >
         <Link to="/" style={{ textDecoration: 'none', color: "var(--primary-yellow)" }}>
              Home
            </Link>
          </Typography>
          <Button  style={{ color: "var(--primary-yellow)" }}>

          <Link to="/reading-list" style={{ textDecoration: 'none', color: "var(--primary-yellow)" }}>
              Reading List
            </Link>
          
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
