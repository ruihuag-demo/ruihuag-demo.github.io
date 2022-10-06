/*
 * @Author: ruihuag
 * @Date: 2021-08-13 15:38:50
 * @LastEditTime: 2021-08-13 16:17:40
 * @LastEditors: ruihuag
 * @Description: 简单工厂模式
 * @FilePath: \Test-Demo\Design pattern\创建型\工厂模式\简单工厂模式.ts
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
        constructor(name: string) {
            this.name = name;
            this.make();
        }
        make(): void {
            console.log('make tea');
        }
        show(): void {
            console.log(`this is ${this.name}`)
        }
    }

    // 果汁
    class Juice implements IDrink {
        name: string;
        constructor(name: string) {
            this.name = name;
            this.make();
        }
        make(): void {
            console.log('make juice');
        }
        show(): void {
            console.log(`this is ${this.name}`)
        }
    }

    class SimpleDrinkFactory {
        static createDrink(type: string): IDrink {
            switch (type) {
                case 'tea':
                    return new Tea('tea');
                case 'juice':
                    return new Juice('juice');
                default:
                    return new Juice('juice');
            }
        }
    }

    // 告诉简单工厂想要一杯茶
    const tea: Tea = SimpleDrinkFactory.createDrink('tea');
    tea.show();
    // 告诉简单工厂想要一杯果汁
    const juice: Juice = SimpleDrinkFactory.createDrink('juice');
    juice.show();

}