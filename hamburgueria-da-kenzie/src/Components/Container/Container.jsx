import React from 'react';
import { StyledContainer } from './StyledContainer';

const Container = ({ children, containerBg, className, maxWidth, height100vh }) => {
  return (
    <>
    
    <StyledContainer maxWidth={maxWidth} containerBg={containerBg} className={className}>
      {children}
    </StyledContainer>

    </>
  );
};

export default Container;
