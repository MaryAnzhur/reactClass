import BoxService from "../BoxService/BoxService";
import { serviceData } from "../../constants/data";

import "./SecTwo.scss";

function SecTwo() {
  return (
    <div className="container">
      <div className="secTwo">
        <p className="mainTitle">Services</p>
        <div className="boxes">
          {serviceData.map((elm) => (
            <BoxService icon={elm.image} row={elm.line} text={elm.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecTwo;
