import Button from "../Button/Button";
import "./AllInOne.css";
import Icons from "../../assets/Icons.png";
import Blob from "../../assets/Blob.png";
import Desktop from "../../assets/Desktop.png";
import service from "../../services/service.json";

import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const AllInOne = () => {
  const [test] = useState(service);

  if (!test || !test.length) return null;
  return (
    <section className="all-container">
      <div className="left-all">
        <h1 className="title-left">
          <span className="separated">An</span>{" "}
          <span className="all-highlight-underline">all-in-one</span> app that
          makes it easier
        </h1>

        <p className="p-check">
          <FaCheck size={24} color="#0F172A" />
          Est et in pharetra magna adipiscing ornare aliquam.
        </p>
        <p className="p-check">
          <FaCheck size={24} color="#0F172A" />
          Tellus arcu sed consequat ac velit ut eu blandit.
        </p>
        <p className="p-check">
          <FaCheck size={24} color="#0F172A" />
          Ullamcorper ornare in et egestas dolor orci.
        </p>

        <Button text="Find more about the app" variant={"blue"} showIconarrow />
      </div>
      <div className="image-container">
        <img src={Icons} alt="img1" className="layer layer-2" />
        <img src={Blob} alt="img2" className="layer layer-1" />
        <img src={Desktop} alt="img3" className="layer layer-3" />
        <div className="layer layer-4">
          {test.map((item) => (
            <div className="card" key={item.id}>
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

              <button>{item.button}</button>
            </div>
          ))}
        </div>

        {/* <img src="/images/img4.png" alt="img4" className="layer layer-4" /> */}
      </div>
    </section>
  );
};

export default AllInOne;
