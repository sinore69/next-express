
import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getcomments } from '@/app/_actions/getcomments'
import { commentList } from '@/types'
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
  <p key={item.id}>{item.post}</p>
))
}
    </div>
  )
}

export default Comments