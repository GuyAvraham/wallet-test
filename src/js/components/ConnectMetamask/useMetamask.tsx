import * as React from "react";
import { DEFAULT_METAMASk_CONTEXT_VALUE, MetamaskContext } from "./MetamaskProvider";

export default function useMetamask() {
  const metamask = React.useContext(MetamaskContext);

  if (!metamask) {
    console.error("useMetamask must be used within a MetamaskProvider");
    return DEFAULT_METAMASk_CONTEXT_VALUE;
  }

  return metamask;
}
