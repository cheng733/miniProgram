import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro';
import { inject, observer } from 'mobx-react';


@inject('tabStore')
@observer
export default class Index extends Component<any> {


  switchTab(index) {
    const list = this.props.tabStore.state.list;
    const url = list[index].pagePath
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected(idx: number) {
   this.props?.tabStore?.updateSelected?.(idx)
  }

  render() {
    const { list, selected } = this.props?.tabStore?.state

    return (
      <Tabbar  value={selected} onSwitch={(value)=>this.switchTab.call(this,value)}>
        {list.map((item) => {
          return <Tabbar.Item title={item.text}/>
        })}
      </Tabbar>
    )
  }
}