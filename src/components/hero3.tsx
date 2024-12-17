import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mt-5">
            <h1  className='font-semibold flex justify-center text-2xl text-black'>DONT MISS</h1>
                <div className="flex justify-center">
                    <Image
                        src={"/images/hero3logo/hero3.png"}
                        width={1400} 
                        height={600} 
                        alt="images"
                        className="w-full max-w-screen-lg h-auto object-cover object-center rounded mb-10"
                    />
                </div>

                
            </section>
        </div>
    )
}

export default Hero3
