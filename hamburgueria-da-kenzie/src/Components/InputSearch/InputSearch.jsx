import React from 'react';
import { StyledButtonSearch, StyledInputSearch } from './StyledInputSearch';

const InputSearch = ({ onChange, onClick }) => {
  return (
    <>
      <StyledInputSearch placeholder="Pesquisar" onChange={onChange} />
      <StyledButtonSearch onClick={onClick}>Pesquisar</StyledButtonSearch>
    </>
  );
};

export default InputSearch;
