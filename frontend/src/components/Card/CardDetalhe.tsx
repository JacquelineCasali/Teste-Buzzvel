import { TestimonialTypeCard } from "../../interface/TestimonialTypeCard";


interface CardDetalheProps {
  data: TestimonialTypeCard;
}

export default function CardDetalhe({ data }: CardDetalheProps) {
  const { name,  text, image,position } = data;

  return (
    <>

      <p className="carrosel-text">{text}</p>

      <div className="user-card">
        <div className="image">
          {image && <img src={image} alt={name} />}
        </div>
        <div className="detalis">
          <span className="nome">{name}</span>
          <span className="categoria">{position}</span>
        </div>
      </div>
    </>
  );
}
