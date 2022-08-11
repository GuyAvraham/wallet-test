export interface INetworksByName {
  Ropsten: number;
  Ethereum: number;
  Rinkeby: number;
  Kovan: number;
  Goerli: number;
  Celo: number;
  Polygon: number;
  Optimism: number;
  Arbitrum: number;
}

export interface INetworksByChainId {
  "4": string;
  "5": string;
  "42": string;
  "1": string;
  "3": string;
  "42220": string;
  "137": string;
  "10": string;
  "42161": string;
}

export interface IRpcUrlsByNetwork {
  Rinkeby: string;
  Kovan: string;
  Ropsten: string;
  Ethereum: string;
  Goerli: string;
  Celo: string;
  Polygon: string;
  Optimism: string;
  Arbitrum: string;
}

export interface IImagesByNetwork {
  Rinkeby: string;
  Ropsten: string;
  Ethereum: string;
  Kovan: string;
  Celo: string;
  Polygon: string;
  Optimism: string;
  Arbitrum: string;
  Goerli: string;
}

export interface INetworksForSelector {
  Ethereum: number;
  Celo: number;
  Polygon: number;
  Optimism: number;
  Arbitrum: number;
}
