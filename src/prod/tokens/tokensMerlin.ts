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
        name: "Merlin's Seal BTC",
        symbol: TokenSymbol.MBTC,
        chains: [ChainId.Merlin],
        icon: baseURL + 'mbtc.svg',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xb880fd278198bd590252621d4cd071b1842e9bcd', 
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
        name: "Bridged BRC20 VOYA",
        symbol: TokenSymbol.VOYA,
        chains: [ChainId.Merlin],
        icon: baseURL + 'voya.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x480e158395cc5b41e5584347c495584ca2caf78d', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Bridged BRC20 RUFI",
        symbol: TokenSymbol.RUFI,
        chains: [ChainId.Merlin],
        icon: baseURL + 'rufi.svg',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x9bd60d6FC99843207B8149f9190438C1F81BDdcD', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Bridged BRC20 MNER",
        symbol: TokenSymbol.MNER,
        chains: [ChainId.Merlin],
        icon: baseURL + 'mner.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x27622B326Ff3ffa7dc10AE291800c3073b55AA39', 
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
        name: "Influpia Token",
        symbol: TokenSymbol.ING,
        chains: [ChainId.Merlin],
        icon: baseURL + 'ing.svg',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x8fef71cb438bf47cee6b67db1928f8f7269dfdc7', 
                decimal: 18, 
            },
        },
    },
    // {
    //     name: "DragonBall Token",
    //     symbol: TokenSymbol.DRAGONBALL,
    //     chains: [ChainId.Merlin],
    //     icon: baseURL + 'dragonball.png',
    //     contracts: {
    //         [ChainId.Merlin]: {
    //             address: '0x8de7eea34a72059324dbbed7f2f49fb2190abd56', 
    //             decimal: 18, 
    //         },
    //     },
    // },
   
    {
        name: "Elixir Token",
        symbol: TokenSymbol.ELXR,
        chains: [ChainId.Merlin],
        icon: baseURL + 'elxr.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xa49fc6e5bbb77622b96bf242fee4028b8b61ffa0', 
                decimal: 18, 
            },
        },
    },
    {
        name: "DRAGON Token",
        symbol: TokenSymbol.DRAGON,
        chains: [ChainId.Merlin],
        icon: baseURL + 'dragonmerlin.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x1dd67628db8661186de74a3adc6e3f44def5709e', 
                decimal: 18, 
            },
        },
    },
    {
        name: "King Arthur Token",
        symbol: TokenSymbol.ART,
        chains: [ChainId.Merlin],
        icon: baseURL + 'art.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xdbbc61004663f0116dd5ae5751436c722b7168e6', 
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
        name: "RAT404 Token",
        symbol: TokenSymbol.RAT404,
        chains: [ChainId.Merlin],
        icon: baseURL + 'rat404.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xbf108e20fd47995b2b1a316db76c1c145e5bdeac', 
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
        name: "Merlin Meme Token (Meme)",
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
        name: "The Grand VOYA Sailor",
        symbol: TokenSymbol.SAILOR,
        chains: [ChainId.Merlin],
        icon: baseURL + 'sailor.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xe380a2d2477799fff336a2937ea00a29a84a22c9', 
                decimal: 18, 
            },
        },
    },
    {
        name: "SPELL Token",
        symbol: TokenSymbol.SPELL,
        chains: [ChainId.Merlin],
        icon: baseURL + 'spell.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xcd88e36a9ce94e4c36f08b0b8086a80639e11e7a', 
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
        name: "Merlin Box Token",
        symbol: TokenSymbol.MERLINBOX,
        chains: [ChainId.Merlin],
        icon: baseURL + 'merlinbox.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0x63c2e663a6cfb0f5568c84a1c8134acbe1b88bec', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Merlin Land Token",
        symbol: TokenSymbol.MERLINLAND,
        chains: [ChainId.Merlin],
        icon: baseURL + 'merlinland.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xf0db39a5e37eb2df2d2b968f3fc8e5d7a9969dea', 
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
    {
        name: "Drak Token",
        symbol: TokenSymbol.DRAK,
        chains: [ChainId.Merlin],
        icon: baseURL + 'drak.png',
        contracts: {
            [ChainId.Merlin]: {
                address: '0xc69a8ef7da38fb6bf035c38ea4a0a5e0a529378d', 
                decimal: 18, 
            },
        },
    },
]
