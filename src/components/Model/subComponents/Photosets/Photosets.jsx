import React from "react";
import { PHOTOSETS } from "../../../../__constants__/photosets";
import CardLink from "../../../CardLink/CardLink";
import defaultCardImage from "../../../../images/nopixel.png";

const Photosets = ({ model }) => {
  const SETS = PHOTOSETS.filter((item) => item.models?.includes(Number(model)));
  return (
    <>
      {SETS.map((set) => (
        <CardLink
          key={set.id}
          itemId={set.id}
          text={set.text}
          image={set.image ? set.image : defaultCardImage}
          link={`/photosets/${set.id}`}
          extra="float-left"
        />
      ))}
      {SETS.length === 0 && <p>No Sets available for this model</p>}
    </>
  );
};

export default Photosets;
