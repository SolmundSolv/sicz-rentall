// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { createProductRouter } from "./products";
import { z } from "zod";
import { resolve } from "path";

export const appRouter = createRouter().transformer(superjson).merge("product.", createProductRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
