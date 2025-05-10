import  { useState } from 'react';
import './TestimonialSlider.css';


import testimonials from "../../services/testimonials.json";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { FaAngleLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  };

  return (
    <section className="slider-container">

    <FaAngleLeft
      className="arrow left"
      size={48}
      style={{
        cursor:'pointer',
        color:"#FFFFFF",
        marginRight:"24px"
      }}
      onClick={handlePrev}
      />
      <div className="testimonial">
        <p className="text">{testimonials[index].text}</p>
      <div>
      <p className="author">{testimonials[index].author}</p>
        <p className="company">{testimonials[index].company}</p>

      </div>
      
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
             </div>

      <div className="testimonial-image">
        <img src={testimonials[index].image} alt="testimonial" />
      </div>
 
      <FaAngleRight
     size={48} 
     style={{
      cursor:'pointer',
      color:"#0F172A"
   

    }}
     onClick={handleNext}
      />

   
      
    </section>
  );
};

export default TestimonialSlider;
