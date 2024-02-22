import { TokenSymbol } from "../symbols/tokenSymbol";
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
        symbol: TokenSymbol.BTCMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',  //WBTC
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Bitcoin",
        symbol: TokenSymbol.WBTCMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',  
                decimal: 18,
            },
        },
    },
    {
        name: "Tether",
        symbol: TokenSymbol.USDTMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339', 
                decimal: 18,
            },
        },
    },
    {
        name: "HUHU CAT",
        symbol: TokenSymbol.HUHUMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'huhu.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x879cd319b8aa506F4130acf766fA8E3654eD249B', 
                decimal: 18,
            },
        },
    },
    {
        name: "VOYA",
        symbol: TokenSymbol.VOYAMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'voya.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x60FE1bE62fa2082b0897eA87DF8D2CfD45185D30', 
                decimal: 18,
            },
        },
    },
]
