import { useEffect } from "react";
import { getProductDetail } from "../../features/productdetailSlice";
import { addItem } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.singleProduct
  );
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
    navigate('/cart');
  };
  return Object.keys(product).length === 0 ? (
    <Shimmer />
  ) : (
    <section className="singleproduct__container">
      <div className="button__container">
        <a className="btn btn__backhome" href="/">
          Back Home
        </a>
      </div>
      <div className="singleproduct">
        <img src={product.thumbnail} alt={product.title} />
        <div className="singleproduct__info">
          <h1>{product.title}</h1>
          <p>
            <span>Price:</span> Rs {product.price}
          </p>
          <p>
            <span>Description:</span> {product.description}
          </p>
          <p>
            <span>Discount Percent:</span> {product.discountPercentage} %
          </p>
          <div className="singleproduct__stock--info">
            <p className="product__available">Availability:</p>
            <div>
              <p className={product.stock > 0 ? "instock" : "outstock"}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
          <button
            className="btn btn__backhome"
            disabled={product.stock < 0}
            onClick={() => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
