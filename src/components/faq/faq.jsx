import React, { useState } from 'react';

const FAQ = () => {
  const questions = [
    { question: "What Types Of Events Does Seasoned By Sey Mour Catering Cater To?", answer: "We cater to weddings, corporate events, private parties, and more." },
    { question: "How Can I Request Catering Services From Seasoned By Sey Mour?", answer: "You can contact us through our website or call us at our customer service number." },
    { question: "Does Seasoned By Sey Mour Offer Menu Customization Options?", answer: "Yes, we offer customized menu options to fit your event needs." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8">⭐ Q & A ⭐</h2>
      <div className="max-w-xl mx-auto space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b-2 pb-2">
            <button className="text-left w-full font-semibold text-lg" onClick={() => toggleAnswer(index)}>
              {item.question} <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && <p className="text-gray-600 mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
