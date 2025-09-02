import React from "react";

const Contact = () => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you. Reach out anytime!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-4 p-6 border rounded-2xl shadow-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h4 className="font-semibold text-lg">📍 Address</h4>
            <p className="text-gray-600">123 Main Street, Kolhapur, India</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">📞 Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">✉️ Email</h4>
            <p className="text-gray-600">support@shopeasy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
