import { RemoveCircle } from "@mui/icons-material";
import React, { useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 4,
  borderColor: "rgba(255, 255, 255, 0.23)",
  borderStyle: "solid",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const baseStyleLight = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 4,
  borderColor: "rgba(0, 0, 0, 0.23)",
  borderStyle: "solid",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
  borderWidth: 2,
};

const focusedStyleLight = {
  borderColor: "#1976d2",
  borderWidth: 2,
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Dropzone({ files, setFiles, mode }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        setFiles(
          files.concat(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          )
        );
      },
    });

  const thumbs = files.map((file, index) => {
    console.log(file.preview);
    return (
      <div style={thumb} key={index + "AD" + file.name}>
        <div style={thumbInner}>
          <RemoveCircle
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              color: "#b71c1c !important",
            }}
            onClick={() => setFiles(files.filter((_, i) => i !== index))}
          />
          <img src={file.preview} style={img} alt={file.name} />
        </div>
      </div>
    );
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  const style = useMemo(
    () => ({
      ...(mode === "dark" ? baseStyle : baseStyleLight),
      ...(isFocused
        ? mode === "dark"
          ? focusedStyle
          : focusedStyleLight
        : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, mode]
  );

  return (
    <section>
      <div
        {...getRootProps({
          className: mode === "dark" ? "dropzone" : "dropzone-light",
          style,
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some images or click to add</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default Dropzone;
