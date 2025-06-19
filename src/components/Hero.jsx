import { useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import hero from '../assets/images/hero-graphic.png';

function Hero() {
    const line1 = 'From Wiggles to Zen Giggles—';
    const fullLine2 = "Calm young minds today, and they'll conquer the storms of tomorrow.";
    const typedLine2 = useTypewriter(fullLine2, 80); // 80ms per char

    return (
        <div className="flex flex-col md:flex-row p-8 h-[90vh] pt-30">
        <div className="max-w-5xl ml-5 lg:ml-30 lg:h-[90vh] flex flex-col">
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
        <div>
            <img
            src={hero}
            alt="Hero Image"
            className="w-[500px] mt-8 md:mt-0"
            />
        </div>
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

export default Hero;
