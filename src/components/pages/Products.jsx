import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductItems } from "../../features/productsSlice";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);
  const { products, error } = useSelector((state) => state.products);

  if (error) {
    return <h1 className="text-center">Error...</h1>;
  }
  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <section className="products__container container">
      <section className="products__center">
        <h3>Our Products</h3>
        <div className="products">
          {products?.map((product) => {
            return (
              <Link to={`/details/${product.id}`} key={product.id}>
                <article>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="article__name">
                    <h4>{product.title}</h4>
                    <p>
                      Rs <span>{product.price}</span>
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Products;
