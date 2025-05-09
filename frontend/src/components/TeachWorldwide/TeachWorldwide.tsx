import Button from "../Button/Button";
import "./TeachWorldwide.css";
import vetor from "../../assets/icons/vetor.png";
import vetor2 from "../../assets/icons/vetor2.png";
import vetor3 from "../../assets/icons/vetor3.png";
import vetor4 from "../../assets/icons/vetor4.png";
import vetor5 from "../../assets/icons/vetor5.png";
import Group from "../../assets/Group 50.png";

const TeachWorldwide = () => {
  return (
    <section className="teach-container">
      <div className="left">
        <h1 className="title">
          <span className="highlight-underline">Teach</span> students worldwide
        </h1>
        <p>
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>

        <div className="buttons">
          <Button text="Sign Up Now" variant={"primary"} />
          <Button text="View Demo" variant={"secondary"} showIcon />
        </div>
        <div className="trusted">
          <p>
            Trusted by
            <span className="block-text">industry companies:</span>
          </p>

          <div className="trusted-icon">
            <img src={vetor} alt="vetor" className="icons" />
            <img src={vetor2} alt="vetor" className="icons" />
            <img src={vetor3} alt="vetor" className="icons" />
            <img src={vetor4} alt="vetor" className="icons" />
            <img src={vetor5} alt="vetor" className="icons" />
          </div>
        </div>
      </div>

      <div className="right">
        <img src={Group} alt="Group" className="img-group" />
      </div>
    </section>
  );
};

export default TeachWorldwide;
