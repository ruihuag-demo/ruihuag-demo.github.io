/*
 * @Author: ruihuag
 * @Date: 2021-08-13 14:30:43
 * @LastEditTime: 2021-08-13 14:53:49
 * @LastEditors: ruihuag
 * @Description: 中介者模式
 * @FilePath: \Test-Demo\Design pattern\行为型\中介者模式\index.ts
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

class User {
	private name:string = '';

	public getName():string {
		return this.name;
	}

	public setName(name:string):void {
		this.name = name;
	}

	constructor(name:string){
		this.name  = name;
	}

	public sendMessage(message:string):void{
		ChatRoom.showMessage(this,message);
	}
}

// 中介类
class ChatRoom {
	public static showMessage(user:User, message:string):void{
		console.log(new Date().toString() + " [" + user.getName() +"] : " + message);
	}
}

const robert: User = new User("Robert");
const john:User = new User("John");
robert.sendMessage("Hi! John!");
john.sendMessage("Hello! Robert!");