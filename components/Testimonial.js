import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    quote: 'This platform helped me land my dream job. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    quote: 'The reminders are always on time, ensuring I never miss an opportunity.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Alice Brown',
    role: 'Data Scientist',
    quote: 'A game-changer for job seekers. The experience was seamless.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
