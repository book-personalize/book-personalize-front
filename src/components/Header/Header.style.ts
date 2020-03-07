import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
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
  border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.maxWidth};
  height: 100%;
`

export const Logo = styled.p`
  font-family: VT323;
  font-size: 26px;
  color: ${({ theme }) => theme.primaryColor};
  text-shadow: -1px 0 #d1b13d, 0 1px #d1b13d, 1px 0 #d1b13d, 0 -1px #d1b13d;
  cursor: pointer;
`

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
`

export const Menu = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.darkGreyColor};
  cursor: pointer;
  margin-left: 24px;
`

export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.darkGreyColor};
  margin-left: 24px;
`
