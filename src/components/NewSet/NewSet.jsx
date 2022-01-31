import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Dropzone from "../Dropzone/Dropzone";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Close } from "@mui/icons-material";
import { Box, Typography, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewSet = ({ open, setOpen }) => {
  const [files, setFiles] = useState([]);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
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
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a new photoset
            </Typography>
            <TextField id="Name" label="Set Name" variant="outlined" />
            <Dropzone files={files} setFiles={setFiles} />
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewSet;
