import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ROUTES from "../../Routes";

import "./Product.css";

export function Product() {
  const { id, category } = useParams();
  const [each, setEach] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setEach([res]));
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="mainProduct">
      <span
        className="material-symbols-outlined left"
        onClick={() =>
          navigate(
            +id === 1
              ? `/${ROUTES.PRODUCTS}/${category}/20`
              : `/${ROUTES.PRODUCTS}/${category}/${+id - 1}`
          )
        }
      >
        arrow_back_ios
      </span>
      {each.map((elm) => {
        return (
          <div key={elm.id} className="mainBox">
            <img src={elm.image} alt="product" />
            <div className="data">
              <h2>{elm.title}</h2>
              <h3>
                Category: <span className="cat">{elm.category}</span>
              </h3>
              <p>{elm.description}</p>
              <p className="price">${elm.price}</p>
            </div>
          </div>
        );
      })}
      <span
        className="material-symbols-outlined right"
        onClick={() =>
          navigate(
            +id === 20
              ? `/${ROUTES.PRODUCTS}/${category}/1`
              : `/${ROUTES.PRODUCTS}/${category}/${+id + 1}`
          )
        }
      >
        arrow_forward_ios
      </span>
    </div>
  );
}
