import * as React from 'react';
import { 
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';
import { IProviderProps } from '../../types/Types';
import useGlobalSettings from '../../GlobalSettings/useGlobalSettings';
import { IAlertDialogErrorProvider } from '../../types/AlertDialogProvider/AlertDialogProvider';



const DEFAULT_ALERT_DIALOG_CONTEXT_VALUE: IAlertDialogErrorProvider = {
    alertDialogError: () => { return; }
}

export const AlertDialogContext = React.createContext<IAlertDialogErrorProvider>(DEFAULT_ALERT_DIALOG_CONTEXT_VALUE);



function AlertDialogError({children}: IProviderProps): JSX.Element {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const closeButtonRef = React.useRef<HTMLButtonElement>(null);
    const headerRef = React.useRef<string>('');
    const alertMessageRef = React.useRef<string>('');
    const buttonMessageRef = React.useRef<string>('');
    const {isPhoneHardware} = useGlobalSettings();


    const alertDialogError = (header: string, alertMessage: string, buttonMessage: string) => {

        headerRef.current = header;
        alertMessageRef.current = alertMessage;
        buttonMessageRef.current = buttonMessage; 
        setIsOpen(true);
    }

    const onCloseAlertDialog = () => setIsOpen(false); 


    return (
        <AlertDialogContext.Provider value = {{alertDialogError}}>
            {children}
            <AlertDialog 
                isOpen = {isOpen} 
                onClose = {onCloseAlertDialog} 
                leastDestructiveRef = {closeButtonRef}
                size = {isPhoneHardware() ? '3xl' : 'xl'}
            >
                <AlertDialogOverlay/>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize = {'lg'}>
                        {headerRef.current}
                    </AlertDialogHeader>

                    <AlertDialogBody fontSize = {'md'}>
                        {alertMessageRef.current}
                    </AlertDialogBody>

                    <AlertDialogFooter justifyContent={'center'}>
                        <Button
                            ref = {closeButtonRef}
                            colorScheme = {'red'}
                            fontSize = {'md'}
                            onClick = {onCloseAlertDialog}
                            width = {'100%'}
                        >
                            {buttonMessageRef.current}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AlertDialogContext.Provider>
    );
}



export default React.memo(AlertDialogError);