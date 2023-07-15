import React, { useState } from 'react'
import './index.less'
import { Empty, WaterMark,Button, Dialog } from '@nutui/nutui-react-taro'
import { Block,  } from '@tarojs/components'


function Index() {
const [visible,setVisible] = useState(false)
  return (
    <Block>
      <Empty status="error" description="加载失败">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary" onClick={() => setVisible(true)}>重试</Button>
      </div>
    </Empty>
    <Dialog 
      title="当当当"
      visible={visible}
      confirmText='确认'
      hideCancelButton
      onConfirm={() => setVisible(false)}
    >
      暂无想法
    </Dialog>
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
