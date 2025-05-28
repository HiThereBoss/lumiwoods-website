import React from 'react'

function InfoCard({ title, desc, src }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
        <img
            src={src}
            alt={title}
            className="mx-auto mb-4 h-24 w-24 md:h-32 md:w-32 object-contain"
            />
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