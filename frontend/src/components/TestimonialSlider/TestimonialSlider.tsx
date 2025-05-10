import { useState } from "react";
import "./TestimonialSlider.css";

import testimonials from "../../services/testimonials.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TestimonialType } from "../../interface/TestimonialType";

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const testimonial: TestimonialType = testimonials[index];
  return (
    <section className="slider-container">
    
      <FaAngleLeft className="arrow left" size={48} onClick={handlePrev} />
      <div className="testimonial">
        <p className="text">{testimonial.text}</p>
        <div>
          <p className="author">{testimonial.author}</p>
          <p className="company">{testimonial.company}</p>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Selecionar depoimento ${i + 1}`}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="testimonial-image">
        {testimonial.image ? (
          <img src={testimonial.image} alt={`Foto de ${testimonial.author}`} />
        ) : (
          <div className="image-placeholder" />
        )}
      </div>

      <FaAngleRight className="arrow right" size={48} onClick={handleNext} />
    </section>
  );
};

export default TestimonialSlider;
