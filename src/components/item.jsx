import { Paper, Button } from "@mui/material";
import "../styles/paper.css";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

const Item = ({ item }) => {
  return (
    <Box position="relative">
      <img src={item.image} alt={item.title} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "Permanent Marker",
            color: "#16942a",
            fontSize: "23px",
            textShadow: "3px 3px 3px red",
          }}
          variant="h5"
        >
          {item.title}
        </Typography>
        <Link to={`/${item.id}`}>
          <Button
            variant="contained"
            color="success"
            sx={{
              textDecoration: "none",
              marginTop: "10px",
              fontWeight: "bold",
              height: "30px",
              fontSize: "10px",
            }}
            startIcon={<InfoIcon />}
          >
            View More
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Item;
