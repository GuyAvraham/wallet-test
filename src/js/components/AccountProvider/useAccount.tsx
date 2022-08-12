import * as React from "react";
import { AccountContext } from "./AccountProvider";

export default function useAccount() {
  const account = React.useContext(AccountContext);

  if (account === undefined)
    throw new Error("useAccount must be used within a AccountProvider");

  return account;
}
