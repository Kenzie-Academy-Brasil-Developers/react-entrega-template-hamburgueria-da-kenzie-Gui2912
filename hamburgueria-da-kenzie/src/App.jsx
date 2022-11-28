import React, { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import Container from './Components/Container/';
import Header from './Components/Header';
import InputSearch from './Components/InputSearch/InputSearch';
import { api } from './Services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function apiData() {
      try {
        const request = await api.get();

        setData(request.data);
        setFilter(request.data);
      } catch (err) {
        console.log(err);
      }
    }
    apiData();
  }, []);

  const inputHandle = (e) => {
    setInputValue(e.target.value);
  };

  const buttonHandle = () => {
    const filteredData = data.filter(
      (element) =>
        element.name.toUpperCase().includes(inputValue.toUpperCase()) &&
        inputValue
    );
    filteredData.length === 0 ? setFilter(data) : setFilter(filteredData);
  };

  const addCart = (e) => {
    const exists = cart.some((element) => element.id === e.id);
    if (!exists) {
      toast.success('Item adicionado ao carrinho !', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
      setCart([...cart, e]);
      setTotal((prevState) => prevState + e.price);
    } else {
      toast.error('Item já adicionado ao carrinho', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        theme: 'colored',
      });
    }
  };

  const exclueCartItem = (e) => {
    const filteredCart = cart.filter((element) => element.id !== e.id);
    setCart(filteredCart);

    setTotal((prevState) => prevState - e.price);
  };

  const removeAllCartItems = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <>
      <Header>
        <InputSearch onClick={buttonHandle} onChange={inputHandle} />
      </Header>
      <Container
        height100vh
        maxWidth="containerBg"
        className="d-flex justify-content-center align-items-center column"
      >
        <Container
          height100vh
          maxWidth="containerContent"
          className="d-flex justify-content-center justify-content-between"
        >
          <Card filter={filter} addCart={addCart} />
          <Cart
            cart={cart}
            exclueCartItem={exclueCartItem}
            removeAllCartItems={removeAllCartItems}
            totalCartPrice={total}
          />
        </Container>
      </Container>
    </>
  );
};

export default App;
