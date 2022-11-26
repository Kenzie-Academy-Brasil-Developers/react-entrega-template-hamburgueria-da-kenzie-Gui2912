import styled from "styled-components";

export const StyledInputSearch = styled.input`
  height: 60px;
  border: 3px solid var(--gray20);
  padding: 0 12px;
  width: 100%;
  max-width: 365px;
  border-radius: 4px;
  font-size: 1rem;
  position: relative;
  color: var(--gray50);
  outline: var(--gray20);
  

  :focus{
    border-color: var(--gray100);
  }
`

export const StyledButtonSearch = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 0;
  position: absolute;
  right: 5%;
  font-size: .875rem;
  color: white;
  background-color: var(--color-primary);
  width: 107px;

  :hover{
    background-color: var(--color-primary50);
  }
`