import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
    cartItems: any;
    totalPrice: number;
    onAdd: Function;
}

interface Product {
    id: string;
    name: string;
    price: string;
    img: string;
    description: string;
}

const Context = createContext<AppContextProps | null>(null);

const StateContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const onAdd = (item) => {
        if (cartItems.find((product) => product.id === item.id)) {
            return;
        }
        setCartItems([...cartItems, { ...item }]);
        setTotalPrice(parseInt(item.price) + totalPrice);
    };
    return (
        <Context.Provider
            value={{
                cartItems,
                totalPrice,
                onAdd,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default StateContext;
export const useStateContext = () => useContext(Context);
