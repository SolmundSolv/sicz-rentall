import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const Cart = ({ open, setOpen }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 " onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="-translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="absolute top-0 right-0 bottom-0 flex w-full max-w-md flex-col overflow-y-auto bg-white pb-12 shadow-xl dark:bg-gray-800">
                            <div>Cart</div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Cart;
