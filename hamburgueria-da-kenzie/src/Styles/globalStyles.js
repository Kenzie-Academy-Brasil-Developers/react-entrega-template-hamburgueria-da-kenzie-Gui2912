import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body{
      font-family: 'Inter', sans-serif;
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ul,li{
      list-style: none;
    }

    button{
      cursor: pointer;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
    }

    :root{
      --gray0: #F5F5F5;
      --gray20: #E0E0E0;
      --gray50: #828282;
      --gray100: #333333;
      --color-primary: #27AE60;
      --color-primary50: #93D7AF;
      --color-secundary: #EB5757;
    }

    .d-flex{display: flex;}

    .align-items-center{align-items: center;}
    .align-items-start{align-items: flex-start;}
    .align-items-end{align-items: flex-end;}

    .text-start{text-align: start;}
    .text-center{text-align: center;}
    .p-0{padding: 0;}
    .mg-auto{margin: 0 auto}


    .justify-content-center{justify-content: center;}
    .justify-content-between{justify-content: space-between;}
    .justify-content-around{justify-content: space-around;}
    .justify-content-end{justify-content: flex-end;}

    
    .wrap{flex-wrap: wrap;}
    .flex-column{flex-direction: column;}
    .flex-row{flex-direction: row;}
`;
