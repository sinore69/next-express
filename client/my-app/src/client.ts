import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import {AppRouter} from "/next-express/server/index";

export const client=createTRPCProxyClient<AppRouter>({
    links:[httpBatchLink({
        url:"http://localhost:3000/api",
    })]
})
