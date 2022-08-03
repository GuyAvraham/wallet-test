
export interface IExchange {
    BTC: number
    USD: number
    EUR: number
} 

export interface IExchangeUpdaterProps {
    setExchange: React.Dispatch<React.SetStateAction<IExchange | null>>
}