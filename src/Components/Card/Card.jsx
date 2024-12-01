import { Link } from "react-router-dom";

import "./Card.css";
import ROUTES from "../../Routes";

function Card({ id, image, title, price, category }) {
  return (
    <div className="box" key={id}>
      <img src={image} alt="product" />
      <div className="description">
        <h2 className="title">{title}</h2>
        <p className="price">
          {" "}
          <span> ${(price + 1.2).toFixed(2)}</span> ${price}
        </p>
        <Link to={`/${ROUTES.PRODUCTS}/${category}/${id}`} className="more">
          More...
        </Link>
      </div>
    </div>
  );
}

export default Card;
