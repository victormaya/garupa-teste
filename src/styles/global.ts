import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    list-style-type: none;
  }

  ${({ theme }) => css`
    //scrollbar configuration
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.white};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 1rem;
    }

    html {
      font-size: 62.5%;
    }

    //temporário somente para colocar a pagina com height 100%
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
    }
    .global-container {
      width: ${theme.grid.container};
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      gap: 20px;
      @media (max-width: 1120px) {
        width: ${theme.grid.containerMedium};
        flex-direction: column;
      }
      @media (max-width: 748px) {
        width: ${theme.grid.containerSmall};
      }
      @media (max-width: 391px) {
        width: 90%;
      }
    }
  `}

`
export default GlobalStyles
