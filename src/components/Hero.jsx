import { useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import hero from '../assets/images/hero-graphic.png';

export default function Hero() {
    const line1 = 'From Wiggles to Zen Giggles—';
    const fullLine2 = "Calm young minds today, and they'll conquer the storms of tomorrow.";
    const typedLine2 = useTypewriter(fullLine2, 80);

    return (
        <div
        className="
            flex flex-col md:flex-row 
            items-center justify-between 
            w-full p-8 h-[90vh] pt-30
        "
        >
        <div className="flex-1 max-w-5xl ml-5 lg:ml-30 flex flex-col">
            <p className="text-custom-blue font-extrabold text-[20px] md:text-[30px] lg:text-[50px] font-main-bold">
            {line1}
            </p>
            <p className="text-custom-blue text-[15px] md:text-[20px] lg:text-[40px] font-main max-w-4xl">
            {typedLine2}
            <span
                className="inline-block ml-1"
                style={{ animation: 'blink 1s step-end infinite' }}
            >
                |
            </span>
            </p>
        </div>

        {/* Image stays put on the right */}
        <div className="flex-shrink-0 w-[500px] h-[300px] md:h-[400px] mt-8 md:mt-0">
            <img
                src={hero}
                alt="Hero Image"
                width={500}
            height={400}
            loading="eager"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Blinking cursor keyframes */}
        <style>
            {`
            @keyframes blink {
                0%,100% { opacity: 0 }
                50% { opacity: 1 }
            }
            `}
        </style>
        </div>
    );
}
