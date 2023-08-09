import React, { useEffect, useRef, useState } from 'react'
import './index.less'
import { Divider, NoticeBar, Skeleton } from '@nutui/nutui-react-taro'
import { queryNews } from '../../api/news'
import { Block, CoverImage, ScrollView, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

function Index() {
  const [news, setNews] = useState<queryNews.news>()
  const [id, setId] = useState(0)
  const newRef = useRef<HTMLDivElement>(null)
  const el = useRef<HTMLDivElement>(null)
  const scrollViewRef = useRef<any>(null)
  const scrollToBottom = () => {
    Taro.pageScrollTo({
      scrollTop: 1000000,
      duration: 300
    })
  }
  const _news = news?.news
  const flag = useRef({
    idx: 0,
    itemIdx: 0,
    text: '',
    rowText: ''
  })
  const _init = async () => {
    try {
      const { status, data } = await queryNews()
      if (status === 200) {
        setNews(data)
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      _init()
    }, 1000)
  }, [])



  Taro.useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '啊程小站',
      path: 'pages/news/index',
      imageUrl: require('../../assets/lufei.jpg'),
    }
  })

  Taro.useShareTimeline(() =>{
    return {
      title: '啊程小站',
      path: 'pages/news/index',
      imageUrl: require('../../assets/lufei.jpg'),
    }
  })
  const write = () => {
    const col = _news!.length - 1
    const row = _news![flag.current.idx].length - 1
    new Promise((resolve) => {
      setTimeout(() => {
        scrollToBottom()
        let idx = flag.current.idx
        let itemIdx = flag.current.itemIdx
        const row = _news![idx].length - 1
        flag.current.text += _news![idx][itemIdx]
        if (row === itemIdx) {
          setId(idx)
          flag.current.rowText += `<View class='news-info' id='a${idx}'>${_news![idx]}</View>`
          flag.current.text = flag.current.rowText
          idx += 1
          itemIdx = 0
        } else {
          itemIdx += 1
        }
        el.current!.innerHTML = flag.current.text
        flag.current.idx = idx
        flag.current.itemIdx = itemIdx
        resolve(true)
      }, 50)
    }).then(() => {
      if (col === flag.current.idx && row < flag.current.itemIdx) return
      write()
    })

  }

  useEffect(() => {
    if (_news) {
      write()
    }
  }, [_news])

  return (
    <View className='news-wrap'>
      <ScrollView
        ref={scrollViewRef}
        scrollY
      >
        <View className='news' ref={newRef}>
          <NoticeBar content="你怎么可以怎么好看 你怎么可以怎么好看 你怎么可以怎么好看 你怎么可以怎么好看" />
          <Divider />
          {!_news ? <Block>
            <Skeleton className='photo' animated></Skeleton>
            <Skeleton className='title' animated></Skeleton>
            <Skeleton className='time' animated></Skeleton>
            <Divider />
            {Array(10).fill(1).map((i, idx) => {
              const flag = idx % 4 === 0 ? 0 : 1
              return <Skeleton animated className={`bar${flag}`} />
            })}
          </Block> :
            <Block>
              <CoverImage src={news?.head_image || ''}></CoverImage>
              <View className='world'>每天60秒读懂世界</View>
              <View className='date'>{news?.date}</View>
              <Divider />
              <View className='news-info-wrap'>
                <View ref={el}></View>
                <view>&nbsp;&nbsp;</view>
                <view>{news?.weiyu}</view>
              </View>

            </Block>
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Index
