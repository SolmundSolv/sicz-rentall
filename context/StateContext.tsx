import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
    cartItems: any;
    totalPrice: number;
    onAdd: Function;
    onRemove: Function;
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
    const cart: Product[] = [];
    const [cartItems, setCartItems] = useState(cart);
    const [totalPrice, setTotalPrice] = useState(0);
    let foundProduct;
    let index: number;
    const onAdd = (item: Product) => {
        if (cartItems.find((product: Product) => product.id === item.id)) {
            return;
        }
        setCartItems([...cartItems, { ...item }]);
        setTotalPrice((currPrice) => {
            return parseInt(item.price) + currPrice;
        });
    };
    const onRemove = (item: Product) => {
        foundProduct = cartItems.find((product: Product) => product.id === item.id);
        const newCartItems = cartItems.filter((product: Product) => product.id !== foundProduct.id);
        setCartItems(newCartItems);
        setTotalPrice(totalPrice - foundProduct.price);
    };
    return (
        <Context.Provider
            value={{
                cartItems,
                totalPrice,
                onAdd,
                onRemove,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default StateContext;
export const useStateContext = () => useContext(Context);
