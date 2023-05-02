import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "../styles/trailers.css";
import Modal from "@mui/material/Modal";

const images = [
  {
    img: "/avatar.webp",
    title: "Avatar II",
    width: "33.3%",
    video: "/videos/Avatar_ The Way of Water _ Official Trailer.mp4",
  },
  {
    img: "/batman.jpg",
    title: "The Batman",
    width: "33.3%",
    video: "/videos/THE BATMAN – Main Trailer.mp4",
  },
  {
    img: "/john-wick.webp",
    title: "John Wick IV",
    width: "33.3%",
    video:
      "/videos/John Wick_ Chapter 4 (2023) Final Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård.mp4",
  },
  {
    img: "/Top-Gun-Maverick-Monitor-Culture.webp",
    title: "Maverick",
    width: "33.3%",
    video:
      "/videos/Top Gun_ Maverick _ NUEVO Tráiler oficial (2022) SUBTITULADO - Tom Cruise.mp4",
  },
  {
    img: "/evildead.jpg",
    title: "Evil Dead Rise",
    width: "33.3%",
    video:
      "/videos/Evil Dead Rise El Despertar - Trailer Español Latino Sub Sin Censura 2023.mp4",
  },
  {
    img: "/230225-cocaine-bear-tease_gncd64.jpg",
    title: "Cocaine Bear",
    width: "33.3%",
    video: "/videos/COCAINE BEAR Official Trailer (2023).mp4",
  },
  {
    img: "/scream_6_crop1675787972429.jpg_1624932088.jpg",
    title: "Scream IV",
    width: "33.3%",
    video: "/videos/Scream VI _ Official Trailer (2023 Movie).mp4",
  },
  {
    img: "/antman.jpeg",
    title: "Quantumania",
    width: "33.3%",
    video:
      "/videos/Marvel Studios’ Ant-Man and The Wasp_ Quantumania _ Official Trailer.mp4",
  },
  {
    img: "/mario.jpeg",
    title: "Super Mario",
    width: "33.3%",
    video: "/videos/The Super Mario Bros. Movie _ Official Trailer.mp4",
  },
];


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Trailers() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [video, setVideo] = React.useState("");

  const handleOpen = (title, video) => {
    setOpen(true);
    setTitle(title);
    setVideo(video);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="trailers">
      <h2>Latest Trailers</h2>
      <p>Find the latest trends</p>
      <Box
        className="trailers-links"
        sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            lang="en" translate="no"
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.img})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image onClick={() => handleOpen(image.title, image.video)}>
              <Typography
              lang="en"
              translate="no"
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
        <Modal
          className="modal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="box">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <video className="video" controls src={video} />
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
