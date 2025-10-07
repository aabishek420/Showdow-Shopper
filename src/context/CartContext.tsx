import React, { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext<CartContextType | undefined>(undefined);


export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
};

// CartProvider
export const CartProvider: React.FC<{ children: any }> = ({ children }) => {


    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addToCart = (item: CartItem) => {
        const found = cart.find((c) => c.id === item.id);
        if (found) {
            setCart(cart.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };


    const removeFromCart = (id: number) => {
        setCart(cart.filter((c) => c.id !== id));
    };


    const clearCart = () => setCart([]);


    const increaseQuantity = (id: number) => {
        setCart(cart.map((c) => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
    };


    const decreaseQuantity = (id: number) => {
        setCart(cart.map((c) => c.id === id && c.quantity > 1 ? { ...c, quantity: c.quantity - 1 } : c));
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
