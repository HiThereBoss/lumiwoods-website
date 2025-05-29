import React from 'react'

function InfoCard({ title, desc, src, emoji }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
      {
        emoji ? (
          <div className="text-8xl mb-8">
            {emoji}
          </div>
        ) : (
          src && <img src={src} alt="Info Icon" className="w-16 h-16 mx-auto mb-4" />
        )
      }
        
        <h3 className="text-[18px] md:text-xl font-semibold text-custom-blue mb-2">
        {title}
        </h3>
        <p className="text-custom-blue text-[14px] md:text-[18px]">
        {desc}
        </p>
    </div>
  )
}

export default InfoCard