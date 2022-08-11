import * as React from "react";

export interface IGlobalSettingsProvider extends IUseMainContent {
  hardware: Hardware;
  isPhoneHardware: (hardware: Hardware) => boolean;
  connectWay: React.MutableRefObject<ConnectWay>;
}

export interface IUseMainContent {
  setMainContent: React.Dispatch<React.SetStateAction<MainContent>>;
  mainContent: MainContent;
}

export interface IProviderProps extends IHasChildrenProps {}

export interface IHasChildrenProps {
  children: React.ReactNode;
}

export type Hardware = HardwarePhone | "windows" | "mac";
export type HardwarePhone = "iphone" | "android";

export type MainContent = "transactions" | "wallet";

export interface IDecToHex {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
}

export type ConnectWay = "metamask" | "walletconnect" | "";
