import { Button } from 'antd'
import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mt-5">
                <div className="flex justify-center">
                    <Image
                        src={"/images/hero2logo/clotheslogo.jpg"}
                        width={1500} 
                        height={600} 
                        alt="images"
                        className="w-full max-w-screen-lg h-auto object-cover object-center rounded mb-10"
                    />
                </div>

                <div className="text-center w-full md:w-3/4 lg:w-2/3 mx-auto">
                    <h1 className="text-xl sm:text-5xl md:text-5xl font-bold text-gray-900 mb-5">
                        STEP INTO WHAT FEELS GOOD
                    </h1>
                    <p className="text-lg mb-8 leading-relaxed font-semibold">
                        Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
                        tousled. Chambray dreamcatcher trust fund.
                    </p>
                    <div className="flex justify-center">
                        <Button className='text-gray-950 font-semibold text-lg'>Order Now</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero2
