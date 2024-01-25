const mixin = function (target, mixins) {
  const newObj = target;
  newObj.prototype = Object.create(target.prototype);
  for (let prop in mixins) {
    if (mixins.hasOwnProperty(prop)) {
      newObj.prototype[prop] = mixins[prop];
    }
  }
  return newObj;
}

const Person = {
  run: () => {
    console.log('I can run');
  }
};

const Son = function () {
  console.log('hello world');
};

const User = mixin(Son, Person);
const vnues = new User(); // 'hello world'
vnues.run(); // 'I can run'


Mixin1 = {
  getMessage: function () {
    return 'hello react';
  }
};
var Mixin2 = {
  componentDidMount: function () {
    console.log('Mixin2.componentDidMount()');
  }
}; // 用Mixin来增强现有组件
var MyComponent = React.createClass({
  mixins: [Mixin1, Mixin2],
  render: function () {
    return (<div > {this.getMessage()} < /div>);  
  }
});


const someMixin = {
  // 往组件添加了`newNumber状态`  
  // 如果使用 createReactClass() 方法创建组件，你需要提供一个单独的 getInitialState 方法，让其返回初始 state：  
  getInitialState() {
    return {
      newNumber: 1
    }
  },
  setNewNumber(num) {
    this.setState({
      newNumber: num
    })
  }
} 

//  someOtherMixinconst 
someOtherMixin = {    
  someMethod(number) {    
    console.log(number) 
  }
}

const Composer = React.createClass({  
  mixins: [    
    someMixin,    
    someOtherMixin  
  ],  
  render() {    
    return <p>{this.state.newNumber}</p>  
  },  
  someStaticMethod(num) {    
    this.setNewNumber(num)    
    this.someMethod(num)  
  }
})
class App extends React.Component {    
    constructor(props) {    
      super(props)    
      this.callChildMethod = this.callChildMethod.bind(this)  
    }  
    callChildMethod() {    
      this.refs.composer.someStaticMethod(5)  
    }  
    render() {    
      return (      
        <div>        
          <button onClick={this.callChildMethod}></button>        
          <Composer ref="composer" />      
        </div>    
        )  
    }
}