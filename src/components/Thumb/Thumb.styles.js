import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
`;

export const Content = styled.div`
  width: 100%;

  .thumbs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
    margin-top: 20px;
    width: 80%;
    margin: 0% 10% 0% 10%;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0;
    }

    img {
      border-radius: 24px;
      width: 100%;
      margin-top: 20px;
      height: auto;

      :hover {
        opacity: 0.7;
      }
      @media screen and (max-width: 768px) {
        border-radius: 10px;
      }
    }
  }
`;

export const Image = styled.img`
  height: auto;
  width: 80%;
  margin: 0% 10% 0% 10%;
  border-radius: 24px;

  :hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
