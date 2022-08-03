import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429cc; 
    --green: #33cc95;
    --blue-light: #6933FF; 
    --text-title: #363f5f; 
    --text-body: #969cb3; 
    --shape: #FFFFFF; 
  }

  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }

  //font-size: 16px (desktop)
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background); 
    -webkit-font-smoothing: antialiased; //fontes detalhadas, mais nítidas; 
  }

  //input e textarea por padrão, mesmo que com font-family definida, não importam. Dessa forma, abaixo, sobrescrevemos o style dessas tags.

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  buttom {
    cursor: pointer; 
  }

  //tudo que possuir o atributo disabled
  [disabled] {
    opacity: 0.6; 
    cursor: not-allowed; 
  }

`