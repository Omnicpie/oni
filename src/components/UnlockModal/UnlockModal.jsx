import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Box, Alert, Button, Typography, Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 625,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "100vh",
  overflowY: "auto",
};

const UnlockModal = ({ open, setOpen, mode }) => {
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
          <Box sx={style}>
            <Typography>Unlock Set</Typography>
            <Divider sx={{ marginBottom: 3 }} />
            <Alert severity="info">
              NOTE: The "Unlock" button does nothing, this is because is system
              is just a prototype and is intended.
            </Alert>
            <div style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Unlock
              </Button>
              <Button color="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default UnlockModal;
