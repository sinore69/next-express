import { client } from "@/client";

export async function getcomments(){
    const comments= await client.getcomments.query();
    return comments;
}