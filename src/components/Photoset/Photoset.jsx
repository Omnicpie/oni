import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PHOTOSETS } from "../../__constants__/photosets";
import {
  Typography,
  ImageListItem,
  ImageList,
  Chip,
  Stack,
  Card,
  Divider,
} from "@mui/material";
import ImageModal from "../ImageModal/ImageModal";
import { MODELS } from "../../__constants__/models";
import CardMedia from "@mui/material/CardMedia";
import defaultCardImage from "../../images/nopixel.png";
import "./Photoset.scss";

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

const ROW_HEIGHT = 200;

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Photoset = () => {
  const [set, setSet] = useState();
  const [open, setOpen] = useState(-1);
  let params = useParams();

  useEffect(() => {
    setSet(PHOTOSETS.find((set) => set.id === Number(params.id)));
  }, [params.id]);

  return (
    <>
      <ImageModal imageIndex={open} setOpen={setOpen} set={itemData} />
      <Card sx={{ background: "rgba(1,1,1,0.03)" }}>
        <CardMedia
          component="img"
          image={set?.image ? set?.image : defaultCardImage}
          sx={{ objectFit: "contain", maxHeight: "160pt" }}
        />
        <Typography variant="h3" sx={{ margin: "30px" }}>
          {set?.text}
        </Typography>
        {!!set?.models && (
          <>
            <Divider />
            <div style={{ marginTop: "10px" }}>
              <Typography variant="caption" sx={{ margin: "30px" }}>
                Model{set?.models?.length > 1 ? "s" : ""}
              </Typography>
              <Stack direction={"row"} sx={{ margin: "10px 10px 10px 20px" }}>
                {set?.models?.map((model) => (
                  <Chip
                    key={model}
                    color="secondary"
                    label={MODELS.find((mod) => mod.id === Number(model)).text}
                    component={"a"}
                    href={`/oni/#/models/${model}`}
                    clickable
                    sx={{ margin: "0 2px" }}
                  />
                ))}
              </Stack>
            </div>
          </>
        )}
      </Card>
      <ImageList
        sx={{ margin: "100px", marginBottom: "0" }}
        variant="quilted"
        cols={4}
        rowHeight={ROW_HEIGHT}
      >
        {itemData?.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, ROW_HEIGHT, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => setOpen(index)}
              style={{ cursor: "pointer" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Photoset;
