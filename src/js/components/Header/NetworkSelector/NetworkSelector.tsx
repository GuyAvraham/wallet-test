import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
  Spacer,
  Button,
  Flex,
  Box,
  Icon,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import {
  IImagesByNetwork,
  INetworksByChainId,
  INetworksForSelector,
} from "../../../types/Networks/NetworksTypes";
import convertToHex from "../../../utils/Hooks/convertToHex";
import {
  IMAGES_BY_NETWORK,
  NETWORKS_BY_CHAIN_ID,
  NETWORKS_FOR_SELECTOR,
} from "../../../utils/Networks/networks";
import useAccount from "../../AccountProvider/useAccount";
import useMetamask from "../../ConnectMetamask/useMetamask";

function NetworkSelector(): JSX.Element {
  const { isPhoneHardware } = useGlobalSettings();
  const { account } = useAccount();
  const { changeChain } = useMetamask();
  const [isSmallNetworkIcon] = useMediaQuery("(max-width: 800px)");

  const currentChain =
    account.account === null || account.chainId == null
      ? "Select Network"
      : NETWORKS_BY_CHAIN_ID[`${account.chainId}` as keyof INetworksByChainId];

  const onClickChangeChain = (element: string) =>
    changeChain(
      convertToHex(NETWORKS_FOR_SELECTOR[element as keyof INetworksForSelector])
    );

  return (
    <Box
      h={isPhoneHardware() ? "75px" : "50px"}
      borderWidth={1}
      p={1}
      borderRadius={20}
    >
      <Menu>
        <MenuButton boxSize={"100%"} as={Button}>
          {currentChain === "Select Network" ? (
            <Text fontSize={"sm"}>{currentChain}</Text>
          ) : (
            <Flex
              direction={"row"}
              boxSize={"100%"}
              alignItems={"center"}
              gap={1}
            >
              {isSmallNetworkIcon || isPhoneHardware() ? (
                <Image
                  boxSize={isPhoneHardware() ? "30px" : "20px"}
                  src={
                    IMAGES_BY_NETWORK[currentChain as keyof IImagesByNetwork]
                  }
                />
              ) : (
                <>
                  <Text fontSize={"sm"}>{currentChain}</Text>
                  <Spacer />
                  <Image
                    boxSize={isPhoneHardware() ? "30px" : "20px"}
                    src={
                      IMAGES_BY_NETWORK[currentChain as keyof IImagesByNetwork]
                    }
                  />
                </>
              )}
            </Flex>
          )}
        </MenuButton>
        <MenuList gap={2}>
          {account.account !== null && account.chainId !== null ? (
            Object.keys(NETWORKS_FOR_SELECTOR).map((element) => (
              <MenuItem
                key={element}
                fontSize={"sm"}
                onClick={() => onClickChangeChain(element)}
              >
                <Flex
                  direction={"row"}
                  boxSize={"100%"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Text pl={3} fontSize={"md"}>
                    {element}
                  </Text>
                  <Spacer />
                  <Image
                    boxSize={isPhoneHardware() ? "30px" : "20px"}
                    src={IMAGES_BY_NETWORK[element as keyof IImagesByNetwork]}
                  />
                </Flex>
              </MenuItem>
            ))
          ) : (
            <Flex
              minHeight={"100px"}
              direction={"row"}
              width={"100%"}
              gap={2}
              px={5}
            >
              <Box fontSize={"sm"} alignSelf={"center"}>
                Please, connect in your wallet
              </Box>
              <Spacer />
              <Icon
                boxSize={isPhoneHardware() ? "30px" : "20px"}
                alignSelf={"center"}
              />
            </Flex>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default React.memo(NetworkSelector);
