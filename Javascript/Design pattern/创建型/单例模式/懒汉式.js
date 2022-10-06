/*
 * @Author: ruihuag
 * @Date: 2021-08-13 15:35:25
 * @LastEditTime: 2021-08-13 15:36:44
 * @LastEditors: ruihuag
 * @Description: 懒汉式单例模式
 * @FilePath: \Test-Demo\Design pattern\创建型\单例模式\懒汉式.js
 * Copyright (c) 2004-2021 i-Sprint Technologies, Inc.
 *  address: 
 *  All rights reserved. 
 *  
 *  This software is the confidential and proprietary information of 
 *  i-Sprint Technologies, Inc. ('Confidential Information').  You shall not 
 *  disclose such Confidential Information and shall use it only in 
 *  accordance with the terms of the license agreement you entered into 
 *  with i-Sprint. 
 */


// 只有 getInstance 才会实例化

class Singleton {
    constructor(name) {
        this.name = name;
        // TODO 初始化逻辑
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('singleton');
        }
        return Singleton.instance;
    }
    show() {
        console.log(this.name);
    }
}
Singleton.getInstance().show(); // singleton