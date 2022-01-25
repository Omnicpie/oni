import React from "react";
import { MERCH } from "../../../../__constants__/merch";
import MerchItem from "../../../MerchItem/MerchItem";

const Merch = ({ model }) => {
  const AVAIL_MERCH = MERCH.find(
    (availModels) => availModels.modelId === Number(model)
  )?.merch;
  return (
    <>
      {AVAIL_MERCH ? (
        AVAIL_MERCH.map((item) => <MerchItem item={item} key={item} />)
      ) : (
        <p>No Merch available for this model</p>
      )}
    </>
  );
};

export default Merch;
