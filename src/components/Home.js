import React from "react";
import ProductInfo from "./ProductInfo";
import Thumb from "./Thumb";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div>
            <Thumb />
          </div>
          <div>
            <ProductInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
