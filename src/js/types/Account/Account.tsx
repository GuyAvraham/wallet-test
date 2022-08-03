
export interface IAccount {
    account: string | null
    chainId: number | null
    balance: number | null
    icon: string | null
}

export interface IAccountProvider {
    account: IAccount
    setAccount: React.Dispatch<React.SetStateAction<IAccount>>
}