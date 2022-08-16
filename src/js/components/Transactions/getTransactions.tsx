import { IAccount } from "../../types/Account/Account";
import { NETWORKS_BY_NAME } from "../../utils/Networks/networks";

const TRANSACTIONS_DATA_KEY = "KH9Y19KEMB7ZQM7FD45SPYIRAGHPWM9M4Y";

const ETHEREUM_TRANSACTIONS_DOMAIN = "";
const ROPSTEN_TRANSACTIONS_DOMAIN = "https://api-ropsten.etherscan.io";
const KOVAN_TRANSACTIONS_DOMAIN = "https://api-kovan.etherscan.io";
const RINKEBY_TRANSACTIONS_DOMAIN = "https://api-rinkeby.etherscan.io";
const GOERLI_TRANSACTIONS_DOMAIN = "https://api-goerli.etherscan.io";

export default function getTransactions(account: IAccount) {
  let domain = "";
  switch (account.chainId) {
    case NETWORKS_BY_NAME["Kovan"]:
      domain = KOVAN_TRANSACTIONS_DOMAIN;
      break;
    case NETWORKS_BY_NAME["Goerli"]:
      domain = GOERLI_TRANSACTIONS_DOMAIN;
      break;
    case NETWORKS_BY_NAME["Rinkeby"]:
      domain = RINKEBY_TRANSACTIONS_DOMAIN;
      break;
    case NETWORKS_BY_NAME["Ropsten"]:
      domain = ROPSTEN_TRANSACTIONS_DOMAIN;
      break;
    case NETWORKS_BY_NAME["Ethereum"]:
      domain = ETHEREUM_TRANSACTIONS_DOMAIN;
      break;
    default:
      break;
  }

  return fetch(
    `${domain}/api?module=account&action=txlist&address=${account.account}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${TRANSACTIONS_DATA_KEY}`,
    { method: "GET" }
  )
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      console.error(error);
    });
}
