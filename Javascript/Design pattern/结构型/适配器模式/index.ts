interface PowerTarget {
    output12V(): string;
}

class PowerAdaptee {
    output220V() {
        return '220V 交流电';
    }
}

const adapt = (input:string):string => {
    // TODO 具体转换逻辑
    console.log(`${input} 被转换成 12V 直流电`);
    return '12V 直流电';
};

class PowerAdapter extends PowerAdaptee implements PowerTarget {
    public output12V() {
        const input = this.output220V();
        console.log(`电源适配器开始工作，获取：${input}`);
        const output = adapt(input);
        console.log(`电源适配器工作完成，输出：${output}`);
        return output;
    }
}

const target: PowerTarget = new PowerAdapter();
target.output12V();