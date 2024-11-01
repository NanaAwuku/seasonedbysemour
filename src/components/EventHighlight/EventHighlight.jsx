import React from 'react';

const EventHighlights = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8">⭐ Event Highlights ⭐</h2>
      <div className="relative max-w-3xl mx-auto">
        <img src="event-highlight-image-url" alt="Event Highlight" className="w-full h-auto rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4 rounded-lg">
          <div>
            <h3 className="text-lg font-bold">Wedding Extravaganza</h3>
            <p className="text-sm">A Fairy-Tale Wedding Brought To Life. Every Detail Was Carefully Curated For A Truly Magical Celebration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
