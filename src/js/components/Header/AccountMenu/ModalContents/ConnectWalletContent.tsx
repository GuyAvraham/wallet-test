import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  Text,
  Button,
  Image,
  IconButton,
  Box,
  Spinner,
  Center,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../../GlobalSettings/useGlobalSettings";
import { IConnectWalletContentProps } from "../../../../types/Header/ContentProps/ContentProps";
import useAccount from "../../../AccountProvider/useAccount";
import useMetamask from "../../../ConnectMetamask/useMetamask";
import useEthereumProvider from "../../../EthereumProvider/useEthereumProvider";
import AlertDialogMetamask from "../../../Wallet/AlertDialogMetamask/AlertDialogMetamask";

function ConnectWalletContent({
  onOpenAccount,
  onCloseConnect
}: IConnectWalletContentProps): JSX.Element {
  const { isMobile, connectWay } = useGlobalSettings();
  const { providerState } = useEthereumProvider();
  const { connectMetamask } = useMetamask();
  const { account } = useAccount();
  const [isConnecting, setIsConnecting] = React.useState<boolean>(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] =
    React.useState<boolean>(false);

  const onCloseAlertDialog = React.useCallback(() => {
    setIsAlertDialogOpen(false);
    setIsConnecting(false);
  }, []);

  const onMetamask = async () => {
    if (providerState) return;

    setIsConnecting(true);

    await connectMetamask((isProviderDetected: boolean) => {
      if (isProviderDetected === false) {
        setIsAlertDialogOpen(true);
        return;
      }
    });
  };

  const onCLickBackIcon = () => {
    onOpenAccount();
    onCloseConnect();
  };

  const turnOffConnecting = () => {
    if (isConnecting === false) return;

    setIsConnecting(false);
    onOpenAccount();
    onCloseConnect();
  };

  React.useEffect(() => {
    if (providerState === null) {
      setIsConnecting(false);
      return;
    }

    if (account.account === null) {
      setIsConnecting(true);
      return;
    }

    turnOffConnecting();
  }, [providerState]);

  React.useEffect(() => {
    if (account.account === null) return;

    turnOffConnecting();
  }, [account]);

  return (
    <ModalContent alignSelf={"center !important"}>
      <ModalHeader fontSize={"md"}>
        {isConnecting ? (
          <></>
        ) : account.account ? (
          <IconButton
            aria-label={"back to account info"}
            icon={
              <ArrowBackIcon
                boxSize={isMobile ? "36px" : "24px"}
              />
            }
            onClick={onCLickBackIcon}
          />
        ) : (
          "Connect a wallet"
        )}
      </ModalHeader>
      <ModalCloseButton boxSize={isMobile ? "60px" : "40px"} />
      <ModalBody>
        {isConnecting ? (
          <Center flexDirection={"column"} gap={5}>
            <Spinner size={isMobile ? "xl" : "md"} />
            <Box textAlign={"center"} fontSize={"md"}>
              Connecting...
            </Box>
          </Center>
        ) : (
          <Flex direction={"column"}>
            <Button onClick={onMetamask} h={isMobile ? "87px" : "58px"}>
              <Flex
                direction={"row"}
                width={"100%"}
                gap={4}
                alignItems={"center"}
              >
                {connectWay.current === "metamask" ? (
                  <CheckCircleIcon
                    color={"green"}
                    boxSize={isMobile ? "12px" : "8px"}
                  />
                ) : (
                  <></>
                )}

                <Text fontSize={"sm"}>MetaMask</Text>
                <Spacer />
                <Image
                  boxSize={isMobile ? "36px" : "24px"}
                  src={
                    "https://app.uniswap.org/static/media/metamask.02e3ec27.png"
                  }
                />
              </Flex>
            </Button>
          </Flex>
        )}
      </ModalBody>
      <ModalFooter />
      <AlertDialogMetamask
        isOpen={isAlertDialogOpen}
        onClose={onCloseAlertDialog}
      />
    </ModalContent>
  );
}

export default React.memo(ConnectWalletContent);
