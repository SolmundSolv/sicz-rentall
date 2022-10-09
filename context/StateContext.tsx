import React, { createContext, useState } from "react";
import Item from "../components/Item";

interface AppContextProps {
    showCart: boolean;
    cartItems: any;
    totalPrice: number;
}

const Context = createContext<AppContextProps | null>(null);

const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default StateContext;
