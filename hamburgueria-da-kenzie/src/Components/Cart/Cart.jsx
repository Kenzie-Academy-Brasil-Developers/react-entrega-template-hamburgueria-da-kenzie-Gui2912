import React from 'react';
import Button from '../Button/Button';
import { StyledCardCart } from '../CardCart/StyledCardCart';
import Typography from '../Typography';
import { StyledCart, StyledTotal } from './StyledCart';

const Cart = ({
  children,
  cart,
  exclueCartItem,
  removeAllCartItems,
  totalCartPrice,
}) => {
  return (
    <StyledCart>
      <h2 className="cardTitle">Carrinho de compras</h2>
      <ul>
        {cart.length !== 0 ? (
          cart.map((element) => (
            <StyledCardCart
              key={element.id}
              className="d-flex justify-content-between"
            >
              <div className="d-flex">
                <img src={element.img} alt="" />
                <div className="d-flex flex-column justify-content-around">
                  <Typography tag="h3">{element.name}</Typography>
                  <Typography tag="p">{element.category}</Typography>
                </div>
              </div>
              <Button onClick={() => exclueCartItem(element)}>Remover</Button>
            </StyledCardCart>
          ))
        ) : (
          <span className='d-flex align-items-center justify-content-center flex-column'>
            <Typography tag="h3" className="text-center">
              Sua sacola está vazia
            </Typography>
            <Typography tag="p" className="text-center">
              Adicione itens
            </Typography>
          </span>
        )}
      </ul>

      {cart.length !== 0 && (
        <StyledTotal className="d-flex flex-column justify-content-around">
          <div className="d-flex justify-content-between">
            <Typography tag="h3">Total</Typography>
            <Typography tag="p">{`R$ ${totalCartPrice.toFixed(2)}`}</Typography>
          </div>
          <Button className="mg-auto" onClick={removeAllCartItems}>
            Remover Todos
          </Button>
        </StyledTotal>
      )}
    </StyledCart>
  );
};

export default Cart;
