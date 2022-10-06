// const { _util } = require('rh-js-methods')
import { runMain } from 'module'
import { _util } from 'rh-js-methods'

type obj = {
  name: string
  age: number
  gender: boolean
}

type obj1 = {
  readonly name: string
  age: number
  gender?: boolean
}
type IsString<T> = T extends string ? true : false

type Record<K extends string | number | symbol, T> = { [P in K]: T }

type Readonly<T> = {
  -readonly [Key in keyof T]: T[Key]
}

export default function () {
  const a: obj1 = {
    age: 24,
    gender: true,
    name: 'ruihuag'
  }
  // a.name = 'ruihuaggggg'

  let b1: IsString<boolean> = false
  let b2: IsString<string> = true
  function run(str: string) {
    // b = str
  }
  run('')

  let c1: Record<number | string, string> = { 1: 'a', a: 'c' }
  c1.a = 'ddd'

  let d: Readonly<{ a: any; b: any }> = {
    a: 'a',
    b: 'b'
  }

  _util.logGroup('type', a, b1, b2, c1, d)
}
