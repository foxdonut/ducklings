import { G, I, K, Q, R, T, V } from '../src/index'

const add = a => b => b + a
const sub = a => b => b - a
const mul = a => b => b * a
const div = a => b => b / a

export default {
  I: [
    I(42),
    42
  ],
  K: [
    K(5)('anything'),
    5
  ],
  Q: [
    T(10)(Q(add(11))(mul(5))(mul(2))(div(5))(G)),
    42
  ],
  R: [
    R(10)(add(11))(mul(5))(mul(2))(div(5))(G),
    42
  ],
  V: [
    V(2)(10)(sub),
    8
  ]
}
