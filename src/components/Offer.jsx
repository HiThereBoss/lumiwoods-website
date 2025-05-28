import React from 'react'

function offer() {
  return (
    <div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">

                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <img
                        src='./src/assets/images/logo.png'
                        alt="Interactive Gameplay"
                        className="mx-auto mb-4 h-32 w-32 object-contain"
                        />
                    <h3 className="text-xl font-semibold text-custom-blue mb-2">
                    Interactive Gameplay
                    </h3>
                    <p className="text-custom-blue text-[18px]">
                    The gameplay is designed to relax and engage children in a fun way
                    through calming mini-games and in-game rewards that make them feel accomplished.
                    </p>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <img
                        src='./src/assets/images/logo.png'
                        alt="Interactive Gameplay"
                        className="mx-auto mb-4 h-32 w-32 object-contain"
                        />
                    <h3 className="text-xl font-semibold text-custom-blue mb-2">
                    Progress Tracking
                    </h3>
                    <p className="text-custom-blue text-[18px]">
                    The app allows parents and caregivers to track the child's
                    progress and see how they are responding to the activities.
                    This helps us to tailor the experience to each child's needs
                    and personalise their journey of building emotional resilience.
                    </p>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                    <img
                        src='./src/assets/images/logo.png'
                        alt="Interactive Gameplay"
                        className="mx-auto mb-4 h-32 w-32 object-contain"
                        />
                    <h3 className="text-xl font-semibold text-custom-blue mb-2">
                    Soothing soundtracks 
                    </h3>
                    <p className="text-custom-blue text-[18px]">
                    The music and nature sounds used in the app help reduce stress and relax the mind of the user.
                    The soundtracks are carefully selected to create a calming atmosphere for the children and patients.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default offer