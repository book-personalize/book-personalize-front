import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import InputSearch from '../Input/InputSearch'
import { HeaderContainer, Divider, Logo, MenuItems, InnerContainer, Menu } from './Header.style'
import Emoji from '../Emoji'

const Header: React.FC = () => {
  const history = useHistory()

  const toHome = useCallback(() => {
    history.push('/')
  }, [history])

  const onSearch = (value: string) => {
    console.log(value)
  }

  const onChange = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <HeaderContainer>
      <InnerContainer>
        <Logo onClick={toHome}>
          <Emoji label="book" symbol="📖"/>
          &nbsp;Book Person
        </Logo>
        <MenuItems>
          <InputSearch id="search" onSearch={onSearch} onChange={onChange}/>
          <Menu to="/login">로그인</Menu>
          <Divider />
          <Menu to="/join">회원가입</Menu>
        </MenuItems>
      </InnerContainer>
    </HeaderContainer>
  )
}

export default Header
