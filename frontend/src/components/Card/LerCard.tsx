import { useEffect } from "react";
import { TestimonialTypeCard } from "../../interface/TestimonialTypeCard";
import CardDetalhe from "./CardDetalhe";
import "./Ler.css";

interface LerCardProps {
  test: TestimonialTypeCard;
  onSair: () => void;
}

export default function LerCard({ test, onSair }: LerCardProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

 
  return (
    <div className="background">
      <div className="modals">
        <div className="detalhe-image">
          <div className="x" onClick={onSair}>x</div>
          <div className="text-modal">
            <CardDetalhe data={test} />
          </div>
        </div>
      </div>
    </div>
  );
}
