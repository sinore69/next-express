
import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getcomments } from '@/app/_actions/getcomments'
import { commentList } from '@/types'
import { deletecomment } from '@/app/_actions/delete'
function Comments() {
const comm=useQuery({
    queryKey:['comments'],
    queryFn:async()=>{
        const comments= await getcomments();
        return comments;
    }
})
  return (
    <div>
{
comm?.data?.map((item:commentList)=>(
  
   
        <p key={item.id}>{item.post}
      <button className='p-1' onClick={()=>deletecomment(item.id)}>delete</button>
      </p>
  
))
}
    </div>
  )
}

export default Comments