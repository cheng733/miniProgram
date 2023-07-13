import React, { useEffect, useState } from 'react'
import './index.less'
import { queryWeather } from '../../api/weather'
import { Block, Input, Label, View } from '@tarojs/components'
import { Divider, NoticeBar, WaterMark } from '@nutui/nutui-react-taro'

function Index() {
  const [weather, setWeather] = useState<queryWeather.weather>()
  const getWeather = async ({ province = "广东", city = "深圳" }) => {
    try {
      const { status, data } = await queryWeather({ province, city })
      if (status === 200) {
        setWeather(data)
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getWeather({})
  }, [])

  const onConfirm = (e) => {
    const val = e.target.value
    if (!val) return
    const arr = val.split('，')
    console.log(arr,'arr')
    getWeather({ province: arr[0], city: arr[1] })
  }

  return (
    <Block>
      <NoticeBar content="仅供参考" />
      <View className='weather'>
        省份和城市（默认 广东省深圳市）：<Input onConfirm={onConfirm} className='weather-input' />
        <view>日期：{weather?.date}</view>
        <Divider />
        <view>{`${weather?.province} - ${weather?.city}`}</view>
        <Divider />
        <view>{`${weather?.rain === '0' ? `不用带伞` : `下雨量${weather?.rain}`} ${weather?.rain_24h === '0' ? `24小时内不下雨` : ''}`}</view>
        <Divider />
        <view>{`日出时间：${weather?.sunrise} 日落时间：${weather?.sunset}`}</view>
        <Divider />
        <view>{`可见度：${weather?.visibility}`}</view>
        <Divider />
        <view>{`湿度：${weather?.humidity}`}</view>
        <Divider />
        <view>{`吹${weather?.wind} ${weather?.wind_scale} 风速${weather?.wind_speed}`}</view>
      </View>
      <WaterMark
        zIndex={200}
        content="你真好看"
        rotate={22}
        imageWidth={60}
        imageHeight={23}
      />
    </Block>
  )
}

export default Index
