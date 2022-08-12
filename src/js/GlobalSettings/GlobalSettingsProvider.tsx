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
import {
  DEFAULT_HARDWARE_TYPE,
  detectHardware,
  isPhoneHardware,
} from "./Hardware/Hardware";
import useMainContent from "./MainContentView/useMainContent";

const DEFAULT_CONTEXT_VALUE: IGlobalSettingsProvider = {
  hardware: DEFAULT_HARDWARE_TYPE,
  isPhoneHardware,
  mainContent: "wallet",
  setMainContent: () => {},
  connectWay: { current: "" },
};

export const GlobalSettingsContext =
  React.createContext<IGlobalSettingsProvider>(DEFAULT_CONTEXT_VALUE);

export default function GlobalSettingsProvider({
  children,
}: IProviderProps): JSX.Element {
  const { mainContent, setMainContent } = useMainContent();
  const connectWay = React.useRef<ConnectWay>("");

  const hardware: Hardware = React.useMemo(() => detectHardware(), []);

  const contextValue = React.useMemo(() => {
    return {
      hardware,
      isPhoneHardware,
      mainContent,
      setMainContent,
      connectWay,
    };
  }, [hardware, isPhoneHardware, mainContent, setMainContent, connectWay]);

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
