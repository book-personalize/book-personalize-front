import * as React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'

const PageTemplateWrapper = styled.div``

const Contents = styled.div`
  min-height: 100vh;
  padding-top: 64px;
`

const PageTemplate: React.FC = ({ children }) => (
  <PageTemplateWrapper>
    <Header />
      <Contents>
        {children}
      </Contents>
    <Footer />
  </PageTemplateWrapper>
)

export default PageTemplate
