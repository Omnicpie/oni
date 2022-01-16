import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Arrow from "../CardHolder/subComponents/Arrow/Arrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Close } from "@mui/icons-material";

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

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function ImageModal({ imageIndex, setOpen, set }) {
  let open = imageIndex !== -1 ? true : false;
  console.log(set);
  console.log(imageIndex);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(-1)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div>
          <Close
            onClick={() => setOpen(-1)}
            sx={{
              position: "fixed",
              top: "1%",
              right: "1%",
              fontSize: "2.5rem",
            }}
          />
          <Arrow
            disabled={imageIndex === 0}
            onClick={() => setOpen(imageIndex - 1)}
            extraCss={"modal-arrow modal-left"}
          >
            <ArrowBackIosIcon sx={{ fontSize: "2.5rem" }} />
          </Arrow>
          <img
            {...srcset(set[imageIndex]?.img, 400, 1, 1)}
            alt={imageIndex}
            loading="lazy"
            style={style}
          />
          <Arrow
            disabled={imageIndex === set.length - 1}
            onClick={() => setOpen(imageIndex + 1)}
            extraCss={"modal-arrow"}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "2.5rem" }} />
          </Arrow>
        </div>
      </Fade>
    </Modal>
  );
}

export default ImageModal;
