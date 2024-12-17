
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './searchbar'
import { GiftOutlined, HeartOutlined } from '@ant-design/icons'






const Nav = () => {
    return (
        <div>
            <header className="text-gray-600 bg-blue-50 body-font">
                <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">

                    <Image src="https://media.istockphoto.com/id/924958504/vector/vector-black-and-white-waving-breton-flag-with-shadow.jpg?s=1024x1024&w=is&k=20&c=q9X0OdLJZC0t_BRF6B3nLCn4PgPKsHllcB94Dm5vzRo=" alt=" image "
                        width={80} height={30} className='hidden sm:block rounded-lg p-1' />

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <li className="mr-5 text-zinc-950 font-bold border-r-2 border-black pr-3">Find a store</li>
                            <li className="mr-5 text-zinc-950 font-bold border-r-2 border-black pr-3">help</li>
                            <li className="mr-5 text-zinc-950 font-bold border-r-2 border-black pr-3">join us</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <header className="text-gray-600 body-font">
                <div className=" mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <Image src='/images/navlogo/Frame.png'
                        alt="image"
                        width={80}
                        height={30}
                        className="flex title-font font-medium items-center text-gray-900 ml-10 mb-4 md:mb-0" />
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"id"} className="mr-5 text-zinc-950 font-semibold text-2xl hover:text-sky-600">New & Feature</Link>
                        <Link href={"id"} className="mr-5 text-zinc-950 font-semibold text-2xl  hover:text-sky-600">Men</Link>
                        <Link href={"id"} className="mr-5 text-zinc-950 font-semibold text-2xl  hover:text-sky-600">Women</Link>
                        <Link href={"id"} className="mr-5 text-zinc-950 font-semibold text-2xl  hover:text-sky-600">Kid</Link>
                        <Link href={"id"} className="mr-5 text-zinc-950 font-semibold text-2xl  hover:text-sky-600">Srinks</Link>
                    <div className='flex flex-wrap items-center text-base justify-center ml-5'>
                    <SearchBar/>
                    <HeartOutlined className='text-2xl mx-5  hover:text-sky-600 cursor-pointer' />
                    <GiftOutlined className='text-2xl  hover:text-sky-600 cursor-pointer'/>
                    </div>

                    </nav>


                </div>
            </header>
            <header className="  text-gray-950 bg-blue-50 body-font p-2  ">
                <div className=" text-center">
                    <h1 className=' text-2xl font-semibold'>HELLO NIKE App</h1>
                    <h3>Download the app to acess everything nike</h3>
                    
           </div>
          </header>

        </div>
    )
}

export default Nav







