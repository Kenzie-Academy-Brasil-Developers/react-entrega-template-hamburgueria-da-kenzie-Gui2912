import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  min-height: ${({ height100vh }) => (height100vh ? '100vh' : '100%')};
  height: 100%;
  border: ${({ bd }) => (bd ? '1px solid black' : 'none')};
  padding: ${(props) => (props.containerBg ? '0 10px' : '0')};

  ${({ maxWidth }) => {
    switch (maxWidth) {
      case 'containerBg':
        return css`
          max-width: 100%;
        `;

      case 'containerContent':
        return css`
          max-width: 1370px;
        `;
    }
  }}

  @media (max-width: 900px) {
    flex-direction: column;
    max-width:100%;
    height:max-content;
  }
`;
