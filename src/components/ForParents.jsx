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
        <div className="pt-12 px-6 pb-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-MG-700 mb-6">
            Quick Start Guide for Parents
        </h1>
        <p className="text-center text-MG-600 text-lg mb-10">
            Essential resources to help you and your child get the most out of Lumiwoods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentResources.map((res) => (
            <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-peach-100 border border-MG-200 rounded-xl shadow-md hover:shadow-lg transition-shadow hover:border-MG-400"
            >
                <div className="p-6">
                <h2 className="text-2xl text-MG-700 font-semibold mb-2">{res.title}</h2>
                <p className="text-MG-600 leading-relaxed">{res.description}</p>
                </div>
            </a>
            ))}
        </div>
        </div>
    );
}
