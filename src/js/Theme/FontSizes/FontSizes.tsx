import { isMobile } from "react-device-detect";

const fontSizes = {
  xs: isMobile ? "21px" : "14px",
  sm: isMobile ? "24px" : "16px",
  md: isMobile ? "30px" : "20px",
  lg: isMobile ? "40px" : "25px",
};

export default fontSizes;
