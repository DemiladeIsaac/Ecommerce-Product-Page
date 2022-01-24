import React, { useContext } from "react";
import { Wrapper } from "./Cart.styles";
import CartContext from "../../store/cart-context";

const Cart = ({ total }) => {
  const cartCtx = useContext(CartContext);
  if (cartCtx.totalCart === 0) {
    return <div>No items in the cart</div>;
  }
  return (
    <>
      {cartCtx.items.map((item) => (
        <Wrapper key={item.id}>
          <div>
            <img src={item.image} alt="product" />
            <h3>
              Fall Limited Edition Sneakers ${item.price} x {item.amount}
              <span style={{ color: "black" }}>
                {" "}
                ${item.price * item.amount}{" "}
              </span>
            </h3>
          </div>
          <button>Checkout</button>
        </Wrapper>
      ))}
    </>
  );
};

export default Cart;
