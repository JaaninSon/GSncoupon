import { atom } from "recoil";

export interface ICartInfo {
    readonly id: number;
    readonly count: number;
    readonly timestamp: number;
}

export interface ICartState {
    readonly items?: Record<number, ICartInfo>;
}

export const CART_ITEM = "CART_ITEM";

export const cartState = atom<ICartState>({
    key: "cart",
    default: {},
    effects: [
        ({ setSelf, onSet }) => {
            localStorage.getItem(CART_ITEM) &&
                setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
            onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
        },
    ],
});
