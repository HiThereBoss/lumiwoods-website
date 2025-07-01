import React, { useState } from 'react';

// FAQ entries
const faqs = [
    {
        question: 'How do I get started with Lumiwoods?',
        answer: 'Simply sign up for an account, download the app, and follow the Quick Start Guide under the Parents Portal.',
    },
    {
        question: 'Which ages is Lumiwoods suitable for?',
        answer: 'Our activities are designed for children aged 4–12, but parents can adjust difficulty as needed.',
    },
    {
        question: 'Can teachers track student progress?',
        answer: 'Yes! In the For Educators portal, teachers can see class-wide engagement stats and assign exercises.',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'We offer a 14-day free trial for all new users—no credit card required.',
    },
    {
        question: 'Is Lumiwoods safe for kids in terms of privacy?',
        answer: 'Absolutely. We comply with COPPA and GDPR, and never share personal data without consent.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div id="faq" className="w-full px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-MG-800 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-MG-200">
                <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                <span className="font-semibold text-lg text-MG-800">{faq.question}</span>
                <span
                    className={`transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                >
                    ▼
                </span>
                </button>
                {openIndex === idx && (
                <div className="px-4 pb-4 text-MG-600">
                    {faq.answer}
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}
