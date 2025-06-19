import React from 'react';
import ProfileCard from "./ProfileCard"
import { profiles } from "@/data/data"

export default function About() {
  return (
    <div className="pt-12 pb-50 flex flex-col">
      <div>
        <h1 className="text-4xl text-custom-blue text-center font-bold mb-8">About Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            bio={profile.bio}
            style={{ animationDelay: `${idx * 0.1}s` }} // Optional animation
          />
        ))}
      </div>
    </div>
  );
}
