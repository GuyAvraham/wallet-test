export interface IMetamaskProvider {
  disconnectDapp: {
    current: (() => void) | null;
  };
  onDisconnect: () => void;
  changeChain: (chainId: string) => Promise<boolean> | void;
  updateAccountData: (accountName: string) => void;
  connectMetamask: (
    callback: (isProviderDetected: boolean) => void
  ) => Promise<void> | void;
}
