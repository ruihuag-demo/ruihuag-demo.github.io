/*
 * @Author: ruihuag
 * @Date: 2021-08-13 10:52:28
 * @LastEditTime: 2021-08-13 11:35:40
 * @LastEditors: ruihuag
 * @Description: 命令模式
 * @FilePath: \Test-Demo\Design pattern\行为型\命令模式\index.ts
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

interface IOrder{
	execute: () => void;
}

class Order implements IOrder{
	execute():void {
		console.log('order execute');
	}
}
// 请求类
class Stock{
	private name: string = "ABC";
	private quantity: number = 10;
	public buy(): void{
		console.log(`Stock [Namee:"${this.name}", Quantity: "${this.quantity}"] bought`);
	}
	public sell(): void{
		console.log(`Stock [Namee:"${this.name}", Quantity: "${this.quantity}"] sold`);
	}
}

type TStock = Stock | null| undefined;
// 实现类
class BuyStock implements Order{
	private abcStock: TStock;
	constructor(abcStock: TStock) {
		this.abcStock = abcStock;
	}
	execute(): void{
		this.abcStock?.buy();
	}
}

class SellStock implements Order{
	private abcStock: TStock;
	constructor(abcStock: TStock) {
		this.abcStock = abcStock;
	}
	execute(): void{
		this.abcStock?.sell();
	}
}

class Broker{
	private orderList: Order[] = [];
	public takeOrder(order:Order):void {
		this.orderList.push(order);
	}
	public placeOrders():void {
		this.orderList.map((order: Order) => {
			order.execute();
		})
	}
}

const abcStock:TStock = new Stock();
const buyStockOrder:BuyStock = new BuyStock(abcStock);
const sellStockOrder:SellStock = new SellStock(abcStock);
const broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);

broker.placeOrders();