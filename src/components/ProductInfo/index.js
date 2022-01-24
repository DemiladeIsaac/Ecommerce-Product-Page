import React, { useContext, useState } from "react";
import { Wrapper, Content } from "./ProductInfo.styles";

import cartIcon from "../../images/white-cart.svg";
//Store
import CartContext from "../../store/cart-context";
//Image
import productOne from "../../images/image-product-1-thumbnail.jpg";

const ProductInfo = () => {
  const [count, setCount] = useState(() => 0);
  const cartCtx = useContext(CartContext);

  function addToCart() {
    cartCtx.addCart({
      id: count,
      amount: count,
      image: productOne,
      price: 125,
    });
  }

  return (
    <Wrapper>
      <Content>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          Collections Men Women About Contact Sneaker Company Fall Limited
          Edition Sneakers These low-profile sneakers are your perfect casual
          wear companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>
        <h3 className="price">
          $125.00 <span>50%</span>
        </h3>
        <p className="slash-price">$250.00</p>
        <div className="flex">
          <div className="counter">
            <span
              className="decrement"
              onClick={() => setCount((prev) => prev - 1)}
            >
              -
            </span>
            <span className="center">{count < 0 ? 0 : count}</span>
            <span
              className="increment"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </span>
          </div>
          <div>
            <button
              className="btn-cart"
              onClick={addToCart}
              disabled={count === 0 ? true : false}
            >
              <span>
                <img src={cartIcon} alt="cart" />
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ProductInfo;
