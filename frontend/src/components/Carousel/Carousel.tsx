import { useRef } from "react";
import "./Carousel.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import CardDetalhe from "../Card/CardDetalhe";

import { TestimonialTypeCard } from "../../interface/TestimonialTypeCard";
import { scrollCarousel } from "../../utils/scrollCarousel";

interface CarouselProps {
  test: TestimonialTypeCard[];
  onLer: (id: number) => void;
}

export default function Carousel({ test, onLer }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null);

  const handleLeftClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const container = carousel.current;
    if (!container) return;
    scrollCarousel(container, "left");
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const container = carousel.current;
    if (!container) return;
    scrollCarousel(container, "right");
  };


  if (!test.length) return null;

  return (
    <section className="section">
      <div className="tops">
        <h1>Make something awesome</h1>

        <div className="setas">
          <BsArrowLeftCircle
            onClick={handleLeftClick}
            size={48}
            color="#FCD34D"
            className="seta"
            aria-label="Scroll para a esquerda"
            role="button"
       
          />
          <BsArrowRightCircle
            onClick={handleRightClick}
            size={48}
            color="#FCD34D"
            className="seta"
             aria-label="Scroll para a direita"
            role="button"
            
          />
        </div>
      </div>

      <div className="carousel" ref={carousel}>
        {test.map((item) => (
          <div className="item" key={item.id} onClick={() => onLer(Number(item.id))}>
            <CardDetalhe data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
