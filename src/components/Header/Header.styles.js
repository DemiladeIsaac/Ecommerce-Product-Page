import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 40px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  border-bottom: 3px solid var(--lightGreyBlue);

  .nav-bar {
    display: none;
    margin-top: 15px;
    cursor: pointer;
    margin-right: 10px;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  p {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      cursor: pointer;
      z-index: 100;
    }
  }

  h1 {
    color: var(--darkBlue);
  }

  .nav {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--darkGreyBlue);
    font-weight: var(--fontWeight);

    li {
      padding: 15px;
      cursor: pointer;

      :hover {
        padding-bottom: 20px;
        border-bottom: 4px solid var(--orange);
      }
    }
  }

  .images {
    display: flex;
    align-items: center;
    margin-left: auto;

    .badge {
      background-color: var(--orange);
      color: white;
      border-radius: 12px;
      padding: 0 0.5rem;
      margin-left: 0.5rem;
    }

    #cart {
      height: 20px;
    }
    #avatar {
      width: 40px;
      margin-left: 45px;
    }
  }
`;

export const Line = styled.div`
  background: var(--black);
  height: 3px;
  width: 20px;
  margin-bottom: 5px;
`;
