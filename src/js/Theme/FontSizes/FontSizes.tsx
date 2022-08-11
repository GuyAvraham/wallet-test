import { detectHardware, isPhoneHardware } from "../../GlobalSettings/Hardware/Hardware";



const hardware = detectHardware();



const fontSizes = {
    xs: isPhoneHardware(hardware) ? '21px': '14px',
    sm: isPhoneHardware(hardware) ? '24px': '16px',
    md: isPhoneHardware(hardware) ? '30px': '20px',
    lg: isPhoneHardware(hardware) ? '40px': '25px'
}

export default fontSizes;