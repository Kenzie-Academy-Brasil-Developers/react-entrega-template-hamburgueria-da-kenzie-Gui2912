import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './Styles/globalStyles';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ToastContainer />
    <GlobalStyle />
    <App />
  </>
);
