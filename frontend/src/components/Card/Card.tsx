import { useEffect, useState } from "react";

import { TestimonialTypeCard } from "../../interface/TestimonialTypeCard";

import depoimento from "../../services/depoimento.json";

import Carousel from "../Carousel/Carousel";
import LerCard from "./LerCard";

import Loading from "../Loading/Loading";
export default function Card() {
  
  const [ler, setLer] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const test: TestimonialTypeCard[] = depoimento;
  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLer = (id: number) => {
    setLer(id);
    setOpen(true);
  };

  const handleSair = () => {
    setOpen(false);
  };

  const selected = test.find((data) => data.id === ler);

  return (
    <>
      {open && selected ? (
        loading ? <Loading /> : <LerCard test={selected} onSair={handleSair} />
      ) : (
        loading ? <Loading /> : <Carousel test={test} onLer={handleLer} />
      )}
    </>
  );
}
