import Button from "../Button/Button";
import "./AllInOne.css";
import Icons from "../../assets/Icons.png";
import Blob from "../../assets/Blob.png";
import Desktop from "../../assets/Desktop.png";
import service from "../../services/service.json";


import { useState } from "react";
import { ServiceType } from "../../interface/ServiceType";
import CheckItem from "../CheckItem/CheckItem";

const AllInOne = () => {
  const [test] = useState<ServiceType[]>(service);

  if (!test || !test.length) return null;
  return (
    <section className="all-container">
      <div className="left-all">
        <h1 className="title-left">
          <span className="separated">An</span>{" "}
          <span className="all-highlight-underline">all-in-one</span> app that
          makes it easier
        </h1>
        <p className="p">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>

        <CheckItem text="Est et in pharetra magna adipiscing ornare aliquam." />
<CheckItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
<CheckItem text="Ullamcorper ornare in et egestas dolor orci." />
       

        <Button text="Find more about the app" variant={"blue"} showIconarrow />
      </div>
      <div className="image-container">
        <img src={Icons} alt="img1" className="layer layer-2"
         onError={(e) => (e.currentTarget.style.display = "none")}
        />
         <img src={Blob} alt="img2" className="layer layer-1"
          onError={(e) => (e.currentTarget.style.display = "none")} />
      <img src={Desktop} alt="img3" className="layer layer-3"
       onError={(e) => (e.currentTarget.style.display = "none")} />
         <div className="layer layer-4">
          {test.map((item,index) => (
            <div  className={`card ${index === 2 ? "hide-on-mobile" : ""}`} key={item.id}>
              <h6
                style={{
                  backgroundColor: item.color,
                  color: item.textColor,
                }}
              >
                {item.titulo}
              </h6>
              <h2>{item.titlePrincipal}</h2>

              <p className="texto">{item.texto}</p>

              {item.button && <button>{item.button}</button>}
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default AllInOne;
