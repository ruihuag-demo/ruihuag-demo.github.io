/*
 * @Author: ruihuag
 * @Date: 2021-08-13 15:29:28
 * @LastEditTime: 2021-08-13 16:36:23
 * @LastEditors: ruihuag
 * @Description: 
 * @FilePath: \Test-Demo\Design pattern\创建型\生成器&创建者模式\创建者模式.ts
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

	class Hamburg {
    name: string;
    // 可选参数也可以使用 set，但是 ts 中直接在这里声明更方便, 当然如果是 private，需要使用 set 来封装
    meatType?: string;
    vegetableType?: string;
    private breadNum?: number;

  
    constructor(name: string) { // 如果我们不用建造者模式，那么产品类的 constructor 这里将要传入所有参数
        this.name = name; // 必选参数可以放在这里，步骤具体实现可变的就抽出来
    }

    // 利用 ts 的 set 当然也是 okay 的，比如 set num(num){ this.breadNum = num; }
    setBreadNum(num: number) {
        this.breadNum = num;
    }
}

// 原本放在产品类的构建步骤被转移到了建造者类，由具体的建造者实现
abstract class HamburgBuilder {
    abstract buildBread(breadNum: number): void;
    abstract buildMeat(meatType: string): void;
    abstract buildVegetable(vegetableTYpe: string): void;
    abstract createHamburg(): Hamburg;
}

class BeefHamburgBuilder extends HamburgBuilder {
    // 这里如果可以确定 name，就不需要用户再传入了
    private hamburg: Hamburg = new Hamburg('牛肉汉堡');

    buildBread(breadNum: number): void {
        console.log(`制作牛肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
    }

    buildMeat(meatType: string): void {
        console.log(`制作牛肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
    }

    buildVegetable(vegetableType: string): void {
        console.log(`制作牛肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}

class PorkHamburgBuilder extends HamburgBuilder {
    private hamburg: Hamburg = new Hamburg('猪肉汉堡');

    buildBread(breadNum: number): void {
        console.log(`制作猪肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
    }

    buildMeat(meatType: string): void {
        console.log(`制作猪肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
    }

    buildVegetable(vegetableType: string): void {
        console.log(`制作猪肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}

// 我们用 director 来封装顺序，如果要改变工序，只要新增一个 director 或者新增一个 construct 即可
class HamburgDirector {
    // 顺序1，包含三道工序
    static construct1(builder: HamburgBuilder, breadNum: number, meatType: string, vegetableType: string): Hamburg {
        builder.buildBread(breadNum);
        builder.buildMeat(meatType);
        builder.buildVegetable(vegetableType);
        return builder.createHamburg();
    }

    // 顺序2，包含两道工序
    static construct2(builder: HamburgBuilder, breadNum: number, meatType: string): Hamburg {
        builder.buildMeat(meatType);
        builder.buildBread(breadNum);
        return builder.createHamburg();
    }
}

const beefHamburgBuilder = new BeefHamburgBuilder();
const porkHamburgBuilder = new PorkHamburgBuilder();

HamburgDirector.construct1(beefHamburgBuilder, 2, 'beef', 'carrot');
HamburgDirector.construct2(porkHamburgBuilder, 3, 'pork');

}