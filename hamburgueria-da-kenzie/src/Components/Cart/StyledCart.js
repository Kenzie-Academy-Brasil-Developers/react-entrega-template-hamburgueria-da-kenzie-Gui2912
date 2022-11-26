import styled from 'styled-components';

export const StyledCart = styled.section`
  width: 100%;
  max-width: 365px;
  height: 100%;
  max-height: 100%;
  min-height: 200px;
  border-radius: 4px;
  background-color: var(--gray0);

  @media (max-width: 900px) {
    max-width: 100%;
  }

  h2 {
    width: 100%;
    color: white;
    background-color: var(--color-primary);
    padding: 15px;
    border-radius: 4px 4px 0 0;
  }

  ul {
    height: 100%;
    padding: 12px;
    min-height: 158px;
  }

  span {
    height: 158px;
    line-height: 40px;
  }

  span p {
    color: var(--gray50);
  }
`;

export const StyledTotal = styled.div`
  width: 100%;
  border-top: 2px solid var(--gray50);
  margin-top: 12px;
  height: 160px;
  animation: totalBoxAnimation 0.5s ease-in;

  @keyframes totalBoxAnimation {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }

  div {
    padding: 0.875rem 0.75rem;
  }

  button {
    width: 90%;
    border-radius: 4px;
    height: 60px;
    color: var(--gray50);
    background-color: var(--gray20);
    margin: 20px auto;
  }

  button:hover {
    animation: button-remove-all-bg .7s forwards;
  }

  @keyframes button-remove-all-bg {
    from {
      background-color: var(--gray20);
      color: var(--gray50);
    }
    to {
      background-color: var(--gray50);
      color: white;
    }
  }
`;
