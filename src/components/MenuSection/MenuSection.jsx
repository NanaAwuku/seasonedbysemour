import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-1" },
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-2" },
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-3" },
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-4" },
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-5" },
    { title: "Appetizer", description: "Crispy Fries, Creamy Spinach And More To Kickstart Your Meal", image: "image-url-6" },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8">⭐ What's On The Menu ⭐</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
