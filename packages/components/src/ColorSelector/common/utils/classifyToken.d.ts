import type { TokenValue } from '../interface';
export declare const TOKEN_SORTS: ("line" | "screen" | "space" | "font" | "motion" | "colorSplit" | "colorText" | "colorFill" | "seed" | "colorCommon" | "colorBg" | "radius" | "control" | "others")[];
export type TokenType = (typeof TOKEN_SORTS)[number];
export declare function getTypeOfToken(tokenName: string): TokenType;
export declare const classifyToken: (token: Record<string, TokenValue>) => Record<string, string[]>;
