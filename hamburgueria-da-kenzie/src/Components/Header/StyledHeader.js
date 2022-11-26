import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--gray0);
  padding: 0 10px;
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    height: 138px;
  }
`;

export const StyledDivHeader = styled.div`
  height: 100%;
  max-width: 1370px;
  width: 100%;

  @media (max-width: 900px) {
    height: 138px;
    flex-direction: column;
    justify-content: space-around;
  }

  span {
    color: var(--color-secundary);
    font-size: 20px;
  }

  button {
    @media (max-width: 900px) {
      right: 30%;
      top: 85px !important;
    }

    @media (max-width: 750px) {
      right: 26%;
      top: 85px !important;
    }

    @media (max-width: 650px) {
      right: 24%;
      top: 85px !important;
    }

    @media (max-width: 550px) {
      right: 22%;
      top: 85px !important;
    }

    @media (max-width: 480px) {
      right: 16%;
      top: 85px !important;
    }

    @media (max-width: 380px) {
      right: 10%;
      top: 85px !important;
    }
  }
`;
