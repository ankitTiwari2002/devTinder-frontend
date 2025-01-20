import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is DevTinder?",
      answer:
        "It is a platform designed to connect with multiple developer, communities and provide a space for developers to share their knowledge and experiences.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, and other payment methods supported by Razorpay.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact us via email at support@devtinder.com or call us at +123-456-7890.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">FAQs</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400">
                {faq.question}
              </h3>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
