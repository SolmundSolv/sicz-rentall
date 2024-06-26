import { Dialog, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
const MobileMenu = ({ navigation, open, setOpen }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl dark:bg-gray-800">
                            <div className="flex px-4 pt-5 pb-2">
                                <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200 dark:border-yellow-400">
                                    <Tab.List className="-mb-px flex space-x-8 px-4">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? "border-yellow-400 text-yellow-400" : "border-transparent text-gray-900 dark:text-white",
                                                        "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900 dark:text-white">
                                                        {section.name}
                                                    </p>
                                                    <ul role="list" aria-labelledby={`${category.id}-${section.id}-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <a href={item.href} className="-m-2 block p-2 text-gray-500 dark:text-gray-200">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="space-y-6 border-t border-gray-200 py-6 px-4 dark:border-yellow-400">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900 dark:text-white">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6 border-t border-gray-200 py-6 px-4 dark:border-yellow-400">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900 dark:text-white">
                                        Sign in
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900 dark:text-white">
                                        Create account
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 dark:border-yellow-400">
                                <a href="#" className="-m-2 flex items-center p-2">
                                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                                    <span className="ml-3 block text-base font-medium text-gray-900 dark:text-white">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default MobileMenu;
