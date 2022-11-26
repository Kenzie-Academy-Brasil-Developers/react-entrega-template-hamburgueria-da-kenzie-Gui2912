import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 100%;
  max-width: 940px;
  height: 100%;
  gap: 20px;

  @media (max-width: 900px) {
    max-width: max-content;
    width: 100%;
    justify-content: space-between;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: scroll;
    margin: 30px 0;
  }
`;

export const StyledCard = styled.li`
  height: 346px;
  width: 300px;
  border: 1px solid var(--gray50);
  border-radius: 4px;

  :hover {
    animation: list-products-scale 0.5s forwards;
  }

  @keyframes list-products-scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }

  figure {
    width: 100%;
    height: 40%;
    background-color: var(--gray20);
    margin-bottom: 10px;

    @media (max-width: 900px) {
      width: 295px;
    }
  }

  div{
    min-height: max-content;
  }

  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }

  :focus {
    scale: 1.1;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 25px;
  }

  button:hover {
    background-color: var(--color-primary50);
    animation: button-hover 0.5s forwards;
  }

  @keyframes button-hover {
    from {
      background-color: var(--color-primary);
    }
    to {
      background-color: var(--color-primary50);
    }
  }
`;
