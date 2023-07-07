import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro';



export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: "pages/post/index",
        text: "早报",
      },
      {
        pagePath: "pages/weather/index",
        text: "天气",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <Tabbar onSwitch={(child, idx) => { console.log(idx) }}>
        {list.map((item, index) => {
          return <Tabbar.Item title={item.text} />
        })}
      </Tabbar>
    )
  }
}