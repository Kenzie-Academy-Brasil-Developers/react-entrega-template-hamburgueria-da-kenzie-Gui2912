import React, { Children } from 'react';
import InputSearch from '../InputSearch/InputSearch';
import Typography from '../Typography';
import { StyledDivHeader, StyledHeader } from './StyledHeader';

const Header = ({ children }) => {
  return (
    <StyledHeader className='d-flex justify-content-center'>
      <StyledDivHeader className='align-items-center d-flex justify-content-between'>
        <Typography tag="h1">Burguer <span>Kenzie</span></Typography>
        {children}
      </StyledDivHeader>
    </StyledHeader>
  );
};

export default Header;
