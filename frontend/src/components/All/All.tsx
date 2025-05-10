import Button from "../Button/Button";
import "./All.css";

import Right from "../../assets/images/Right.png";

const All = () => {
  return (
    <section className="alls-container">
      <div className="left-alls">
        <h1 className="title-left">
          All the cool <span className="all-highlight-underline">features</span>
        </h1>
        <p>
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>

        <Button text="Find more about the app" variant={"blue"} showIconarrow />
      </div>
        <img src={Right} alt="Right" className="img-group" />
   
    </section>
  );
};

export default All;
