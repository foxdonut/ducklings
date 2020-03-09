import { G, I, K, T, V, B, C, D, P, Q, R } from '../src/index'

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
  T: [
    T(5)(add(10)),
    15
  ],
  V: [
    V(2)(10)(sub),
    8
  ],
  B: [
    B(add(5))(mul(10))(20),
    205
  ],
  C: [
    C(add(5))(mul(10))(sub(15))(G)(20),
    55
  ],
  D: [
    D(20)(add(5))(mul(10))(sub(15))(G),
    55
  ],
  P: [
    P(add(5))(mul(10))(20),
    250
  ],
  Q: [
    T(10)(Q(add(11))(mul(5))(mul(2))(div(5))(G)),
    42
  ],
  R: [
    R(10)(add(11))(mul(5))(mul(2))(div(5))(G),
    42
  ]
}
