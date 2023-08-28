'use client'
import { useForm,SubmitHandler } from "react-hook-form";
import { upload } from "./_actions/upload";
import { comment } from "@/types";
import Comment from "@/components/Comments";
export default function Home() {
  const onSubmit:SubmitHandler<comment>=(data)=>{
    upload(data);
  }
  const {register,handleSubmit}= useForm<comment>();
  return (
    <div className="flex justify-center">
      <Comment />
      <div className="absolute bottom-5">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input className="mr-4 h-10 p-1" placeholder="Add a comment"{...register("comment",
        {required:true,minLength:5,maxLength:50}
        )}>
        </input>
        <input type="submit"></input>
      </form>
      </div>
    </div>
  )
}
