import * as React from "react";
import { DEFAULT_ETHEREUM_PROVIDER_VALUE, EthereumContext } from "./EthereumProvider";

export default function useEthereumProvider() {
  const ethProvider = React.useContext(EthereumContext);

  if (!ethProvider) {
    console.error("useEthereumProvider must be used within a EthereumProvider");
    return DEFAULT_ETHEREUM_PROVIDER_VALUE;
  }
    

  return ethProvider;
}
