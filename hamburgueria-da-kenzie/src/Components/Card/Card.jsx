import React from 'react';
import Button from '../Button/Button';
import Container from '../Container';
import Typography from '../Typography';
import { StyledCard, StyledUl } from './StyledCard';

const Card = ({ filter, addCart }) => {

  return (
    <StyledUl className="d-flex wrap">
      {filter.map((element) => (
        <StyledCard id={element.id} key={element.id}>
          <figure className='d-flex justify-content-center align-items-center'>
            <img src={element.img} alt={element.name}/>
          </figure>
          <Container containerBg>
            <Typography tag="h2">{element.name}</Typography>
            <Typography tag="p">{element.category}</Typography>
            <Typography tag="p">{`R$ ${element.price.toFixed(2)}`}</Typography>
            <Button onClick={() => addCart(element)}>Adicionar</Button>
          </Container>
        </StyledCard>
      ))}
    </StyledUl>
  );
};

export default Card;
