class Antzone{}
Antzone.webName = 'guanruihua'
console.log(Antzone.webName)

class Antzone2 {
  static show() {
    this.done();
  }
  static done() {
    console.log('guanruihua')
  }
  show() {
    console.log('guanruihua2')
  }
}

let ant = new Antzone2()
Antzone2.done();
ant.show()

class C extends Antzone2{}

C.done();

class F {
  static func() { 
    console.log('guanruihua')

  } 
}

F.address = '珠海'
class E extends F {}
E.func();
console.log(E.address)
