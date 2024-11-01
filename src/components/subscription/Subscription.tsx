import React from 'react';

const SubscriptionSection = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-xl font-semibold mb-4">KEEP UP TO DATE WITH SEASONED BY SEY MOUR CATERING</h2>
      <p className="text-gray-600 mb-4">Be the first to signup and receive special news from Seasoned By Sey Mour Catering.</p>
      <form className="flex justify-center">
        <input type="email" placeholder="Email Address..." className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" />
        <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-r-md">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscriptionSection;
