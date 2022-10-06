/*
 * @Author: ruihuag
 * @Date: 2021-08-13 13:50:44
 * @LastEditTime: 2021-08-13 14:29:58
 * @LastEditors: ruihuag
 * @Description: 职责链模式
 * @FilePath: \Test-Demo\Design pattern\行为型\职责链模式\index.ts
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

type TAbstractLogger = AbstractLogger | null | undefined;
// 记录器抽象类
abstract class AbstractLogger {
	public static INFO:number = 1;
	public static DEBUG:number = 2;
	public static ERROR:number = 3;
	protected level:number = -1;
	//责任链中的下一个元素
	protected nextLogger:TAbstractLogger;

	public setNextLogger(nextLogger:AbstractLogger):void{
		this.nextLogger = nextLogger;
	}

	public logMessage(level:number, message:string):void{
		if (this.level <= level) {
				this.write(message);
		}
		if(this.nextLogger !== null){
				this.nextLogger?.logMessage(level, message);
		}
	}
	
	protected abstract write(message:string):void;
}

class ConsoleLogger extends AbstractLogger {
	constructor(level: number) {
		super();
		this.level = level;
	}
	protected write(message:string):void {    
		console.log("Standard Console::Logger: " + message);
	}
}

class ErrorLogger extends AbstractLogger {
	constructor(level: number) {
		super();
		this.level = level;
	}
	protected write(message:string):void {    
      console.log("Error Console::Logger: " + message);
  }
}

class FileLogger extends AbstractLogger {
	constructor(level: number) {
		super();
		this.level = level;
	}
  protected write(message:string):void {    
    console.log("File::Logger: " + message);
	}
}

function getChainOfLoggers():AbstractLogger{ 
	const errorLogger:AbstractLogger = new ErrorLogger(AbstractLogger.ERROR);
	const fileLogger:AbstractLogger = new FileLogger(AbstractLogger.DEBUG);
	const consoleLogger:AbstractLogger = new ConsoleLogger(AbstractLogger.INFO);
	errorLogger.setNextLogger(fileLogger);
	fileLogger.setNextLogger(consoleLogger);
	return errorLogger;  
}
 
const loggerChain:AbstractLogger = getChainOfLoggers();
loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
loggerChain.logMessage(AbstractLogger.DEBUG, "This is a debug level information.");
loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");