import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

const NewSnippetPage = () => {
    const createSnippet = async (formData:FormData) => {
        "use server"
        const title = formData.get('title') as string
        const code = formData.get('code') as string
        const snippet = await prisma.snippet.create({
          data:{
            title,
            code

          }
    
        })
        console.log(snippet)
        redirect("/")


    }
  return (
    <form action={createSnippet}>
      <div>
        <Label>Title</Label>
        <Input type='text' id='title' name='title' />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea id='code' name='code' />
      </div>
      <Button>Add</Button>
    </form>
  )
}

export default NewSnippetPage
