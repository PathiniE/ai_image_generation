"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import Homee from './homee/page';



export default function Home() {
  const router = useRouter();

  return (
    <>
       <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
        {/* Navigate to Homee.jsx when logo is clicked */}
        <Link href="/homee">
          <Image src="/assets/logo.svg" alt="logo" width={112} height={40} className="object-contain"/>
        </Link>
        
        {/* Navigate to CreatePost.jsx when 'Create' is clicked */}
        <Link href="/createpost" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Homee />
      </main>
    </>
  );
}



