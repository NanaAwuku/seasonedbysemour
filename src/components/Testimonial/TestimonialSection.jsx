import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily K.",
      feedback: "Absolutely loved the food and service provided by Seasoned By Sey Mour! Our guests couldn't stop raving about the delicious dishes.",
      image: "customer-image-1",
    },
    {
      name: "Michael T.",
      feedback: "Chef Sey Mour and his team exceeded our expectations. Their attention to detail and dedication to excellence made our event truly memorable.",
      image: "customer-image-2",
    },
    {
      name: "Sophia L.",
      feedback: "From start to finish, Seasoned By Sey Mour Catering delivered exceptional service and top-notch cuisine. Highly recommend!",
      image: "customer-image-3",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-8">⭐ What Customers Are Saying About Us ⭐</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-xs text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-600 italic mb-2">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
