'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=" "
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-4 items-center sm:items-start">
          NodeLink (similar to linktree) is a social media platform that 
          allows users to share and discover links. Users can create an account, follow other users, 
          and share their favorite links with their followers. The platform also includes features such as link 
          previews, comments, and likes.

          <h1>Get started</h1>
          <div className="flex gap-4">
          <button className="w-40 border border-black rounded-md"
          onClick={()=>router.push("/login")}
          >Login</button>
          <button className=""
          onClick={()=>router.push("/register")}
          >Register </button>
          </div>
        </div>
       

       
      </main>
     
    </div>
  );
}
