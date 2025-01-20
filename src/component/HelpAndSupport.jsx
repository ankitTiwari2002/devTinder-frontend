import React from "react";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const HelpAndSupport = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-16 text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          Help & Support
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Need assistance? We're here to help. Explore our support options below
          to get your questions answered quickly.
        </p>

        {/* Support Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaQuestionCircle className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">FAQs</h2>
            <p className="text-gray-400 text-center mt-2">
              Find answers to the most common questions.
            </p>
            <div className="text-center mt-4">
              <a href="/faqs" className="text-blue-400 hover:underline text-sm">
                Visit FAQs
              </a>
            </div>
          </div>

          {/* Email Support Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Email Support</h2>
            <p className="text-gray-400 text-center mt-2">
              Drop us an email and we’ll get back to you within 24 hours.
            </p>
            <div className="text-center mt-4">
              <a
                href="mailto:support@yourapp.com"
                className="text-blue-400 hover:underline text-sm"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Call Support Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <FaPhoneAlt className="text-4xl text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Call Support</h2>
            <p className="text-gray-400 text-center mt-2">
              Speak with our support team for urgent queries.
            </p>
            <div className="text-center mt-4">
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline text-sm"
              >
                Call Now: +123-456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Live Chat Section */}
        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FaHeadset className="text-4xl text-blue-400 mr-4" />
            <h2 className="text-2xl font-bold text-blue-400">
              Live Chat Support
            </h2>
          </div>
          <p className="text-gray-300 mb-6">
            Connect with a live agent for real-time assistance. Click the button
            below to start a chat session.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Start Live Chat
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-bold text-blue-400 mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-400">
            You can always reach us via email at{" "}
            <a
              href="mailto:support@devtinder.com"
              className="text-blue-400 hover:underline"
            >
              support@devtinder.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">
              +123-456-7890
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
