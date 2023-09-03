import cors from "cors";
import { initTRPC } from "@trpc/server";
import {createExpressMiddleware} from "@trpc/server/adapters/express";
import {z} from "zod";
import {prisma }from "./db";


require('dotenv').config();
const express = require('express')
const app = express()
app.use(cors());
const t = initTRPC.create();

//dummy route
export const newrouter=t.router({
  hello:t.procedure.input(z.object({
    from_id:z.string(),
    to_id:z.string(),
  })).query((name)=>{
    console.log(name.input)
    return name.input;
  }),
  world: t.procedure.query(()=>{
    return{
      message:"world",
      head:"head",
    }
  })
  
})

//helper function upload
const Upload=async(comment:string)=>{
  await prisma.post.create({
    data:{
      post:comment
    }
  })
}
//app route
export const appRouter=t.router({
  //upload route
  upload:t.procedure.input(z.object({
    comment:z.string()
  })).mutation(async(obj)=>{
    await Upload(obj.input.comment);
  }),
  //fetch comment route
  getcomments: t.procedure.query(async ()=>{
    const comments= await prisma.post.findMany();
    return comments;
  }),
  delete:t.procedure.input(z.object({
    id:z.number()
  })).mutation(async(obj)=>{

    await prisma.post.delete({
      where:{
        id:obj.input.id
      }
    })
  })
  
})


app.use("/nottrpc",createExpressMiddleware({
  router:newrouter
}))
app.use("/api",createExpressMiddleware({
  router:appRouter,
}))
export type AppRouter = typeof appRouter;
app.listen(process.env.PORT)