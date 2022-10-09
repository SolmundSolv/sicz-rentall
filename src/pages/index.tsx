import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Item from "../../components/Item";

const Home: NextPage = () => {
    const { data: products, isLoading } = trpc.useQuery(["product.getAll"]);
    if (isLoading || !products) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-600">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products?.map((res) => (
                        <Item item={res} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;