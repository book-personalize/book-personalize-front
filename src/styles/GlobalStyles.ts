import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    padding: 60px;
    margin: 0 auto;
    background-color: #fafafa;
    color: rgba(#000, 0.87);
    font-size: 14px;
  }
;`
