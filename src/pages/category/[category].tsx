import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Item from "../../../components/Item";
import { trpc } from "../../utils/trpc";

const Category: NextPage = () => {
    const router = useRouter();
    const { category } = router.query;
    if (category) var { data: products, isLoading } = trpc.useQuery(["product.getByCategory", { category: category.toString() }]);
    if (isLoading || !products)
        return (
            <div className="min-h-screen bg-white dark:bg-gray-600">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div>Loading...</div>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-600">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products?.map((res) => (
                        <Item item={res} key={res.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
