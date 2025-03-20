'use client'

import React, { useState } from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is this platform about?',
      answer: 'This platform helps users get timely reminders for job applications and assessments.',
    },
    {
      question: 'How do I set up notifications?',
      answer: 'Click on the "Set Up Notifications" button and customize your alert preferences.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use the latest encryption standards to ensure your data is safe and secure.',
    },
    {
      question: 'Can I customize my alerts?',
      answer: 'Absolutely! You can choose when and how you want to be notified.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 mt-5 mb-5">
      <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition duration-200 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;