import * as React from "react";
import CottageIcon from '@mui/icons-material/Cottage';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../styles/notfound.css'

const Notfound = () => {
  return (
    <div className="notfound" >
      <Link style={{textDecoration:'none'}} to="/">
        <Button sx={{textDecoration:'none'}} variant="outlined" color="error" endIcon={<CottageIcon />} >
          404 | Back Home
        </Button>
      </Link>
    </div>
  );
};

export default Notfound;
