import { client } from "@/client";

export async function deletecomment(id:number){
    await client.delete.mutate({id:id})
}