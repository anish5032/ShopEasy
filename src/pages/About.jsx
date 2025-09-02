import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* -------- HERO ABOUT SECTION -------- */}
      <section className="pt-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Image */}
          <img
            src={assets.about_img}
            alt="about-img"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p>
              Welcome to <span className="font-semibold">ShopEasy</span>, where
              shopping meets simplicity. We curate quality products at
              affordable prices, delivering value straight to your doorstep.
            </p>
            <p>
              Our mission is simple: to make shopping effortless, reliable, and
              enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* -------- WHY CHOOSE US -------- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose ShopEasy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Top Quality</h3>
              <p className="text-gray-600">Every product is carefully selected.</p>
            </div>
            {/* Card 2 */}
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Easy Shopping</h3>
              <p className="text-gray-600">
                Smooth navigation and reliable delivery.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2">Customer First</h3>
              <p className="text-gray-600">
                Friendly support whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------- CTA SECTION -------- */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Shopping Community
          </h2>
          <p className="mb-6 text-lg">
            Get exclusive deals, early access to new arrivals, and a seamless
            shopping experience delivered to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-700 rounded-lg text-gray-900 w-full md:w-2/3"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
