import * as React from 'react';
import EthereumProvider from '../components/EthereumProvider/EthereumProvider';
import AccountProvider from '../components/AccountProvider/AccountProvider';
import useReloadElement from '../utils/Hooks/useReloadElement';
import { 
    ConnectWay, 
    Hardware, 
    IGlobalSettingsProvider, 
    IProviderProps
} from '../types/Types';
import AlertDialogErrorProvider from '../components/AlertDialogErrorProvider/AlertDialogErrorProvider';
import MetamaskProvider from '../components/ConnectMetamask/MetamaskProvider';
import { 
    DEFAULT_HARDWARE_TYPE,
    detectHardware, 
    isPhoneHardware
} from './Hardware/Hardware';
import useMainContent from './MainContentView/useMainContent';



let hardware: Hardware;

const DEFAULT_CONTEXT_VALUE: IGlobalSettingsProvider = {
    hardware: DEFAULT_HARDWARE_TYPE,
    isPhoneHardware,
    mainContent: 'wallet',
    setMainContent: () => {},
    connectWay: {current: ''}
}


export const GlobalSettingsContext = React.createContext<IGlobalSettingsProvider>(DEFAULT_CONTEXT_VALUE);



export default function GlobalSettingsProvider({children}: IProviderProps): JSX.Element {

    const {mainContent, setMainContent} = useMainContent();
    const {reloadElement} = useReloadElement();
    const connectWay = React.useRef<ConnectWay>('');

    React.useEffect(() => {
        
        hardware = detectHardware();
        reloadElement();
    }, []);


    return (
        <GlobalSettingsContext.Provider value = {{hardware, isPhoneHardware, mainContent, setMainContent, connectWay}}>
            <AlertDialogErrorProvider>
                <EthereumProvider>
                    <AccountProvider>
                        <MetamaskProvider>
                            {children}
                        </MetamaskProvider>
                    </AccountProvider>
                </EthereumProvider>
            </AlertDialogErrorProvider>
        </GlobalSettingsContext.Provider>
    );
}