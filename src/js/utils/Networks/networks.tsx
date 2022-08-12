import arbitrumNetwork from '../../assets/arbitrum_network';
import celoNetwork from '../../assets/celo_network';
import ethereumNetwork from '../../assets/ethereum_network';
import optimismNetwork from '../../assets/optimism_network';
import polygonNetwork from '../../assets/polygon_network';
import { INetworksByName, IImagesByNetwork, INetworksByChainId, IRpcUrlsByNetwork, INetworksForSelector } from '../../types/Networks/NetworksTypes';



export function isEthereumNetworkByChainId(chainId: number | null): boolean {

    return (
        chainId === NETWORKS_BY_NAME['Ropsten'] || 
        chainId === NETWORKS_BY_NAME['Goerli'] || 
        chainId === NETWORKS_BY_NAME['Ethereum'] || 
        chainId === NETWORKS_BY_NAME['Rinkeby'] || 
        chainId === NETWORKS_BY_NAME['Kovan']
    );
}

export const NETWORKS_FOR_SELECTOR: INetworksForSelector = {
    'Ethereum': 1,
    'Celo': 42220,
    'Polygon': 137,
    'Optimism': 10,
    'Arbitrum': 42161 
}

export const NETWORKS_BY_NAME: INetworksByName = {
    'Rinkeby': 4,
    'Goerli': 5,
    'Kovan': 42,
    'Ropsten': 3,
    'Ethereum': 1,
    'Celo': 42220,
    'Polygon': 137,
    'Optimism': 10,
    'Arbitrum': 42161 
}

export const NETWORKS_BY_CHAIN_ID: INetworksByChainId = {
    4: 'Rinkeby',
    5: 'Goerli',
    42: 'Kovan',
    1: 'Ethereum',
    3: 'Ropsten',
    42220: 'Celo',
    137: 'Polygon',
    10: 'Optimism',
    42161: 'Arbitrum' 
}

export const RPC_URLS_BY_NETWORK: IRpcUrlsByNetwork = {
    'Rinkeby': 'https://rinkeby.infura.io/v3/',
    'Goerli': 'https://rpc.goerli.mudit.blog/',
    'Kovan': 'https://kovan.poa.network',
    'Ropsten': 'https://ropsten.infura.io/v3/',
    'Ethereum': 'https://api.mycryptoapi.com/eth',
    'Celo': 'https://forno.celo.org',
    'Polygon': 'https://polygon-rpc.com/',
    'Optimism': 'https://mainnet.optimism.io',
    'Arbitrum': 'https://arb1.arbitrum.io/rpc'
}

export const IMAGES_BY_NETWORK: IImagesByNetwork = {
    'Rinkeby': ethereumNetwork,
    'Goerli': ethereumNetwork,
    'Kovan': ethereumNetwork,
    'Ropsten': ethereumNetwork,
    'Ethereum': ethereumNetwork,
    'Celo': celoNetwork,
    'Polygon': polygonNetwork,
    'Optimism': optimismNetwork,
    'Arbitrum': arbitrumNetwork
}