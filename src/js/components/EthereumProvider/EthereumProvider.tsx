import detectEthereumProvider from "@metamask/detect-provider";
import * as React from "react";
import { ethereumProviderKey } from "../../assets/local_storage_keys";
import {
  IEthereumProvider,
  IProvider,
} from "../../types/EthereumProvider/EthereumProvider";
import { IProviderProps } from "../../types/Types";

export const DEFAULT_ETHEREUM_PROVIDER_VALUE: IEthereumProvider = {
  providerState: null,
  removeProvider: () => {
    return;
  },
  detectProvider: async () => false,
  forgetProvider: () => {
    return;
  },
  saveProvider: () => {
    return;
  },
};

function forgetProvider() {
  sessionStorage.removeItem(ethereumProviderKey);
}

function saveProvider() {
  sessionStorage.setItem(ethereumProviderKey, "provider_saved");
}

export const EthereumContext = React.createContext<IEthereumProvider>(
  DEFAULT_ETHEREUM_PROVIDER_VALUE
);

export default function EthereumProvider({ children }: IProviderProps) {
  const [providerState, setProviderState] = React.useState<IProvider | null>(
    null
  );

  const detectProvider = React.useCallback(async (): Promise<boolean> => {
    const ethereum = await detectEthereumProvider();

    if (!ethereum) {
      console.error("You have to download metamask");
      return false;
    }

    const provider: IProvider = ethereum as IProvider;

    setProviderState(provider);
    //provider === window.ethereum
    return true;
  }, []);

  const removeProvider = () => {
    setProviderState(null);
  };

  React.useEffect(() => {
    const provider = sessionStorage.getItem(ethereumProviderKey);
    if (provider) {
      detectProvider();
    }
  }, [detectProvider]);

  const contextValue = React.useMemo(
    () => ({
      providerState,
      removeProvider,
      detectProvider,
      forgetProvider,
      saveProvider,
    }),
    [
      providerState,
      removeProvider,
      detectProvider,
      forgetProvider,
      saveProvider,
    ]
  );

  return (
    <EthereumContext.Provider value={contextValue}>
      {children}
    </EthereumContext.Provider>
  );
}
