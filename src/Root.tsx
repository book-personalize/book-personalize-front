import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import koKR from 'antd/es/locale/ko_KR'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

import App from './App'

const Root = () => (
    <BrowserRouter>
      <ConfigProvider locale={koKR}>
        <ThemeProvider theme={Theme}>
          <GlobalStyles/>
          <App/>
        </ThemeProvider>
      </ConfigProvider>
    </BrowserRouter>
);

export default Root
