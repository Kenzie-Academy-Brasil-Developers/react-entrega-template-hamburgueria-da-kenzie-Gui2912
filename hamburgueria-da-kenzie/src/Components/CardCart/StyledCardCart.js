import styled, { css } from 'styled-components';

export const StyledCardCart = styled.li`
  width: 100%;

  height: 4.4375rem;
  margin-bottom: 28px;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    height: 100%;
    width: 4.4375rem;
    border-radius: 4px;
    background-color: var(--gray20);
    margin-right: 0.625rem;
  }

  button {
    height: max-content;
    padding-top: 12px;
    width: max-content;
    border: none;
    background-color: transparent;
    color: var(--gray50);
  }

  button:hover {
    animation: button-remove 1s forwards;
  }

  @keyframes button-remove {
    from {
      text-decoration: none;
      color: var(--gray50);
    }

    to {
      text-decoration: underline;
      color: var(--gray100);
    }
  }
`;
