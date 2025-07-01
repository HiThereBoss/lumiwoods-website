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
        <div className="min-h-screen px-6 pb-20 pt-16 max-w-7xl mx-auto bg-parchment">
        <h1 className="text-4xl font-extrabold text-center text-gamebrown mb-4">
            Resources for Educators
        </h1>
        <p className="text-center text-forestgreen text-lg mb-10">
            Curated sources to help teachers integrate Lumiwoods into their classroom.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((res) => (
            <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03] bg-[#FFF9F2] border border-[#E3D6C5] hover:border-[#BFA58A]"
            >
                <h2 className="text-2xl font-semibold text-forestgreen mb-2">
                {res.title}
                </h2>
                <p className="text-gamebrown leading-relaxed">
                {res.description}
                </p>
            </a>
            ))}
        </div>
        </div>
    );
}

