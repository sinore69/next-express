import { comment } from "@/types";
import { client } from "@/client";
export async function upload(data:comment){
    await client.upload.mutate(data);
}