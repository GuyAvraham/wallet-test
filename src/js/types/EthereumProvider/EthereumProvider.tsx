 
export interface IProvider {

    request: ethRequest
    on: ethOnOff
    off: ethOnOff
}

type ethOnOff = (event: string, callback: ((accounts: string[]) => void) | (() => void)) => void;
  
type ethRequest = (args: IEthRequestArguments) => Promise<any>

interface IEthRequestArguments {
    
    method: string
    params?: any[] | Object
}

export interface IEthereumProvider {

    providerState: IProvider | null
    removeProvider: (() => void)
    detectProvider: (() => Promise<boolean>)
    forgetProvider: (() => void)
    saveProvider: (() => void)
}