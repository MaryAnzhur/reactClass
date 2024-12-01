import { useState } from "react";
import "./ProdCategory.css";

function ProdCategory({ category, filter }) {
  return (
    <div className="mainCategory">
      <button
        className="btnCategory"
        onClick={(e) => {
          filter(e.target.textContent);
        }}
      >
        {category}
      </button>
    </div>
  );
}

export default ProdCategory;
