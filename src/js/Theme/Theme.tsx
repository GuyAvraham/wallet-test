import { extendTheme } from "@chakra-ui/react";
import * as React from "react";
import components from "./Components/Components";
import fontSizes from "./FontSizes/FontSizes";

const extension = {
  components,
  fontSizes,
};

const theme = extendTheme(extension);

export default theme;
