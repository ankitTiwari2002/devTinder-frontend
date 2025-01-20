import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import RefundPolicy from "./RefundPolicy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Branding */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">DevTinder</h1>
            <p className="text-gray-400 text-sm">
              Empowering connections and experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contactUs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="privacy-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400">
                  Email:{" "}
                  <a
                    href="mailto:support@yourbrand.com"
                    className="hover:text-white transition"
                  >
                    support@devtinder.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-400">Phone: +123-456-7890</p>
              </li>
              <li>
                <p className="text-gray-400">Address: Indore, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DevTinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
