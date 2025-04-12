// hooks/useCart.ts
import { useRecoilState } from "recoil";
import { cartState } from "./cart";

export function useCart() {
    const [cart, setCart] = useRecoilState(cartState);

    const items = cart.items ?? {};

    const addItem = (id: number) => {
        if (Object.keys(items).length === 20) {
            alert("상품은 최대 20개까지 추가할 수 있습니다.");
        }

        setCart((prev) => {
            const prevItems = prev.items ?? {};
            const existing = prevItems[id];
            return {
                ...prev,
                items: {
                    ...prevItems,
                    [id]: existing
                        ? { ...existing, count: existing.count + 1 }
                        : { id, count: 1, timestamp: Date.now() },
                },
            };
        });
    };

    const removeItem = (id: number) => {
        setCart((prev) => {
            const prevItems = { ...(prev.items ?? {}) };
            delete prevItems[id];
            return { ...prev, items: prevItems };
        });
    };

    const removeAll = () => {
        setCart({});
    };

    const increaseCount = (id: number) => {
        setCart((prev) => {
            const item = prev.items?.[id];
            if (!item) return prev;
            return {
                ...prev,
                items: {
                    ...prev.items,
                    [id]: { ...item, count: item.count + 1 },
                },
            };
        });
    };

    const decreaseCount = (id: number) => {
        setCart((prev) => {
            const item = prev.items?.[id];
            if (!item || item.count <= 1) return prev;
            return {
                ...prev,
                items: {
                    ...prev.items,
                    [id]: { ...item, count: item.count - 1 },
                },
            };
        });
    };

    return {
        items,
        addItem,
        removeItem,
        removeAll,
        increaseCount,
        decreaseCount,
    };
}
