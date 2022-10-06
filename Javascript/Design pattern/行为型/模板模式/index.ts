/*
 * @Author: ruihuag
 * @Date: 2021-08-13 11:38:54
 * @LastEditTime: 2021-08-13 13:48:26
 * @LastEditors: ruihuag
 * @Description: 模板模式 
 * @FilePath: \Test-Demo\Design pattern\行为型\模板模式\index.ts
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


abstract class Game{
	abstract initialize():void;
	abstract startPlay():void;
	abstract endPlay():void;
	play(){ // 这里应该是final的
		this.initialize();
		this.startPlay();
		this.endPlay();
	}
}

class Cricket extends Game {
	endPlay():void {
		console.log("Cricket Game Finished!");
  }
	initialize():void {
		console.log("Cricket Game Initialized! Start playing.");
	}
	startPlay():void {
		console.log("Cricket Game Started. Enjoy the game!");
	}
}

class Football extends Game {
	endPlay() {
		console.log("Football Game Finished!");
	}
	initialize() {
		console.log("Football Game Initialized! Start playing.");
	}
	startPlay() {
		console.log("Football Game Started. Enjoy the game!");
	}
}

const game1:Game = new Cricket();
game1.play();
const game2:Game = new Football();
game2.play();