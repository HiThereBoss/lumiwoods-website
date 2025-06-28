import { infoCards } from "../data/data"
import { motion } from "framer-motion"
import React from 'react'

export default function Info() {
  // Local InfoCard component (no need to import it anymore)
    const InfoCard = ({ title, desc, src, emoji }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="border border-MG-200 rounded-2xl p-6 text-center transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(255,192,203,0.3)] hover:scale-[1.03]"
            style={{
                background: "linear-gradient(135deg, #ffe9d0 0%, #fbe7f0 100%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",}}
        >
        {
            emoji ? (
            <div className="text-8xl mb-8 drop-shadow-sm">{emoji}</div>
            ) : (
            src && <img src={src} alt="Info Icon" className="w-16 h-16 mx-auto mb-4" />
            )
        }
        <h3 className="text-[18px] md:text-xl font-semibold text-MG-700 mb-2">
            {title}
        </h3>
        <p className="text-MG-600 text-[14px] md:text-[18px]">
            {desc}
        </p>
        </motion.div>
    );

    return (
        <div className='flex flex-col 2xl:flex-row p-8 lg:h-[90vh] justify-center'>
        <div className='flex flex-col max-w-5xl mt-10 ml-5 lg:ml-20 xl:max-w-xl xl:justify-center'>
            <p className='text-MG-700 text-[15px] lg:text-[30px] font-main'>
            At Lumiwoods, we're on a mission to help children manage stress and anxiety
            through a science-backed mobile game designed with specific attention to their needs.
            </p>
        </div>

        <div className='flex flex-col items-center md:p-8 xl:pt-0'>
            <h3 className='text-MG-800 font-extrabold text-[30px] lg:text-[50px] font-main-bold mt-4 xl:mt-0 xl:pt-0'>
            What we offer
            </h3>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
            {infoCards.map((card, idx) => (
                <InfoCard
                key={idx}
                title={card.title}
                desc={card.desc}
                src={card.src}
                emoji={card.emoji}
                />
            ))}
            </div>
        </div>
        </div>
    );
}
