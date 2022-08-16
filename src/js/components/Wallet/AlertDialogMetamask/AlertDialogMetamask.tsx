import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import useGlobalSettings from "../../../GlobalSettings/useGlobalSettings";
import { IAlertDialogMetamaskProps } from "../../../types/Metamask/AlertDialogMetamask/AlertDialogMetamask";

function AlertDialogMetamask({
  isOpen,
  onClose,
}: IAlertDialogMetamaskProps): JSX.Element {
  const downloadRef = React.useRef<HTMLButtonElement>(null);
  const { isMobile } = useGlobalSettings();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={downloadRef}
      onClose={onClose}
      size={isMobile ? "3xl" : "xl"}
    >
      <AlertDialogOverlay />
      <AlertDialogContent
        height={isMobile ? "300px" : "200px"}
        bg={"alertDialogWindow"}
      >
        <AlertDialogHeader fontSize={"lg"}>
          Metamask is missing!
        </AlertDialogHeader>
        <AlertDialogBody fontSize={"md"}>
          {isMobile ? (
            <Text>
              Please, open your Metamask app and go to this site by browser in
              the app
            </Text>
          ) : (
            <Text>You have to download Metamask to your chrome browser!</Text>
          )}
        </AlertDialogBody>
        <AlertDialogFooter>
          <LinkBox>
            <Button
              onClick={onClose}
              bg={"positiveButton"}
              ref={downloadRef}
              fontSize={"md"}
            >
              {isMobile ? (
                <Text p={7}>Okey!</Text>
              ) : (
                <LinkOverlay
                  isExternal
                  href={
                    "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  }
                >
                  Download Metamask
                </LinkOverlay>
              )}
            </Button>
          </LinkBox>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default React.memo(AlertDialogMetamask);
