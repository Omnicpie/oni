import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Arrow from "./subComponents/Arrow/Arrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardLink from "../CardLink/CardLink";
import defaultCardImage from "../../images/nopixel.png";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowBackIosIcon />
    </Arrow>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon />
    </Arrow>
  );
};

const CardHolder = ({ items, base }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      wrapperClassName="card-wrap-offset"
    >
      {items.map(({ id, text, image }) => (
        <CardLink
          key={id}
          itemId={id}
          text={text}
          image={image ? image : defaultCardImage}
          link={`/${base}/${id}`}
        />
      ))}
    </ScrollMenu>
  );
};

export default CardHolder;
