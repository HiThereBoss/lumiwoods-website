import ProfileCard from "./ProfileCard"

function About() {
  return (
    <div className="pt-12">
      <ProfileCard 
        name= "Aditi Gangal"
        bio = "Hi, I’m Aditi — a student in the Faculty of Health Sciences at McMaster University, and the founder and CEO of ZenKids. I created ZenKids because I believe there’s a real need to help young children learn about mindfulness and emotional intelligence in a fun, accessible way. With so many kids facing stress at an early age, my goal is to give them tools to better understand and manage their emotions — starting young, when it matters most. A fun fact about me is that I believe a good movie night can solve almost anything!"
      />
      <ProfileCard 
        name= "Emre Bozkurt"
        bio = "I'm Emre Bozkurt, a Computer Science student at McMaster University, and I am the Chief Technical Officer of ZenKids. I am in charge of developing the game- ZenKids, and our website. I am passionate about and experienced in game development, and joining ZenKids has given me the opportunity to grow my skill-set as both a leader and developer in a professional setting. I truly believe in enjoying the work that you do- and putting my skills to use to help kids on a global scale is a genuine motivating factor, no matter the challenges I may face throughout the process."
      />
      <ProfileCard 
        name= "Yashasvi Seth"
        bio = "Hi, I’m Yashasvi Seth — a Computer Science student at McMaster University and the Chief Operating Officer of ZenKids. I joined ZenKids because I’m passionate about using technology and creativity to make a positive impact on children’s mental well-being. With more kids experiencing stress from a young age, I believe it’s crucial to equip them with the tools to understand and manage their emotions early on — and ZenKids does just that in a fun and engaging way. A fun fact about me: I think coding and a good cup of chai can fix almost any problem!"
      />
      <ProfileCard 
        name= "Tasneem Kanshwala"
        bio = ""
      />
    </div>
  )
}

export default About