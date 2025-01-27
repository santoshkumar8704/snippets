import { prisma } from '@/lib/prisma'
import React from 'react'
type idparams = {
    params : Promise<{id:string}>
}
const IdPage = async({params}:idparams) => {
    const id = parseInt((await params).id)
    
    const snippet = await prisma.snippet.findUnique({where:{id}})
    if(!snippet) return <div>No snippet found</div>
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>{snippet.title}</h1>
        <p>{snippet.code}</p>
      
    </div>
  )
}

export default IdPage
