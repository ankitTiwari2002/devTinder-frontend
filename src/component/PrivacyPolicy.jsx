import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white py-10 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">
            Your privacy is important to us. Please read this policy carefully
            to understand how we handle your data.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-10 p-6 bg-gray-800 shadow-lg rounded-lg">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300">
            At DevTinder, we are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            1. Information We Collect
          </h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, etc., provided during account creation.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our app (e.g., pages visited, time spent).
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type, and
              device settings.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-300">We use your data to:</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Provide and maintain our services.</li>
            <li>Improve user experience and app functionality.</li>
            <li>Send important notifications and updates.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            3. Sharing Your Information
          </h3>
          <p className="text-gray-300">
            We do not share your personal information with third parties,
            except:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>When required by law or government authorities.</li>
            <li>With service providers who assist in operating our app.</li>
            <li>To protect our rights, safety, or the rights of others.</li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            4. Cookies and Tracking
          </h3>
          <p className="text-gray-300">
            Our app uses cookies and similar tracking technologies to improve
            user experience. You can manage or disable cookies through your
            browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            5. Data Security
          </h3>
          <p className="text-gray-300">
            We take reasonable measures to protect your data from unauthorized
            access, alteration, or disclosure. However, no system is completely
            secure, and we cannot guarantee the security of your data.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            6. Your Rights
          </h3>
          <p className="text-gray-300">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Access, update, or delete your personal information.</li>
            <li>
              Withdraw your consent for data processing (where applicable).
            </li>
            <li>File a complaint with a data protection authority.</li>
          </ul>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            7. Changes to This Policy
          </h3>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We encourage
            you to review it periodically. Continued use of our app constitutes
            acceptance of the revised policy.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            8. Contact Us
          </h3>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="text-gray-400 mt-2">
            <li>
              Email:{""}
              <a
                href="mailto:support@devtinder.com"
                className="text-blue-400 underline hover:text-blue-500"
              >
                support@devtinder.com
              </a>
            </li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </section>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-8">
          Last updated: [Insert Date]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
