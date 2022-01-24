import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  color: var(--black);
  padding: 20px;
  box-shadow: 10px 10px var(--lightGreyBlue);
  border-radius: 20px;
  width: 200px;
  position: absolute;
  top: 80px;
  right: 20px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 30%;
      height: auto;
      margin-right: 3px;
    }

    h3 {
      color: var(--greyBlue);
      font-size: 0.8rem;
    }
  }

  button {
    background: var(--orange);
    padding: 15px;
    width: 100%;
    border: 0;
    border-radius: 12px;
    color: var(--white);
  }
`;
