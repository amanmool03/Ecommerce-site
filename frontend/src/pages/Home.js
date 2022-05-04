import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../store/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link, useParams } from "react-router-dom";
import { Paginate } from "../components/Paginate";
import { ProductCarousel } from "../components/ProductCarousel";
import Meta from "../components/Meta";

const Home = () => {
  const dispatch = useDispatch();

  let { keyword, pageNumber } = useParams();

  pageNumber = pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  console.log(products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} cm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          ></Paginate>
        </>
      )}
    </>
  );
};

export default Home;
