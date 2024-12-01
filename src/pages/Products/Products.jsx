import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";

import "./Products.css";

export const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res.products));
  }, []);
  return (
    <div className="mainProd">
      {product.map((elm) => {
        return (
          <Card
            id={elm.id}
            image={elm.images}
            title={elm.title}
            price={elm.price}
            category={elm.category}
          />
        );
      })}
    </div>
  );
};
