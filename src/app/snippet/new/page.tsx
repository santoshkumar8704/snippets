import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
const NewSnippetPage = () => {
  return (
    <form>
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
