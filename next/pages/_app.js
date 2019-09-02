import 'antd/dist/antd.css'

import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../components/Layout.jsx'
import store from '../store'
import withRedux from '../lib/with-redux'

 class MyApp extends App {

  static async getInitialProps(ctx) {
    // console.log('app init') 
    
    const { Component } = ctx

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
        <Provider store={reduxStore}>
          <Layout> 
            <Component {...pageProps} />
          </Layout>
        </Provider>
    )
  }
}


export default withRedux(MyApp)