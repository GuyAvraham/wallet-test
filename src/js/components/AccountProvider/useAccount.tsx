import * as React from "react";
import { AccountContext, DEFAULT_ACCOUNT_CONTEXT_VALUE } from "./AccountProvider";

export default function useAccount() {
  const account = React.useContext(AccountContext);

  if (!account) {
    console.error("useAccount must be used within a AccountProvider");
    return DEFAULT_ACCOUNT_CONTEXT_VALUE;
  }

  return account;
}
