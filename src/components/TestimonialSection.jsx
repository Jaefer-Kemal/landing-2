import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robin Ayala Doe',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    },
    {
      id: 2,
      name: 'John De marli',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },
    {
      id: 3,
      name: 'Rowhan Smith',
      image: 'https://randomuser.me/api/portraits/men/90.jpg',
      text: 'When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      text: 'The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.',
    },
    {
      id: 5,
      name: 'Michael Chen',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: 'Emma Wilson',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          What our happy client say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative">
        {/* swipper cards */}
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
        {testimonials.map((test,index)=> (

          <SwiperSlide key={index} className='h-full md:py-12 py-4'>
            <div className='text-center flex flex-col h-full bg-white p-4 rounded-lg shadow-md'>
                <div className='w-24 h-24 mb-4 mx-auto'>
                    <img className='w-full h-full object-cover rounded-full' src={test.image} alt="people-image" />
                </div>
                <div className='flex mb-2 justify-center '>
                    {[...Array(5)].map((_,startIndex)=> (
                         <span key={startIndex} className="text-blue-600">★</span>
        
                    ))}
                </div>
                <h2 className='font-semibold text-xl mb-3'>{test.name}</h2>
                <p className='text-gray-600'>{test.text}</p>
            </div>
          </SwiperSlide>
        ))}
          
        </Swiper>

        {/* navigational button */}
        <div className="flex justify-center gap-4 mt-4 md:mt-8">
          <button className="swiper-button-prev-custom cursor-pointer transition-all duration-200 size-12 hover:bg-blue-500 hover:text-white justify-center rounded-full border flex border-gray-200 items-center">
            <BsChevronLeft className="size-6" />
          </button>
          <button className="swiper-button-next-custom cursor-pointer transition-all duration-200 size-12 hover:bg-blue-500 hover:text-white justify-center rounded-full border flex border-gray-200 items-center">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
