/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Flex, Heading, Spacer, Square, Text, Tooltip } from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import { IExchange } from "../../../types/Wallet/Exchange/Exhcange";
import useAccount from "../../AccountProvider/useAccount";
import WaitingView from "../WaitingView/WaitingView";
import ExchangeUpdater from "./ExchangeUpdater/ExchangeUpdater";

function parseCurrencyText(value: number): string {
  let result = "";
  const naturalNumber = value - (value % 1);

  if (naturalNumber.toString().length > 4) result = naturalNumber.toString();
  else {
    switch (naturalNumber.toString().length) {
      case 4:
        result = value.toFixed(2);
        break;
      case 3:
        result = value.toFixed(3);
        break;
      case 2:
        result = value.toFixed(4);
        break;
      default:
        result = value.toFixed(5);
        break;
    }
  }

  return result;
}

function Exchange(): JSX.Element {
  const { account } = useAccount();
  const [exchange, setExchange] = React.useState<IExchange | null>(null);
  const { isMobile } = useGlobalSettings();

  const currencyTextStyle = {
    maxW: "250px",
    fontSize: "lg",
    noOfLines: 1,
    _hover: {
      fontWeight: "bold",
    },
  };

  if (!account.balance) return <></>;

  return (
    <Flex direction={"column"} width={"100%"} gap={5}>
      <ExchangeUpdater setExchange={setExchange} />
      <Flex direction={"row"}>
        <Heading size={isMobile ? "3xl" : "2xl"}>Exchange Rates</Heading>
        <Spacer />
        <Heading size={isMobile ? "3xl" : "2xl"}>In transfer</Heading>
      </Flex>
      {exchange ? (
        Object.keys(exchange).map((currency) => (
          <Flex key={currency} direction={"row"} gap={3}>
            <Text fontSize={"lg"}>{currency}</Text>
            <Tooltip label={exchange[currency as keyof typeof exchange]}>
              <Text sx={currencyTextStyle}>
                {parseCurrencyText(exchange[currency as keyof typeof exchange])}
              </Text>
            </Tooltip>

            <Spacer />

            <Tooltip
              label={
                account.balance! * exchange[currency as keyof typeof exchange]
              }
            >
              <Text sx={currencyTextStyle}>
                {parseCurrencyText(
                  account.balance! * exchange[currency as keyof typeof exchange]
                )}
              </Text>
            </Tooltip>
            <Text fontSize={"lg"}>{currency}</Text>
          </Flex>
        ))
      ) : (
        <Square minWidth={"100%"} minHeight={"100%"}>
          <WaitingView>Exchange info is loading...</WaitingView>
        </Square>
      )}
    </Flex>
  );
}

export default Exchange;
