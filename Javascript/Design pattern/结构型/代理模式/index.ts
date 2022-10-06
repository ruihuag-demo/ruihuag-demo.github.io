{
interface Subject {
    doOperation(...items: Array<any>): void;
}

class RealSubject implements Subject {
    doOperation(...items: Array<any>): void {
        console.log(`真实的目标对象在执行操作，参数：${items}`); // 真实的目标对象在执行操作，参数：do work,sing
    }
}

class MyProxy implements Subject {
    private target: RealSubject;
    constructor(target: RealSubject) {
        this.target = target;
    }
    doOperation(...items: Array<any>): void {
        console.log(`代理对象在执行操作，参数：${items}`); // 代理对象在执行操作，参数：do work,sing
        this.target.doOperation(...items);
    }
}

const proxy = new MyProxy(new RealSubject());
proxy.doOperation('do work', 'sing');

}