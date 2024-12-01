import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Product.css";

function Product() {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProd(res.products));
  }, []);

  const productData = prod.filter((elm) => elm.id === Number(id));

  console.log(productData);

  return (
    <div>
      {productData.map((elm) => {
        return (
          <div key={elm.id} className="mainProduct">
            <img src={elm.images} alt="" />
            <div className="description">
              <h2>{elm.title}</h2>
              <p>{elm.description}</p>
              <p><b>Brand:</b> {elm.brand}</p>
              <p><b>Category:</b> {elm.category}</p>
              <div className="details">
              <p><b>Availability:</b> {elm.availabilityStatus}</p>
              <p><b>In stock:</b> {elm.stock}</p>
              <p><b>Warranty:</b> {elm.warrantyInformation}</p>
              <p><b>Returning policy:</b> {elm.returnPolicy}</p>
              <p><b>Shipping:</b> {elm.shippingInformation}</p>
              <p><b>Weight:</b>{elm.weight}</p>
              </div>
              <h3>${elm.price}</h3>
              <h4><b>Rate:</b> {elm.rating}</h4>
            </div>
          </div>
        );
      })}

      {/* <img src={productData.id} alt="product" /> */}
      {/* <div className="discription">
    <h2>{productData.title}</h2>
    <h3>Category: {productData.category}</h3>
</div> */}
    </div>
  );
}

export default Product;
