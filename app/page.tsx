"use client";
import Image from "next/image";
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <header className="bg-gray-50 border-b-2">
            <div className="mx-auto flex h-20  items-center gap-8 px-6 sm:px-6 lg:px-10 border-b">
                <Image src={'/logo.svg'} alt='logo' width={100} height={40}></Image>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    
                </nav>

                <div className="flex items-center gap-4 justify-center">
                    <div className="gap-20 sm:flex sm:gap-12 justify-center items-center">
                    <Link href="/dashboard"><span className="cursor-pointer bg-gradient-to-r from-gray-600 to-gray-800 text-white px-5 py-2.5  rounded-md">Dashboard</span></Link>
                    <SignedOut>
                        <SignInButton className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" >Get Started</SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                
                    </div>

                    <button
                    className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </header> 
        <div className="absolute w-screen -z-10 h-[90vh]">
          <Image src="/bg.jpg" alt="bg" fill className=" object-cover" />
        </div>
        <div className="mt-44 z-10">
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-5xl font-bold">AI Content <span className="text-blue-600">Generator</span></h1>
            <div className="flex flex-col items-center">
              <p>Revolutionize your content creation with our AI-powered app, delivering engaging and </p>
              <p>high-quality text in seconds.</p>
            </div>
            <div className="flex gap-10">
              <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-2  rounded-md">Get started</button>
              <Link href="/dashboard"><button className="cursor-pointer bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-2  rounded-md">Dashboard</button></Link>
            </div>
          </div>
        </div>
    </div>
  );
}
