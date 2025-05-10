import Button from "../Button/Button";
import "./TeachMeet.css";

import Group from "../../assets/images/Col-diversas.png";
import Simbolo from "../../assets/icons/plane-departure.png";
const TeachMeet = () => {
  return (
    <section className="teachMeet-container">
      <div className="left">
        <img src={Group} alt="Group" className="img-group" />
      </div>

      <div className="rights"
     >
        <div className="rights-all">
          <h1 className="title">
            Meet international students & teachers
            <img src={Simbolo} alt="logo" className="right-img" />
          </h1>
        </div>
        <p className="rights-p">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <Button 
         style={{width: "333px"}}
        text="Explore teachers and students" variant={"blue"} showIconarrow />
      </div>
    </section>
  );
};

export default TeachMeet;
