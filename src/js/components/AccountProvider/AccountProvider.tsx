import * as React from "react";
import { IAccount, IAccountProvider } from "../../types/Account/Account";
import { IProviderProps } from "../../types/Types";

export const DEFAULT_ACCOUNT_VALUE: IAccount = {
  account: null,
  chainId: null,
  balance: null,
  icon: null,
};

const DEFAULT_ACCOUNT_CONTEXT_VALUE: IAccountProvider = {
  account: DEFAULT_ACCOUNT_VALUE,
  setAccount: () => {
    return;
  },
};

export const AccountContext = React.createContext<IAccountProvider>(
  DEFAULT_ACCOUNT_CONTEXT_VALUE
);

export default function AccountProvider({ children }: IProviderProps) {
  const [account, setAccount] = React.useState<IAccount>(DEFAULT_ACCOUNT_VALUE);

  const contextValue = React.useMemo(() => {
    return {
      account,
      setAccount,
    };
  }, [account, setAccount]);

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
}
