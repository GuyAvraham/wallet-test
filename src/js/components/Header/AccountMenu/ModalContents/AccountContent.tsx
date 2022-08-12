import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
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
  useClipboard,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../../GlobalSettings/useGlobalSettings";
import { IAccountContentProps } from "../../../../types/Header/ContentProps/ContentProps";
import useAccount from "../../../AccountProvider/useAccount";
import useMetamask from "../../../ConnectMetamask/useMetamask";

function AccountContent({
  setIsAccountModalOpen,
  setIsConnectModalOpen,
}: IAccountContentProps): JSX.Element {
  const { account } = useAccount();
  const { onDisconnect } = useMetamask();
  const { hasCopied, onCopy } = useClipboard(
    account.account ? account.account : ""
  );
  const { isPhoneHardware } = useGlobalSettings();

  const smallButtonStyle = {
    fontSize: isPhoneHardware() ? "27px" : "13px",
    borderWidth: 1,
  };

  const onClickDisconnect = () => {
    onDisconnect();
    setIsAccountModalOpen(false);
  };

  const onClickChange = () => {
    setIsAccountModalOpen(false);
    setIsConnectModalOpen(true);
  };

  return (
    <ModalContent alignSelf={"center !important"}>
      <ModalHeader fontSize={"md"}>Account</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex
          px={2}
          borderWidth={1}
          borderRadius={20}
          h={isPhoneHardware() ? "225px" : "150px"}
          direction={"column"}
          gap={0}
        >
          <Flex direction={"row"} alignItems={"center"} gap={4} flex={1}>
            <Text opacity={0.5} fontSize={"sm"}>
              Connected with Metamask
            </Text>
            <Spacer />
            <Button
              size={isPhoneHardware() ? "lg" : "xs"}
              borderColor={"red"}
              sx={smallButtonStyle}
              onClick={onClickDisconnect}
            >
              Disconnect
            </Button>
            <Button
              size={isPhoneHardware() ? "lg" : "xs"}
              sx={smallButtonStyle}
              borderColor={"blue"}
              onClick={onClickChange}
            >
              Change
            </Button>
          </Flex>
          <Flex direction={"row"} alignItems={"center"} gap={4} flex={1}>
            <CheckCircleIcon
              color={"green"}
              boxSize={isPhoneHardware() ? "30px" : "20px"}
            />
            <Text noOfLines={1} maxWidth={"200px"} fontSize={"md"}>
              {account.account}
            </Text>
          </Flex>

          <Flex direction={"row"} alignItems={"center"} flex={1}>
            <Flex
              opacity={0.5}
              _hover={{
                opacity: 0.85,
              }}
              alignItems={"center"}
              gap={4}
              onClick={onCopy}
            >
              <CopyIcon boxSize={isPhoneHardware() ? "21px" : "14px"} />
              <Text noOfLines={1} maxWidth={"200px"} fontSize={"xs"}>
                {hasCopied ? "Address is copied" : "Copy Address"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </ModalContent>
  );
}

export default React.memo(AccountContent);
