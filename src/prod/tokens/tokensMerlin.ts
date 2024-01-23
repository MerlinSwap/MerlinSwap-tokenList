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
    // {
    //     name: "FLON token",
    //     symbol: TokenSymbol.FLONZKFair,
    //     chains: [ChainId.ZKFair],
    //     icon: baseURL + 'flon.png',
    //     contracts: {
    //         [ChainId.ZKFair]: {
    //             address: '0xA111328a3dc9650f07653944EE2e2a88c10C2ad8',
    //             decimal: 18, 
    //         },
    //     },
    // },
]
