import React from 'react'

function InfoCard({ title, desc, src, emoji }) {
  return (
    <div className="bg-MG-50 border border-MG-200 shadow-md rounded-2xl p-6 text-center transition-all hover:shadow-lg">
      {
        emoji ? (
          <div className="text-8xl mb-8 drop-shadow-sm">
            {emoji}
          </div>
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
    </div>
  )
}

export default InfoCard