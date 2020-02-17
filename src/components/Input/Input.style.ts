import styled from 'styled-components'

export const InputWrap = styled.div`
  width: 100%;
  height: 40px;
  border: solid 1px #e1e1e1;
  font-size: 14px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 16px;
`

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 0 none;
  &:focus {
    outline: 0 none;
    border: solid 1px #0077c7;
  }
`
