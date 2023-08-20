import React from "react";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div className="Home">
      <Hero />

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posters Collection.
          </p>
        </div>
        <div className="content">
          {/* {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))} */}

          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">All New Designs, Same Old Details.</p>
        </div>
        <div className="content">
          {/* {topProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))} */}

          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
