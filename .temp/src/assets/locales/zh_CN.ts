import appLocaleData from 'react-intl/locale-data/zh'
import antd from 'antd/lib/locale/zh_CN'
import messages from './modules/message/zh_CN'
import system from './modules/system/zh_CN'
import test from './modules/test/zh_CN'
import echart from './modules/echart/zh_CN'

export default {
  name: '简体中文',
  locale: 'zh-CN',
  data: appLocaleData,
  antd,
  messages: {
    ...echart,
    ...messages,
    ...system,
    ...test
  }
}
