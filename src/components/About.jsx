import React from 'react';
import logo from '../assets/images/Bunny.png';
import { profiles } from "../data/data";

function ProfileCard({ name, bio, image, style }) {
  return (
    <div
      className="flex flex-col my-5 mx-10 w-[300px] items-center animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{
        background: "linear-gradient(205deg, #ffe9d0 0%, #fbe7f0 100%)",
        backgroundSize: "200% 200%",
        backgroundPosition: "center",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
        borderRadius: "1rem",
        ...style,
      }}
    >
      <div className="h-[200px] w-full flex items-center justify-center p-2">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full mt-5 px-3">
        <h3 className="text-gamebrown text-center font-extrabold text-[30px] font-main-bold">
          {name}
        </h3>
        <p className="text-[15px] mt-3 text-center font-main text-forestgreen">
          {bio}
        </p>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <div className="bg-gradient-to-br from-parchment via-lumint to-skyblush pt-12 pb-20 flex flex-col">
      <div>
        <h1 className="text-4xl text-center font-bold text-gamebrown mb-8">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            bio={profile.bio}
            image={profile.image}
            style={{ animationDelay: `${idx * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
