import React from 'react';

const LatestBlog = () => {
  const blogPosts = [
    { title: "Seasonal Recipe Showcase", description: "From comforting winter soups to refreshing summer salads...", image: "blog-image-1" },
    { title: "Trendy Food Pairing", description: "Discover the best food pairings for any occasion...", image: "blog-image-2" },
    { title: "Event Showcase Tips and Tricks", description: "Learn tips and tricks for a memorable event...", image: "blog-image-3" },
    { title: "Spotlight on Local Ingredients", description: "Explore the benefits of sourcing local ingredients...", image: "blog-image-4" },
    { title: "Culinary Travel Adventures", description: "A journey through culinary travel experiences...", image: "blog-image-5" },
    { title: "A Day in the Life of a Private Chef", description: "Experience a day in the life of a private chef...", image: "blog-image-6" },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8">⭐ Latest Blog ⭐</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold text-white">{post.title}</h3>
              <p className="text-sm text-white mb-4">{post.description}</p>
              <button className="text-yellow-300 font-semibold">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
