import styled from "styled-components";

export const Card = styled.div`
  background: var(--white);
  color: var(--black);
  width: 200px;
  padding: 20px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
