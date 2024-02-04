import { TokenSymbol } from "../symbols/tokenMerlin";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "Bitcoin",
        symbol: TokenSymbol.BTC,
        chains: [ChainId.Merlin],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xF6D226f9Dc15d9bB51182815b320D3fBE324e1bA', //WBTC
                decimal: 18, 
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTC,
        chains: [ChainId.Merlin],
        icon: baseURL + 'wbtc.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xF6D226f9Dc15d9bB51182815b320D3fBE324e1bA', 
                decimal: 18, 
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        chains: [ChainId.Merlin],
        icon: baseURL + 'iusd.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D', 
                decimal: 18, 
            },
        },
    },
]
