import * as React from 'react'

import { Container, Divider, InnerContainer, Menu } from './Header.style'
import { Link } from 'react-router-dom'

const Index: React.FC = () => (
  <Container>
    <InnerContainer>
      <Menu>
        <Link to="/login">로그인</Link>
      </Menu>
      <Divider />
      <Menu>
        <Link to="/join">회원가입</Link>
      </Menu>
    </InnerContainer>
  </Container>
)

export default Index
