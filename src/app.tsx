import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import tabStore from './store/tabStore'

import './app.less'

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider tabStore={tabStore}>{  this.props.children}</Provider>  
    )
  }
}

export default App