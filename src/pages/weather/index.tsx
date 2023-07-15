import React, { useEffect, useState } from 'react'
import './index.less'
import { queryWeather } from '../../api/weather'
import { Block, View, } from '@tarojs/components'
import { NoticeBar, SearchBar, WaterMark, Input, Form } from '@nutui/nutui-react-taro'
 interface Weather extends queryWeather.weather{
  region:string 
  situation:string
  wind:string
}
function Index() {
  const [weather, setWeather] = useState<Partial<Weather>>()
  const getWeather = async ({ province = "广东", city = "深圳" }) => {
    try {
      const { status, data } = await queryWeather({ province, city })
      if (status === 200) {
        const {date,province,city,rain,rain_24h,sunrise,sunset,visibility,humidity,wind,wind_scale,wind_speed} = data
        setWeather(
          {date,
            region:`${province} - ${city}`,
            situation:`${rain === '0' ? `不用带伞` : `下雨量${rain}`} ${rain_24h === '0' ? `24小时内不下雨` : ''}`,
            sunrise,
            sunset,
            visibility,
            humidity,
            wind:`吹${wind} ${wind_scale} 风速${wind_speed}`
          }
        )
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getWeather({})
  }, [])

  const onConfirm = (val) => {
    if (!val) return
    const arr = val.split('，')
    getWeather({ province: arr[0], city: arr[1] })
  }

  return (
    <View className='weather'>
      <NoticeBar content="仅供参考" />
      <Input value="省份和城市（默认 广东省深圳市）：" disabled />
      <SearchBar
        onChange={(val: string) => onConfirm(val)}
        maxLength={10}
      />
      <View className='form-wrap'>
        <View className='form-item'>
          <label>日期：</label>
          <Input
            className="nut-input-text"
            type="text"
            name='date'
            disabled
            defaultValue='-'
            value={weather?.date}
          />
        </View>
        <View className='form-item'>
          <label>地区：</label>
          <Input
            className="nut-input-text"
            type="text"
            name='region'
            disabled
            defaultValue='-'
            value={weather?.region}
          />
        </View>
        <View className='form-item'>
          <label>天气情况：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.situation}
          />
        </View>
        <View className='form-item'>
          <label>日出时间：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.sunrise}
          />
        </View>
        <View className='form-item'>
          <label>日落时间：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.sunset}
          />
        </View>
        <View className='form-item'>
          <label>可见度：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.visibility}
          />
        </View>
        <View className='form-item'>
          <label>湿度：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.humidity}
          />
        </View>
        <View className='form-item'>
          <label>风速：</label>
          <Input
            className="nut-input-text"
            type="text"
            disabled
            defaultValue='-'
            value={weather?.wind}
          />
        </View>
      </View>
      <WaterMark
        zIndex={200}
        content="你真好看"
        rotate={22}
        imageWidth={60}
        imageHeight={23}
      />
    </View>
  )
}

export default Index
