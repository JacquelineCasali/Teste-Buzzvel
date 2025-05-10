import Button from "../Button/Button";
import "./Join.css";

import Cards from "../../assets/images/Cards.png";
import CardsRound from "../../assets/images/Cards Round.png";
const Join = () => {
  return (
    <section className="Join-container">
    <img src={Cards} alt="Cards" className="img-group-cards" />

    <div className="testes">
    <h1 className="title-join">
    Join a world of learning
        </h1>
        <p className="join">
        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
Risus elit et fringilla habitant ut facilisi.
        </p>
    <Button text="Sign Up Now" variant={"primary"} />
    </div>
    <img src={CardsRound} alt="CardsRound" className="img-group-cards" />
     
    </section>
  );
};

export default Join;
