/*
 * @Author: ruihuag
 * @Date: 2021-08-13 15:33:53
 * @LastEditTime: 2021-08-13 15:35:11
 * @LastEditors: ruihuag
 * @Description: 饿汉式单例模式
 * @FilePath: \Test-Demo\Design pattern\创建型\单例模式\饿汉式.ts
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

// 创建时候就实例化
class Singleton {
	private name: string;
	private static instance: Singleton = new Singleton('singleton');
	private constructor(name: string) {
		this.name = name;
		// TODO 初始化逻辑
	}
	public static getInstance(): Singleton {
		return Singleton.instance;
	}

	show() {
		console.log(this.name);
	}
}

Singleton.getInstance().show();  // singleton