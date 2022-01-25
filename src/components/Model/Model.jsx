import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, Avatar } from "@mui/material";
import ImageModal from "../ImageModal/ImageModal";
import { MODELS } from "../../__constants__/models";
import CardMedia from "@mui/material/CardMedia";
import defaultCardImage from "../../images/nopixel.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Photosets from "./subComponents/Photosets/Photosets";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

const Model = () => {
  const [set, setSet] = useState();
  const [open, setOpen] = useState(-1);
  const [value, setValue] = useState("1");
  let params = useParams();

  useEffect(() => {
    setSet(MODELS.find((set) => set.id === Number(params.id)));
  }, [params.id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ImageModal imageIndex={open} setOpen={setOpen} set={itemData} />
      <Card sx={{ background: "rgba(1,1,1,0.03)" }}>
        <CardMedia
          component="img"
          image={set?.image ? set?.image : defaultCardImage}
          sx={{ objectFit: "contain", maxHeight: "160pt" }}
        />
        <Avatar
          sx={{ height: 100, width: 100, transform: "translate(10%, -50%)" }}
        />
        <Typography
          variant="h3"
          style={{
            transform: "translate(5%, -70%)",
          }}
        >
          {set?.text}
        </Typography>
      </Card>
      <div style={{ margin: "15px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="model tabs"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Photosets" value="1" />
              <Tab label="Merch" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Photosets model={params.id} />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Model;
