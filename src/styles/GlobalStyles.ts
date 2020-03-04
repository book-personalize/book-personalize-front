import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: rgba(#000, 0.87);
    background-color: #fff;
    font-size: 14px;
    font-family: 'NanumSquareRound';
  }
;`
