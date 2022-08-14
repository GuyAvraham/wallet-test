import * as React from "react";

export interface IGlobalSettingsProvider extends IUseMainContent {
  hardware: Hardware;
  isMobile: boolean;
  connectWay: React.MutableRefObject<ConnectWay>;
}

export interface IUseMainContent {
  setMainContent: React.Dispatch<React.SetStateAction<MainContent>>;
  mainContent: MainContent;
}

export type IProviderProps = IHasChildrenProps;

export interface IHasChildrenProps {
  children: React.ReactNode;
}

export type Hardware = HardwarePhone | "windows" | "mac";
export type HardwarePhone = "iphone" | "android";

export type MainContent = "transactions" | "wallet";

export type ConnectWay = "metamask" | "walletconnect" | "";
