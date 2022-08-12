import { isMobile } from "react-device-detect";
import { Hardware } from "../../types/Types";

export const DEFAULT_HARDWARE_TYPE = 'windows';
export const HARDWARE_TYPES: Hardware[] = ['iphone', 'android', 'windows', 'mac'];



export function isPhoneHardware(): boolean {
    
    return isMobile;
}

export function detectHardware(): Hardware {

    const userAgent = window.navigator.userAgent.toLowerCase();

    for(let i = 0; i < HARDWARE_TYPES.length; i++) {

        if(userAgent.includes(HARDWARE_TYPES[i])) return HARDWARE_TYPES[i];
    }

    return DEFAULT_HARDWARE_TYPE;
}