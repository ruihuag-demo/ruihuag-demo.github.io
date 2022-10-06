import React from 'react'
import * as Icons from '@ant-design/icons'
import { Utils } from './assets'
import { iMenu, iRouter } from './assets/type'
import { FormattedMessage } from 'react-intl'
import Home from './modules/Home'

import { AllModule } from './config'

// 不需要登录的列表
const canNoLoginList: string[] = []
let menuList: iMenu[] = []
// 用于home页外的(只支持一层级)
const appRouters: iRouter[] = [
  // {
  // 	key: 'serviceStatus',
  // 	id: 'serviceStatus',
  // 	path: '/publicService',
  // 	title: 'authority.menu.edit.title',
  // 	module: publicServicePage,
  // 	canNoLogin: true,
  // 	exact: true,
  // },
]

let routers: iRouter[] = []

// 不指定运行模块, 就全部运行
let RunModule = (process.env.modules && process.env.modules.split(/(_|,)/)) || []

// console.log(RunModule, process.env.modules)

if (RunModule.length > 0) {
  RunModule.forEach((moduleName: string): void => {
    if (Array.isArray(AllModule[moduleName])) routers = routers.concat(AllModule[moduleName])
  })
} else {
  for (let moduleItem in AllModule) {
    routers = routers.concat(AllModule[moduleItem])
  }
}

function buildMenuList(lists: iRouter[]): any {
  return lists.map((item: iRouter): iMenu => {
    const { module, exact, children = [], loadRoute = true, canNoLogin, ...rest } = item
    if (canNoLogin) canNoLoginList.push(rest.path)

    if (Object.keys(Icons).includes(rest.icon)) rest.iconCom = Utils.getByKey(Icons, rest.icon)

    if (
      children.filter((item: any): any => {
        const { menuShow = true } = item
        return menuShow
      })?.length > 0
    )
      rest.children = buildMenuList(children)
    return rest
  })
}

menuList = buildMenuList(routers)
buildMenuList(appRouters)

export { routers, appRouters, menuList, canNoLoginList }
