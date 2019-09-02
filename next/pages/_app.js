import 'antd/dist/antd.css'

import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../components/Layout.jsx'
import store from './store'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
        <Provider store={store}>
     
            <Layout>
              <Component {...pageProps} />
            </Layout>
         
        </Provider>
     )
  }
}