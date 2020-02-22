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
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1100px;
  height: 100%;
`

export const Link = styled.a`
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`

export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: #fff;
  margin: 0 16px;
`
