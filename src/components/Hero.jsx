import { useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import hero from '../assets/images/hero-graphic.png';
import mcmLogo from '../assets/images/McM Logo.png';
import forgeLogo from '../assets/images/Forge.png';

const baseLogos = [mcmLogo, forgeLogo];
const logos = Array(50).fill(baseLogos).flat();

const baseReviews = [
    { text: '“Lumiwoods transformed our classroom atmosphere!”', author: '— Ms. Patel, Grade 3 Teacher' },
    { text: '“My child actually looks forward to mindful breaks now.”', author: '— Parent of 7‑year‑old' },
    { text: '“The app’s interactive activities are both fun and educational.”', author: '— Mr. Thompson, Elementary School Principal' },
    { text: '“Easy to integrate into daily routines, and the kids love it.”', author: '— Ms. Rivera, School Counselor' },
    { text: '“Our mindfulness scores have improved since using Lumiwoods!”', author: '— Dr. Chen, Child Psychologist' },
];
const reviews = Array(5).fill(baseReviews).flat();

export default function Hero() {
    const line1 = 'From Wiggles to Zen Giggles—';
    const fullLine2 = "Calm young minds today, and they'll conquer the storms of tomorrow.";
    const typedLine2 = useTypewriter(fullLine2, 80);

    return (
        <>
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 bg-parchment">
            <div className="flex-1 max-w-5xl space-y-4">
            <p className="text-forestgreen font-extrabold text-[20px] md:text-[30px] lg:text-[50px]">
                {line1}
            </p>
            <p className="text-forestgreen text-[15px] md:text-[20px] lg:text-[40px] max-w-4xl">
                {typedLine2}
                <span className="inline-block ml-1 text-MG-400 blinking-cursor">|</span>
            </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[500px] h-[250px] md:h-[400px] mt-8 md:mt-0">
            <img
                src={hero}
                alt="Hero Graphic"
                width={500}
                height={400}
                loading="eager"
                className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            </div>
        </div>

        {/* Partner logos marquee */}
        <div className="w-full overflow-hidden bg-white py-4">
            <div className="logo-track flex items-center whitespace-nowrap">
            {logos.map((src, i) => (
                <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-12 object-contain mx-6 inline-block"
                />
            ))}
            </div>
        </div>

        {/* Reviews marquee */}
        <div className="w-full overflow-hidden bg-white py-4">
            <div className="reviews-track flex whitespace-nowrap items-center">
            {reviews.map((rev, i) => (
                <div
                key={i}
                className="inline-block mx-6 min-w-[250px] max-w-xs p-6 bg-creamwhite border border-[#E3D6C5] rounded-2xl shadow-md text-center whitespace-normal"
                >
                <p className="italic text-gamebrown mb-2 break-words">{rev.text}</p>
                <p className="text-sm text-forestgreen">{rev.author}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Section anchor */}
        <div id="what-we-offer" />

        {/* Inline styles */}
        <style jsx>{`
            @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
            }
            .blinking-cursor {
            animation: blink 1s step-end infinite;
            }

            @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
            }
            .logo-track {
            animation: scroll 15s linear infinite;
            }

            @keyframes reverse-scroll {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
            }
            .reviews-track {
            animation: reverse-scroll 20s linear infinite;
            }
        `}</style>
        </>
    );
}
