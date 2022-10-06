/*
 * @Author: ruihuag
 * @Date: 2021-08-13 15:37:30
 * @LastEditTime: 2021-08-13 15:38:29
 * @LastEditors: ruihuag
 * @Description: 模块化单例模式
 * @FilePath: \Test-Demo\Design pattern\创建型\单例模式\模块化.ts
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

// export.ts
class Singleton {
    protected name: string;
    constructor(name:string) {
        this.name = name;
        // TODO 初始化逻辑
    }

    show() {
        console.log(this.name);
    }
}

export default new Singleton('singleton');

// import.ts
// import singleton from './export';

// singleton.show();