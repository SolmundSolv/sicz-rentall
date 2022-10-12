import { NextPage } from "next";
import React from "react";
import OrderForm from "../../components/OrderForm";
import { useStateContext } from "../../context/StateContext";

const Cart: NextPage = () => {
    const ctx = useStateContext();
    return (
        <div className="min-h-screen bg-white dark:bg-gray-600">
            <div className="mx-auto grid max-w-2xl grid-cols-2 py-16 px-4 dark:text-white sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">CheckOut</h2>
                <div className="flex flex-col justify-center">
                    <h4 className="mx-auto text-xl font-bold">Form</h4>
                    <OrderForm />
                </div>

                <div className="flex flex-col">
                    <h4 className="mx-auto text-xl font-bold">Cart</h4>
                    <ul>{ctx?.cartItems.length > 0 && ctx?.cartItems.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;
