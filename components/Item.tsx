import Link from "next/link";
import { prisma } from "../src/server/db/client";
import { any } from "zod";
import type { GetServerSideProps } from "next";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function Item({ item }) {
    return (
        <Link key={item.id} href="products/[id]" as={`/products/${item.id}`}>
            <div className="group border border-gray-700 p-2 shadow-md md:p-4">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img src={item.img} alt={item.descripton} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 dark:text-white">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-yellow-400">${item.price}</p>
            </div>
        </Link>
    );
}
