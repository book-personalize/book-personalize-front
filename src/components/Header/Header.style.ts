import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 64px;
  background-color: rgba(#fff, 0.3);
  box-sizing: border-box;
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1100px;
  height: 100%;
`

export const Menu = styled.div`
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`

export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: #fff;
  margin: 0 16px;
`
