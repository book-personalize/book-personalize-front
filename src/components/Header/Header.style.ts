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
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 100%;
`

export const Logo = styled.div`

`

export const MenuItems = styled.div`
  display: flex;
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
