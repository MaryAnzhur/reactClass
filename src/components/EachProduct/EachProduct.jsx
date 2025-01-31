import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productSelector } from "../../store/selectors/productSelectors";
import { useEffect, useState } from "react";
import {
  delProductMiddleWare,
  getProductsMiddleWare,
} from "../../store/reducers/productReducer";
import ROUTES from "../../Routes";
import { editProduct } from "../../store/actions/productActions";

import style from "./EachProduct.module.css";

const EachProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProductsMiddleWare());
  }, []);

  const filteredData = data?.filter((elm) => elm.id == id);
  const navigate = useNavigate();
  const [input, setInput] = useState(false);

  return (
    <div className={style.main}>
      <Link to={ROUTES.PRODUCTS} className={style.link}><img className={style.prev} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKz9BmJrvLJCsm_NHf9ZqZSApGpKZW6fipw&s" alt="home_page" /></Link>
      <div className={style.product}>
        <button
          className={style.edit}
          onClick={() => {
            setInput(!input);
          }}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/edit-icon-1024x1024-u3a8q4uh.png"
            alt="edit"
            className={style.editImg}
          />
        </button>
        <button
          className={style.del}
          onClick={() => {
            navigate(ROUTES.PRODUCTS, { reset: true });
            dispatch(delProductMiddleWare(id));
          }}
        >
          X
        </button>
        <div className={style.imgDiv}>
          <img
            src={filteredData[0]?.images[0]}
            alt="photoOfProducts"
            className={style.img}
          />
          <img
            src={filteredData[0]?.images[1]}
            alt="photoOfProducts"
            className={style.img}
          />
          <img
            src={filteredData[0]?.images[2]}
            alt="photoOfProducts"
            className={style.img}
          />
        </div>
        <div className={style.details}>
          <h2>{filteredData[0]?.title}</h2>
          <p>{filteredData[0]?.description}</p>
          <h4>$ {filteredData[0]?.price}</h4>
          {input ? (
            <form
              className={style.form}
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(editProduct({ id: id, price: e.target[0].value }));
                e.target[0].value = "";
                setInput(!input);
              }}
            >
              <input type="text" placeholder="new price" id="newPrice" />
              <input type="submit" value="Change" />
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
