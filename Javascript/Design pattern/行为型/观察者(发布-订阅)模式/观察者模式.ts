/*
 * File: 观察者模式.js
 * Project: Design pattern
 * Author: ruihuag
 * File Created: Monday, 9th August 2021 11:25:09 am
 * Modified By: ruihuag
 * Last Modified: Monday, 9th August 2021 11:45:32 am
 */

interface Msg { // Msg 可以按照任意约定的接口格式去约束，这里假设是如下类型消息
    name: string;
    value: string;
}

interface IState{
    [key: string]: any;
}

interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(msg: Msg): void;
}

interface Observer {
    update(msg: Msg): void
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: IState = {};
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    removeObserver(observer: Observer): void {
        const index = this.observers.findIndex(val => val === observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(msg: Msg): void {
        this.observers.forEach(observer => observer.update(msg));
    }
    setState(name:string, value:any): void {
        this.state[name] = value;
        console.log(`${name}状态更新为：${value}`);
        console.log('通知所有观察者');
        this.notifyObservers({
            name,
            value,
        });
    }
}

class ConcreteObserver implements Observer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    update(msg: Msg): void {
        console.log(`${this.name} 观察到：${msg.name}状态更新为：${msg.value}`);
    }
}

const concreteSubject = new ConcreteSubject();
const concreteObserver1 = new ConcreteObserver('小王');
const concreteObserver2 = new ConcreteObserver('小明');

concreteSubject.registerObserver(concreteObserver1);
concreteSubject.registerObserver(concreteObserver2);
concreteSubject.setState('天气', '多云');

concreteSubject.removeObserver(concreteObserver2);
concreteSubject.setState('天气', '晴');