import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { MERCH } from "../../__constants__/merch";
import { MODELS } from "../../__constants__/models";
import MerchItem from "../MerchItem/MerchItem";

const Merch = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "30px" }}>
        All Available Merch
      </Typography>
      <Divider sx={{ margin: "10px 0 30px 0" }} />
      <Container>
        {MERCH.map((i) => {
          let modelInfo = MODELS.find(
            (model) => model.id === Number(i.modelId)
          );
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">{modelInfo.text}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {i.merch.map((item) => (
                  <MerchItem item={item} key={item} />
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </>
  );
};

export default Merch;
