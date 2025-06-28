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
        <div className="min-h-screen min-w-screen bg-gradient-to-br from-[#f6f4fa] via-[#D7F9ED] to-[#EDEBFA] px-6 pb-20 pt-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#3b2f2f] mb-4">
            Quick Start Guide for Parents
        </h1>
        <p className="text-center text-[#3b2f2f] text-lg mb-10">
            Essential resources to help you and your child get the most out of Lumiwoods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentResources.map((res) => (
            <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-orange-200 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                style={{
                    background: "linear-gradient(135deg, #ffe9d0 0%, #fbe7f0 100%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "center",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
                }}
            >
                <h2 className="text-2xl font-semibold text-[#2c3e50] mb-2">{res.title}</h2>
                <p className="text-[#2c3e50] leading-relaxed">{res.description}</p>
            </a>
            ))}
        </div>
        </div>
    );
}
