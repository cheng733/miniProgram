import React, { useEffect, useState } from 'react'
import './index.less'
import { NoticeBar } from '@nutui/nutui-react-taro'
import { queryNews } from '../../api/news'
import { Block, CoverImage, View } from '@tarojs/components'


function Index() {
  const [news,setNews] = useState<queryNews.news>()
  const _init = async () => {
    try {
      const { status, data } = await queryNews()
      if(status === 200){
        setNews(data)
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    _init()
  }, [])
  return (
    <View className='news'>
    <NoticeBar content="你怎么可以怎么好看 你怎么可以怎么好看 真他奶奶不要脸" />
   <CoverImage src={news?.image||''}></CoverImage>
    </View>
  )
}

export default Index
