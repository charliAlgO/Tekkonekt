import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({  //this always us to use css ppts so we can reuse it when need throught the app
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;