import React, { useState } from "react";
import { Wrapper, Content, Image } from "./Thumb.styles";

//Image
import productOne from "../../images/image-product-1.jpg";
import productTwo from "../../images/image-product-2.jpg";
import productThree from "../../images/image-product-3.jpg";
import productFour from "../../images/image-product-4.jpg";
import productOneThumbnail from "../../images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "../../images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "../../images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "../../images/image-product-4-thumbnail.jpg";

const Thumb = () => {
  const [state, setState] = useState(productOne);
  return (
    <Wrapper>
      <Content>
        <Image src={state} alt="sneakers" />
        <div className="thumbs">
          <img
            src={productOneThumbnail}
            alt="sneakers"
            onClick={() => setState(productOne)}
          />
          <img
            src={productTwoThumbnail}
            alt="sneakers"
            onClick={() => setState(productTwo)}
          />
          <img
            src={productThreeThumbnail}
            alt="sneakers"
            onClick={() => setState(productThree)}
          />
          <img
            src={productFourThumbnail}
            alt="sneakers"
            onClick={() => setState(productFour)}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Thumb;
