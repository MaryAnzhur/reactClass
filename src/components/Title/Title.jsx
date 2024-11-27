import { forTitle } from "../../constants/groups";

import "./Title.css";

function Title() {
  return (
    <div className="mainTitle">
      {forTitle.map((elm) => (
        <p className="titleP">{elm}</p>
      ))}
    </div>
  );
}

export default Title;
