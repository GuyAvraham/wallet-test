import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import { NETWORKS_BY_NAME } from "../../../utils/Networks/networks";
import useAccount from "../../AccountProvider/useAccount";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function DropdownMenu(): JSX.Element {
  const { hardware, isPhoneHardware, mainContent, setMainContent } =
    useGlobalSettings();
  const { account } = useAccount();

  const isTransactionsDisabled: boolean = account.account
    ? account.chainId === NETWORKS_BY_NAME["Ropsten"] ||
      account.chainId === NETWORKS_BY_NAME["Goerli"] ||
      account.chainId === NETWORKS_BY_NAME["Ethereum"] ||
      account.chainId === NETWORKS_BY_NAME["Rinkeby"] ||
      account.chainId === NETWORKS_BY_NAME["Kovan"]
      ? false
      : true
    : true;

  return (
    <Box
      boxSize={isPhoneHardware(hardware) ? "75px" : "50px"}
      borderWidth={1}
      p={1}
      borderRadius={20}
    >
      <Menu closeOnSelect={false}>
        <MenuButton boxSize={"100%"} as={Button} px={2}>
          <HamburgerIcon boxSize={"100%"} justifySelf={"center"} />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Flex width={"100%"} alignItems={"center"} direction={"row"}>
              <ThemeSwitcher />
            </Flex>
          </MenuItem>
          <MenuItem
            isDisabled={isTransactionsDisabled}
            onClick={() =>
              setMainContent(
                mainContent === "wallet" ? "transactions" : "wallet"
              )
            }
          >
            <Text pl={3} fontSize={"md"} fontWeight={"bold"}>
              {mainContent === "wallet" ? "Transactions" : "Wallet"}
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default React.memo(DropdownMenu);
