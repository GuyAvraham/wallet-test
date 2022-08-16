import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import useAccount from "../../AccountProvider/useAccount";
import AccountContent from "./ModalContents/AccountContent";
import ConnectWalletContent from "./ModalContents/ConnectWalletContent";

function AccountMenu() {
  const { account } = useAccount();
  const { isMobile } = useGlobalSettings();
  const {
    isOpen: isAccountOpen,
    onOpen: onOpenAccount,
    onClose: onCloseAccount,
  } = useDisclosure();
  const {
    isOpen: isConnectOpen,
    onOpen: onOpenConnect,
    onClose: onCloseConnect,
  } = useDisclosure();

  const onCloseModal = () => {
    onCloseAccount();
    onCloseConnect();
  };

  return (
    <>
      <Flex
        direction={"row"}
        h={isMobile ? "75px" : "50px"}
        borderWidth={1}
        alignItems={"center"}
        borderRadius={20}
        gap={3}
        p={1}
      >
        {account.account ? (
          <>
            <Tooltip
              label={account.balance ? account.balance : "Connect in wallet"}
            >
              <Text pl={2} fontSize={"sm"}>
                {account.balance?.toFixed(2)} ETH
              </Text>
            </Tooltip>
            <Button h={"100%"} onClick={onOpenAccount}>
              <Text
                noOfLines={1}
                maxW={isMobile ? "195px" : "130px"}
                display={"block !important"}
                fontSize={"sm"}
              >
                {account.account}
              </Text>
            </Button>
          </>
        ) : (
          <Button
            w={isMobile ? "300px" : "200px"}
            h={"100%"}
            onClick={onOpenConnect}
            fontSize={"sm"}
          >
            Connect Wallet
          </Button>
        )}
      </Flex>
      <Modal
        isOpen={
          (isAccountOpen && account.account) || isConnectOpen ? true : false
        }
        onClose={onCloseModal}
        size={isMobile ? "3xl" : "md"}
      >
        <ModalOverlay />
        {account.account ? (
          isConnectOpen ? (
            <ConnectWalletContent
              onOpenAccount={onOpenAccount}
              onCloseConnect={onCloseConnect}
            />
          ) : (
            <AccountContent
            onCloseAccount={onCloseAccount}
            onOpenConnect={onOpenConnect}
            />
          )
        ) : (
          <ConnectWalletContent
            onOpenAccount={onOpenAccount}
            onCloseConnect={onCloseConnect}
          />
        )}
      </Modal>
    </>
  );
}

export default React.memo(AccountMenu);
