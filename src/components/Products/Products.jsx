import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../store/selectors/productSelectors";
import { getProductsMiddleWare } from "../../store/reducers/productReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { resetProduct } from "../../store/actions/productActions";

import style from "./Products.module.css";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector(productSelector);
  useEffect(() => {
    dispatch(resetProduct([]));
    dispatch(getProductsMiddleWare());
  }, []);

  return (
    <div className={style.mainProd}>
      {data?.map((elm) => {
        return (
          <div key={elm.id} className={style.products}>
            <img src={elm.images[0]} alt="product" className={style.img} />
            <p className={style.title}>{elm.title}</p>
            <Link to={`/${elm.id}`} className={style.det}>
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
