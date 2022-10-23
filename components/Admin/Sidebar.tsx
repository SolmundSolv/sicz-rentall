import React from "react";

const navigation = {
    categories: [
        {
            id: "categories",
            name: "Categories",
            sections: [
                {
                    id: "budowlane",
                    name: "Budowlane",
                    items: [
                        { name: "Betoniarki", href: "/category/Budownictwo" },
                        { name: "Wibratory do betonu", href: "#" },
                        { name: "Młotki", href: "#" },
                        { name: "Wkrętarki", href: "#" },
                    ],
                },
                {
                    id: "ogrodnictwo",
                    name: "Ogrodnictwo",
                    items: [
                        { name: "Konewki", href: "/category/Ogrodnictwo" },
                        { name: "Węże ogrodowe", href: "#" },
                        { name: "Sprinklers", href: "#" },
                    ],
                },
                {
                    id: "majesterkowicze",
                    name: "Majsterkowicze",
                    items: [
                        { name: "Młotki", href: "/category/Dla majsterkowiczów" },
                        { name: "Śrubokręty", href: "#" },
                        { name: "Klucze francuskie", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Store", href: "/" },
    ],
};

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
    return (
        <div className="sticky z-40 flex h-screen">
            <div className="flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl dark:bg-gray-800">
                {/* Links */}
                <div className="mt-2">
                    <div className="border-b border-gray-200 dark:border-yellow-400">
                        <div className="-mb-px flex space-x-8 px-4">
                            {navigation.categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="flex-1 whitespace-nowrap border-b-2 border-yellow-400 border-transparent
                                                py-4 px-1 text-base font-medium text-yellow-400 dark:text-white"
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    );
};

export default Sidebar;
