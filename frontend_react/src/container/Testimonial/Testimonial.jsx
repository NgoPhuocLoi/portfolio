import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialQuery = `*[_type == "testimonials"]`;
    const brandQuery = `*[_type == "brands"]`;

    const testimonialData = client.fetch(testimonialQuery);
    const brandsData = client.fetch(brandQuery);

    Promise.all([testimonialData, brandsData]).then((data) => {
      setTestimonials(data[0]);
      setBrands(data[1]);
    });
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          {console.log(testimonials)}
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(currentTestimonial.imgUrl)}
              alt="testimonial-img"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{currentTestimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                setCurrentIndex((prev) =>
                  currentIndex === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                setCurrentIndex((prev) =>
                  currentIndex === testimonials.length - 1 ? 0 : prev + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map(brand => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5, type: "tween"}}
            key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
