import * as React from "react";
import { EthereumContext } from "./EthereumProvider";

export default function useEthereumProvider() {
  const ethProvider = React.useContext(EthereumContext);

  if (ethProvider === undefined)
    throw new Error(
      "useEthereumProvider must be used within a EthereumProvider"
    );

  return ethProvider;
}
