import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({children, onClick, removeButton}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button