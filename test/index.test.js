import { E, I, K, G, D, W, T, V, B, C, P, Q, R } from '../src/index'

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
  G: {
    G1: [
      G(['one', 'two'])(null),
      undefined
    ],
    G2: [
      G(['one', 'two'])(undefined),
      undefined
    ],
    G3: [
      G(['one', 'two'])({}),
      undefined
    ],
    G4: [
      G(['one', 'two'])({ one: {} }),
      undefined
    ],
    G5: [
      G(['one', 'two'])({ one: { two: 'three', } }),
      'three'
    ]
  },
  D: {
    D1: [
      D('default')(G(['one'])({})),
      'default'
    ],
    D2: [
      D('default')(G(['one'])({ one: 'value' })),
      'value'
    ]
  },
  W: {
    W1: [
      W(name => `Hello, ${name}`)(null),
      undefined
    ],
    W2: [
      W(name => `Hello, ${name}`)('SomeName'),
      'Hello, SomeName'
    ]
  },
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
    C(add(5))(mul(10))(sub(15))(E)(20),
    55
  ],
  P: [
    P(add(5))(mul(10))(20),
    250
  ],
  Q: [
    T(10)(Q(add(11))(mul(5))(mul(2))(div(5))(E)),
    42
  ],
  R: [
    R(10)(add(11))(mul(5))(mul(2))(div(5))(E),
    42
  ]
}
