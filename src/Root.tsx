import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ConfigProvider } from 'antd'
import koKR from 'antd/es/locale/ko_KR'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

import App from './App'

const store = createStore(rootReducer, composeWithDevTools())

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={koKR}>
        <ThemeProvider theme={Theme}>
          <GlobalStyles/>
          <App/>
        </ThemeProvider>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
)

export default Root
