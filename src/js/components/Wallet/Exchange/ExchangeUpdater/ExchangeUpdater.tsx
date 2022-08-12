import * as React from "react";
import {
  IExchange,
  IExchangeUpdaterProps,
} from "../../../../types/Wallet/Exchange/Exhcange";
import useAccount from "../../../AccountProvider/useAccount";
import getExchange from "../getExchange";

function ExchangeUpdater({ setExchange }: IExchangeUpdaterProps): JSX.Element {
  const [updater, setUpdater] = React.useState<boolean>(false);
  const { account } = useAccount();

  React.useEffect(() => {
    getExchange().then((result: IExchange) => {
      setExchange(result);
    });

    if (account.balance)
      setTimeout(() => setUpdater((previous) => !previous), 15000);
  }, [updater]);

  React.useEffect(() => {
    setUpdater((previous) => !previous);
  }, [account.balance]);

  return <></>;
}

export default React.memo(ExchangeUpdater);
