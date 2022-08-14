import * as React from "react";
import EthereumProvider from "../components/EthereumProvider/EthereumProvider";
import AccountProvider from "../components/AccountProvider/AccountProvider";
import {
  ConnectWay,
  Hardware,
  IGlobalSettingsProvider,
  IProviderProps,
} from "../types/Types";
import AlertDialogErrorProvider from "../components/AlertDialogErrorProvider/AlertDialogErrorProvider";
import MetamaskProvider from "../components/ConnectMetamask/MetamaskProvider";
import { DEFAULT_HARDWARE_TYPE, detectHardware } from "./Hardware/Hardware";
import useMainContent from "./MainContentView/useMainContent";
import { isMobile } from "react-device-detect";

export const DEFAULT_GLOBAL_SETTINGS_CONTEXT_VALUE: IGlobalSettingsProvider = {
  hardware: DEFAULT_HARDWARE_TYPE,
  isMobile,
  mainContent: "wallet",
  setMainContent: () => { 
    return; 
  },
  connectWay: { current: "" },
};

export const GlobalSettingsContext =
  React.createContext<IGlobalSettingsProvider>(DEFAULT_GLOBAL_SETTINGS_CONTEXT_VALUE);

export default function GlobalSettingsProvider({
  children,
}: IProviderProps): JSX.Element {
  const { mainContent, setMainContent } = useMainContent();
  const connectWay = React.useRef<ConnectWay>("");

  const hardware: Hardware = React.useMemo(() => detectHardware(), []);

  const contextValue = React.useMemo(
    () => ({
      hardware,
      isMobile,
      mainContent,
      setMainContent,
      connectWay,
    }),
    [hardware, isMobile, mainContent, setMainContent, connectWay]
  );

  return (
    <GlobalSettingsContext.Provider value={contextValue}>
      <AlertDialogErrorProvider>
        <EthereumProvider>
          <AccountProvider>
            <MetamaskProvider>{children}</MetamaskProvider>
          </AccountProvider>
        </EthereumProvider>
      </AlertDialogErrorProvider>
    </GlobalSettingsContext.Provider>
  );
}
