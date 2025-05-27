import ProfileCard from "./ProfileCard"
import { profiles } from "@/data/data"

function About() {
  return (
    <div className="pt-12 flex flex-col pb-50">
      <div>
        <h1 className="text-4xl text-custom-blue text-center font-bold mb-8">About Us</h1>
      </div>
      <div className="flex flex-row justify-center">
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            bio={profile.bio}
            style={{ animationDelay: `${idx * 0.1}s` }} // 0.1s delay between cards
          />
        ))}
      </div>
      
    </div>
  )
}

export default About