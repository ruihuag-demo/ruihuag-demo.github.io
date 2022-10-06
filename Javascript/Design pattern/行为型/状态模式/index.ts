/*
 * @Author: ruihuag
 * @Date: 2021-08-13 14:54:41
 * @LastEditTime: 2021-08-13 15:25:49
 * @LastEditors: ruihuag
 * @Description: 状态模式
 * @FilePath: \Test-Demo\Design pattern\行为型\状态模式\index.ts
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
{

	interface IState {
		doAction(context:Context):void;
	}

	class State implements IState{
		public doAction(context: Context):void {
			console.log(context)
		}
	}
		
	type TState = State | null | undefined;

		
	class Context {
		private state:TState;
		constructor(){
				this.state = null;
		}

		setState(state:State):void{
				this.state = state;     
		}
	
		getState():TState{
				return this.state;
		}
	}

	class StartState implements State {
		doAction(context:Context):void {
      console.log("Player is in start state");
      context.setState(this); 
		}
		public toString():string{
      return "Start State";
  	}
	}

class StopState implements State { 
  doAction(context:Context):void {
      console.log("Player is in stop state");
      context.setState(this); 
  }
  public toString():string{
      return "Stop State";
  }
}
	const context: Context = new Context();
	
	const startState:StartState = new StartState();
	startState.doAction(context);
	console.log(context.getState()?.toString());

	const stopState:StartState = new StopState();
	stopState.doAction(context);
	console.log(context.getState()?.toString());


}
