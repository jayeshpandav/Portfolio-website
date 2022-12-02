import React from "react";
import "./testimonials.css";
import man from "../../assets/man.png";

/// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonials_data = [
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
    {
      image: man,
      name: "Lorem ipsum",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate pariatur repellendus commodi voluptates voluptatum quibusdam, odio numquam tempore, minima ducimus dolorum quidem ipsam officiis ab qui quo natus quam.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonial_container"
      >
        {testimonials_data.map(({ id, image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial_item">
              <div className="testimonial_item-image">
                <img src={image} alt={name} />
              </div>
              <h2>{name}</h2>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
