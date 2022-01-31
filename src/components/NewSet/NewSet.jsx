import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Dropzone from "../Dropzone/Dropzone";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Close } from "@mui/icons-material";
import { Box, Typography, TextField, Alert, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 625,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "100vh",
  overflowY: "scroll",
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const NewSet = ({ open, setOpen, mode }) => {
  const [files, setFiles] = useState([]);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
            <TextField
              id="Name"
              label="Set Name"
              variant="outlined"
              sx={{ margin: "20px 0" }}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">
                Select Models
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                placeholder="Select Models"
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Select Models"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                sx={{ marginBottom: "20px" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Dropzone files={files} setFiles={setFiles} mode={mode} />
            <Alert severity="info">
              NOTE: This does not actually work by choice the Submit button will
              therefore do nothing
            </Alert>
            <div style={{ marginTop: 20 }}>
              <Button onClick={() => setOpen(false)}>Submit</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewSet;
