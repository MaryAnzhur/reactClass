import BoxSec1 from "../BoxSec1/BoxSec1";
import {reputationData} from "../../constants/data";

import "./SecOne.scss";

function SecOne() {
  return (
    <div className="container">
      <div className="mainS1">
        <p className="mainTitle">Our Reputation</p>
        <div className="boxes">
          {reputationData.map((elm) => (
            <BoxSec1 src={elm.image} title={elm.title} text={elm.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecOne;
