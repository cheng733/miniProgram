import React, { useEffect } from 'react'
import './index.less'
import { Avatar, WaterMark } from '@nutui/nutui-react-taro'
import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'

function Index() {
  const _init = ()=>{
    Taro.getUserProfile({
      lang:"zh_CN",
      desc:"获取你的昵称、头像、地区及性别",
      success:(result)=>{
console.log(result,'success')
      },
      fail:(res)=>{
        console.log(res,'error')
      }
    })
  }
  useEffect(()=>{
    _init()
  },[])
  return (
    <Block>
      
      <WaterMark
        zIndex={200}
        content="什么你的我的"
        rotate={22}
        imageWidth={60}
        imageHeight={23}
      />
    </Block>

  )
}

export default Index
