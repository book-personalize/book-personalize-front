import * as React from 'react'

import { Container, Divider, InnerContainer, Link } from './Header.style'

const Index: React.FC = () => (
    <Container>
      <InnerContainer>
        <Link href="/login">로그인</Link>
        <Divider />
        <Link href="/join">회원가입</Link>
      </InnerContainer>
    </Container>
)

export default Index
