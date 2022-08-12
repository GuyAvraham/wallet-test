import { isPhoneHardware } from "../../GlobalSettings/Hardware/Hardware";

const fontSizes = {
  xs: isPhoneHardware() ? "21px" : "14px",
  sm: isPhoneHardware() ? "24px" : "16px",
  md: isPhoneHardware() ? "30px" : "20px",
  lg: isPhoneHardware() ? "40px" : "25px",
};

export default fontSizes;
