import React from 'react';

const parentResources = [
    {
        title: '📖 5-Minute Mindful Breaks',
        description: 'Printable PDF with short activities designed to calm and refocus kids in just 5 minutes.',
        link: 'https://www.mindful.org/quick-mindful-breaks-for-kids/',
    },
    {
        title: 'Talking About Emotions',
        description: 'Practical tips and conversation starters to help your child label and express their feelings.',
        link: 'https://greatergood.berkeley.edu/article/item/connecting_with_kids_emotions',
    },
    {
        title: '💡 Daily Reflection Journal',
        description: 'Journal templates and prompts to encourage daily emotional check-ins at home.',
        link: 'https://lumiwoods.net/docs/daily-journal-templates.zip',
    },
    {
        title: 'At-Home Breathing Exercises',
        description: 'Video tutorials and guided exercises you can do with your child to build breathing skills.',
        link: 'https://app.choosemuse.com/breathing-exercises',
    },
    {
        title: '👪 Parent Community Forum',
        description: 'Join other parents to share experiences, tips, and support on mindful parenting.',
        link: 'https://community.lumiwoods.net',
    },
];

export default function ParentsPortal() {
    return (
        <div className="min-h-screen px-6 pb-20 pt-16 max-w-7xl mx-auto bg-parchment">
        <h1 className="text-4xl font-extrabold text-center text-gamebrown mb-4">
            Quick Start Guide for Parents
        </h1>
        <p className="text-center text-forestgreen text-lg mb-10">
            Essential resources to help you and your child get the most out of Lumiwoods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {parentResources.map((res) => (
            <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03] border border-[#E3D6C5] hover:border-[#BFA58A] bg-[#FFF9F2]"
                style={{
                boxShadow: '0 8px 20px rgba(108, 79, 61, 0.05)',
                }}
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
