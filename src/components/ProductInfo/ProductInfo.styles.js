import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin-top: 100px;
`;

export const Content = styled.div`
  h4 {
    color: var(--orange);
    font-weight: var(--fontWeightBold);
  }

  h1 {
    font-size: 3rem;
    line-height: 1;
  }

  p {
    color: var(--darkGreyBlue);
  }

  .price {
    color: var(--darkBlue);
    span {
      background: var(--paleOrange);
      color: var(--orange);
      padding: 5px;
      margin-left: 15px;
      border-radius: 5px;
      font-size: 0.8rem;
    }
  }
  .slash-price {
    text-decoration: line-through;
    color: var(--greyBlue);
  }
  .flex {
    display: flex;
  }

  .counter {
    background: var(--lightGreyBlue);
    border-radius: 15px;
    padding: 15px;
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;

    .center {
      color: var(--black);
      font-size: 1rem;
      font-weight: var(--fontWeightBold);
    }

    .decrement {
      color: var(--orange);
      font-size: 1.5rem;
      font-weight: var(--fontWeightBold);
      cursor: pointer;
    }

    .increment {
      color: var(--orange);
      font-size: 1.5rem;
      font-weight: var(--fontWeightBold);
      cursor: pointer;
    }
  }

  .btn-cart {
    padding: 15px;
    width: 200px;
    background: var(--orange);
    color: var(--white);
    border: 0;
    border-radius: 15px;
    outline: none;
    font-weight: bold;
    box-shadow: 15px 20px 8px -10px var(--paleOrange);

    &:disabled {
      opacity: 0.7;
    }

    img {
      margin-right: 20px;
      color: var(--white);
      width: 15px;
    }
  }
`;
