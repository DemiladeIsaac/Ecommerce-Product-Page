import React, { useContext, useState } from "react";
import { Wrapper, Content, Line } from "./Header.styles";
//Images
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import Mobile from "../Mobile";
import Backdrop from "../Backdrop";
//Store
import CartContext from "../../store/cart-context";
import Cart from "../Cart";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const cartCtx = useContext(CartContext);
  const total = cartCtx.totalCart;
  return (
    <Wrapper>
      <Content>
        {show && <Backdrop onClick={() => setShow(false)} />}
        {show ? <Mobile /> : null}
        <div className="nav-bar" onClick={() => setShow((prev) => !prev)}>
          <Line />
          <Line />
          <Line />
        </div>
        <h1>sneakers</h1>
        <div className="nav">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="images">
          <img src={cartIcon} alt="cart" id="cart" />
          <span className="badge">{total}</span>
          <img
            src={avatar}
            alt="avatar"
            id="avatar"
            onMouseOver={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
        </div>
        {isShown ? <Cart total={total} /> : null}
      </Content>
    </Wrapper>
  );
};

export default Header;
