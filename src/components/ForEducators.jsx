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
        <div className="pt-12 px-6 pb-12 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-MG-800 mb-6">
                Resources for Educators
            </h1>
            <p className="text-center text-MG-600 text-lg mb-10">
                Curated sources to help teachers integrate Lumiwoods into their classroom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((res) => (
                    <a
                        key={res.title}
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 bg-mint-100 border border-MG-200 rounded-xl shadow-md hover:shadow-lg transition-shadow hover:border-MG-400"
                    >
                        <h2 className="text-2xl text-MG-700 group-hover:text-MG-800 font-semibold mb-2">{res.title}</h2>
                        <p className="text-MG-600 leading-relaxed">{res.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
