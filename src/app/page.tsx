import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany()
  return (
    <div>
      <h1 className="font-bold text-xl">Home</h1>
      <div className="flex items-center justify-between">
        
        <Link href={"/snippet/new"} ><Button>New</Button></Link>
      </div>
      {snippets.map(snippet => { return(<div key={snippet.id} className="flex items-center justify-between bg-gray-300 my-2 px-2">
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}><Button variant="link" className="bg-black text-white ">view</Button></Link>
          </div>)
        })}
    </div>)
          
}
