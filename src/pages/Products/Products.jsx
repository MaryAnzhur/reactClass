import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import ProdCategory from "../../components/ProdCategory/ProdCategory";

import "./Products.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  let unique = [];
  data.map((elm) => {
    if (!unique.includes(elm.category)) {
      unique.push(elm.category);
    }
  });

  function filter(value) {
    switch (value) {
      case "All":
        setFilterData(data);
        console.log(2);

        break;
      case "men's clothing":
        setFilterData(
          data.filter((elm) => {
            return elm.category === "men's clothing";
          })
        );
        break;
      case "jewelery":
        setFilterData(
          data.filter((elm) => {
            return elm.category === "jewelery";
          })
        );
        break;
      case "electronics":
        setFilterData(
          data.filter((elm) => {
            return elm.category === "electronics";
          })
        );
        break;
      case "women's clothing":
        setFilterData(
          data.filter((elm) => {
            return elm.category === "women's clothing";
          })
        );
        break;
    }
  }

  return (
    <div className="mainProducts">
      <div className="category">
        <button
          className="btnCategory"
          onClick={(e) => {
            filter(e.target.textContent);
          }}
        >
          All
        </button>
        {unique.map((elm, i) => {
          return <ProdCategory key={i} category={elm} filter= {filter}/>;
        })}
      </div>
      <div className="aaaa">
        {filteredData.map((elm, i) => {
          return (
            <Cards
              key={i}
              image={elm.image}
              title={elm.title}
              price={elm.price}
              category={elm.category}
              id = {elm.id}
            />
          );
        })}
      </div>
    </div>
  );
};
