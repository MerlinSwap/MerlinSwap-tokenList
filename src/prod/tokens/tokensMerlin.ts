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
    {
        name: "HUHU CAT",
        symbol: TokenSymbol.HUHU,
        chains: [ChainId.Merlin],
        icon: baseURL + 'huhu.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x7a677e59dC2C8a42d6aF3a62748c5595034A008b', 
                decimal: 18, 
            },
        },
    },
    {
        name: "BIUU Token",
        symbol: TokenSymbol.BIUU,
        chains: [ChainId.Merlin],
        icon: baseURL + 'biuu.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x3cFD33fD6f670ebBf63434D4b09DcA6D403aEFea', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Wizard Token",
        symbol: TokenSymbol.WIZARD,
        chains: [ChainId.Merlin],
        icon: baseURL + 'wizard.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x2503d56065a1369d7270dc2038c16a113699454d', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Merlin Pad Token",
        symbol: TokenSymbol.MERLINPAD,
        chains: [ChainId.Merlin],
        icon: baseURL + 'merlinpad.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x5782d6FdDFE62cb1650FE42582Ef8E37EAEA03E2', 
                decimal: 18, 
            },
        },
    },
]
