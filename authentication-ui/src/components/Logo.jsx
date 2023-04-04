import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import image from '../icon_logo.png';

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src={image} alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
