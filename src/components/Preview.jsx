import React from 'react'
import P1 from './assets/images/HD1.jpg'
import P2 from './assets/images/HD2.jpg'
import P3 from './assets/images/HD3.jpg'
import P4 from './assets/images/HD4.jpg'
import P5 from './assets/images/HD5.jpg'
import P6 from './assets/images/HD6.jpg'
import P7 from './assets/images/HD7.jpg'
import P8 from './assets/images/HD8.jpg'
import GamePreviewCarousel from './GamePreviewCarousel'

const images = [
    P1, P2, P3, P4, P5, P6, P7, P8
]

export default function Preview() {
    return (
        <div className="flex flex-col justify-center p-6 min-h-[80vh] bg-MG-50">
        <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-MG-700 font-extrabold text-[30px] lg:text-[50px] font-main-bold pt-8 mt-2">
            Game Preview
            </h3>
            <p className="text-MG-600 text-[20px] lg:text-[30px] font-main mb-6">
            Here's a sneak peek of what we're building!
            </p>
        </div>
        <GamePreviewCarousel images={images} />
        </div>
    )
}