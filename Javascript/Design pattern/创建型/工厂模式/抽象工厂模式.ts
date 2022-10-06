/*
 * @Author: ruihuag
 * @Date: 2021-08-13 16:18:30
 * @LastEditTime: 2021-08-13 16:28:48
 * @LastEditors: ruihuag
 * @Description: 
 * @FilePath: \Test-Demo\Design pattern\创建型\工厂模式\抽象工厂模式.ts
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
interface IDrink {
    name: string; // 饮品名称
    make(): void; // 制作饮品
    show(): void; // 展示饮品
}

// 茶
class Tea implements IDrink {
    name: string;
    constructor(name:string) {
        this.name = name;
        this.make();
    }
    make(): void {
        console.log('make tea');
    }
    show(): void {
        console.log(`this is ${this.name}`);
    }
}

// 果汁
class Juice implements IDrink {
    name: string;
    constructor(name:string) {
        this.name = name;
        this.make();
    }
    make(): void {
        console.log('make juice');
    }
    show(): void {
        console.log(`this is ${this.name}`);
    }
}

interface IFood {
    name: string;
    make(): void; // 制作食品
    show(): void; // 展示食品
}

// 炸鸡
class FriedChicken implements IFood {
    name: string;
    constructor(name:string) {
        this.name = name;
        this.make();
    }
    make(): void {
        console.log('make FriedChicken');
    }
    show(): void {
        console.log(`this is ${this.name}`);
    }
}

// 汉堡
class Hamburg implements IFood {
    name: string;
    constructor(name:string) {
        this.name = name;
        this.make();
    }
    make(): void {
        console.log('make hamburg');
    }
    show(): void {
        console.log(`this is ${this.name}`);
    }
}

interface IMealFactory {
    createDrink(): IDrink;
    createFood(): IFood;
}

class MealAFactory implements IMealFactory {
	createDrink(): Tea {
		return new Tea('tea');
	}
	createFood(): FriedChicken {
		return new FriedChicken('fried chicken');
	}
}

class MealBFactory implements IMealFactory {
	createDrink(): Juice {
		return new Juice('juice');
	}
	createFood(): Hamburg {
		return new Hamburg('hamburg');
	}
}

const mealAFactory = new MealAFactory();
mealAFactory.createDrink().show();
mealAFactory.createFood().show();
const mealBFactory = new MealBFactory();
mealBFactory.createDrink().show();
mealBFactory.createFood().show();

}