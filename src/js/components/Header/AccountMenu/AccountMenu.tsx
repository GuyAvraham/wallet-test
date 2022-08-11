import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import useAccount from "../../AccountProvider/useAccount";
import AccountContent from "./ModalContents/AccountContent";
import ConnectWalletContent from "./ModalContents/ConnectWalletContent";

function AccountMenu() {
  const { account } = useAccount();
  const { hardware, isPhoneHardware } = useGlobalSettings();
  const [isAccountModalOpen, setIsAccountModalOpen] =
    React.useState<boolean>(false);
  const [isConnectModalOpen, setIsConnectModalOpen] =
    React.useState<boolean>(false);

  return (
    <>
      <Flex
        direction={"row"}
        h={isPhoneHardware(hardware) ? "75px" : "50px"}
        borderWidth={1}
        alignItems={"center"}
        borderRadius={20}
        gap={3}
        p={1}
      >
        {account.account ? (
          <>
            <Tooltip label={account.balance!}>
              <Text pl={2} fontSize={"sm"}>
                {account.balance?.toFixed(2)} ETH
              </Text>
            </Tooltip>
            <Button
              h={"100%"}
              onClick={() =>
                setIsAccountModalOpen((previous) => (previous = true))
              }
            >
              <Text
                noOfLines={1}
                maxW={isPhoneHardware(hardware) ? "195px" : "130px"}
                display={"block !important"}
                fontSize={"sm"}
              >
                {account.account}
              </Text>
            </Button>
          </>
        ) : (
          <Button
            w={isPhoneHardware(hardware) ? "300px" : "200px"}
            h={"100%"}
            onClick={() =>
              setIsConnectModalOpen((previous) => (previous = true))
            }
            fontSize={"sm"}
          >
            Connect Wallet
          </Button>
        )}
      </Flex>
      <Modal
        isOpen={
          (isAccountModalOpen && account.account) || isConnectModalOpen
            ? true
            : false
        }
        onClose={() => {
          setIsAccountModalOpen((previous) => (previous = false));
          setIsConnectModalOpen((previous) => (previous = false));
        }}
        size={isPhoneHardware(hardware) ? "3xl" : "md"}
      >
        <ModalOverlay />
        {account.account ? (
          isConnectModalOpen ? (
            <ConnectWalletContent
              setIsAccountModalOpen={setIsAccountModalOpen}
              setIsConnectModalOpen={setIsConnectModalOpen}
            />
          ) : (
            <AccountContent
              setIsAccountModalOpen={setIsAccountModalOpen}
              setIsConnectModalOpen={setIsConnectModalOpen}
            />
          )
        ) : (
          <ConnectWalletContent
            setIsAccountModalOpen={setIsAccountModalOpen}
            setIsConnectModalOpen={setIsConnectModalOpen}
          />
        )}
      </Modal>
    </>
  );
}

export default React.memo(AccountMenu);
