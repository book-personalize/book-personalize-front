import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import koKR from 'antd/es/locale/ko_KR'
import 'antd/dist/antd.css'

import App from './App'

const Root = () => (
    <BrowserRouter>
      <ConfigProvider locale={koKR}>
        <App/>
      </ConfigProvider>
    </BrowserRouter>
);

export default Root
