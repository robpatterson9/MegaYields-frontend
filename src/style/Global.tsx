import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    .dwqKIT .desktop-icon {
      width: 0px;
      display: none;
    }
    .sc-jSFjdj jxszLn sc-jlZJtj QgNfY {
      background: #000000;
    }
    .sc-jSFjdj sc-ljsmAU kJmatq gpIDbW {
      background: #000000; }

      .desktop-icon {
        width: 0px;
        display: none;
  }
  .sc-jSFjdj sc-ljsmAU kJmatq gpIDbW {
    background: #000000;
  }
  sc-jSFjdj jxszLn sc-jlZJtj QgNfY {
    background: #000000;
 
}

  .jcNvwq {
    width: 0px;
    display: none;
  }
  .sc-jSFjdj sc-ljsmAU kJmatq gpIDbW {
    background: #000000;
  }
  .sc-jSFjdj jxszLn sc-jlZJtj QgNfY {
    background: #000000;
  }
  .sc-jSFjdj jxszLn sc-jlZJtj QgNfY {
    background: #000000;

  }
  .QgNfY {
    background: #000000;
  }

    img {
      height: auto;
      max-width: 100%;
    }
  

export default GlobalStyle
