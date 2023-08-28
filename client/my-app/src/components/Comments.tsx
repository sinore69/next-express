
import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getcomments } from '@/app/_actions/getcomments'
function Comments() {
const comm=useQuery({
    queryKey:['comments'],
    queryFn:()=>{
        const comments= getcomments();
        console.log(comments)
        return comments;
    }
})
  return (
    <div>
{

}
    </div>
  )
}

export default Comments