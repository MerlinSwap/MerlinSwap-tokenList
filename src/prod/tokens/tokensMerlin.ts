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
        icon: baseURL + 'btc.png',
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
        name: "Jeff Token",
        symbol: TokenSymbol.JEFF,
        chains: [ChainId.Merlin],
        icon: baseURL + 'jeff.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xd79f579d7e34782465863a6f837b2692bda7b989', 
                decimal: 18, 
            },
        },
    },
    {
        name: "MRC404 Token",
        symbol: TokenSymbol.MRC404,
        chains: [ChainId.Merlin],
        icon: baseURL + 'mrc404.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x6df1b05ac85007bcd4f25aca7ab505415b3d51dc', 
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
    {
        name: "Merlin Meme Token",
        symbol: TokenSymbol.MERLINMEME,
        chains: [ChainId.Merlin],
        icon: baseURL + 'merlinmeme.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x402b2e84CB09b08e18Bd47636594Afb789401ddc', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Merlin Ball Token",
        symbol: TokenSymbol.BALL,
        chains: [ChainId.Merlin],
        icon: baseURL + 'ball.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xF18781109992b12580A646ed0392a6Fc50318209', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Owl Token",
        symbol: TokenSymbol.OWL,
        chains: [ChainId.Merlin],
        icon: baseURL + 'owl.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x62e99191071fc1c5947cf1e21aa95708dcc51adb', 
                decimal: 18, 
            },
        },
    },
    // {
    //     name: "恭喜发财好运来",
    //     symbol: TokenSymbol.GXFC,
    //     chains: [ChainId.Merlin],
    //     icon: baseURL + 'gxfc.png',
    //     contracts: {
    //         [ChainId.Merlin]: {
    //             address: '0x01B1DD8DAB8e8f61891c8367f9e622F4b6313cf8', 
    //             decimal: 9, 
    //         },
    //     },
    // },
]
