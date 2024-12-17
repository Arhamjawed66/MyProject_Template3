import { Button } from 'antd'
import React from 'react'
import HeroSlider from './herorandom'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex  items-center justify-center flex-col">
                    <div className="w-full flex mb-10 object-cover object-center rounded">
                        <HeroSlider />
                    </div>

                    <div className="text-center w-full md:w-3/4 lg:w-2/3">

                        <h1 className="title-font sm:3xl text-5xl mb-5 font-lg text-gray-900 font-bold ">
                            NIKE AIR MAX PULSE
                        </h1>
                        <p className="mb-8 leading-relaxed font-semibold">
                            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
                            tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
                            ramps hexagon mustache umami snackwave tilde chillwave ugh.
                        </p>
                        <div className="flex justify-center gap-5">
                            <Button className='text-gray-950 font-semibold'>Notify Me </Button>
                            <Button className='text-gray-950 font-semibold'>Shop Air Mix</Button>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Hero

