import React from 'react';

const resources = [
    {
        title: 'Mindfulness Lesson Plans',
        description: 'Printable lesson plans and activities to teach mindfulness and emotional learning in the classroom.',
        link: 'https://www.mindful.org/mindfulness-for-kids/',
    },
    {
        title: 'Emotional Intelligence Curriculum',
        description: 'A free, evidence-based EI curriculum designed for grades 1-5.',
        link: 'https://greatergood.berkeley.edu/education/curriculum/emotional_intelligence',
    },
    {
        title: 'Child Psychology Research Articles',
        description: 'Access peer-reviewed articles on child emotional development and coping strategies.',
        link: 'https://scholar.google.com/scholar?q=child+mindfulness',
    },
    {
        title: 'Interactive Breathing Exercises',
        description: 'Free animated breathing exercises and videos suitable for young learners.',
        link: 'https://app.choosemuse.com/breathing-exercises',
    },
    {
        title: 'SEL (Social-Emotional Learning) Toolkit',
        description: 'Comprehensive SEL activities and resources for educators.',
        link: 'https://casel.org/guide/social-and-emotional-learning-toolkit',
    },
];

export default function ForEducators() {
    return (
        <div className="min-h-screen min-w-screen bg-gradient-to-br from-[#f6f4fa] via-[#D7F9ED] to-[#EDEBFA] px-6 pb-20 pt-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#3b2f2f] mb-4">
            Resources for Educators
        </h1>
        <p className="text-center text-[#3b2f2f] text-lg mb-10">
            Curated sources to help teachers integrate Lumiwoods into their classroom.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((res, index) => (
            <a
            key={res.title}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-xl border transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(255,192,203,0.3)] hover:scale-[1.03]"
            style={{
                background: "linear-gradient(135deg, #ffe9d0 0%, #fbe7f0 100%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
            }}
            >
            <h2 className="text-2xl font-semibold text-[#2c3e50] mb-2">
                {res.title}
            </h2>
            <p className="text-[#2c3e50] leading-relaxed">
                {res.description}
            </p>
            </a>
            ))}
        </div>
        </div>
    );
}
