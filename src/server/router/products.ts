import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { z } from "zod";
import { resolve } from "path";

export const createProductRouter = createRouter()
    .mutation("postMessage", {
        input: z.object({
            name: z.string(),
            price: z.string(),
            img: z.string(),
            description: z.string(),
        }),
        async resolve({ ctx, input }) {
            try {
                await ctx.prisma.product.create({
                    data: {
                        name: input.name,
                        price: input.price,
                        img: input.img,
                        description: input.description,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
    })
    .query("getAll", {
        async resolve({ ctx }) {
            try {
                return await ctx.prisma.product.findMany({
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        img: true,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
    })
    .query("getOnebyId", {
        input: z.object({
            id: z.string(),
        }),
        async resolve({ ctx, input }) {
            try {
                return await ctx.prisma.product.findUnique({
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        img: true,
                        description: true,
                        category: {
                            select: {
                                name: true,
                            },
                        },
                    },
                    where: {
                        id: input.id ?? "0",
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
    })
    .query("getByName", {
        input: z.object({
            name: z.string(),
        }),
        async resolve({ ctx, input }) {
            try {
                return await ctx.prisma.product.findMany({
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        img: true,
                        description: true,
                    },
                    where: {
                        name: {
                            contains: input.name,
                        },
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
    })
    .query("getByCategory", {
        input: z.object({
            category: z.string(),
        }),
        async resolve({ ctx, input }) {
            try {
                return await ctx.prisma.product.findMany({
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        img: true,
                        description: true,
                        category: {
                            select: {
                                name: true,
                            },
                        },
                    },
                    where: {
                        category: {
                            name: {
                                contains: input.category,
                            },
                        },
                    },
                });
            } catch (err) {
                console.log(err);
            }
        },
    });
