import { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res.products));
  }, []);
  
  return <div>
    {product.map((elm,i)=>{
      return(
        <div className="box" key={i}>
          <img src={elm.images} alt="product" />
          <div className="description">
          <h2>{elm.title}</h2>
          <p> <span> ${elm.price+3}</span> ${elm.price}</p>
          </div>
        </div>
      )
    })}
  </div>;
}

export default Card;
