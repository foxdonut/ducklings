export const G = {}

export const I = a => a
export const K = a => () => a
export const T = a => f => f(a)
export const V = a => b => f => f(a)(b)

const N = F => f => g => g === G ? a => f(a) : N(F)(F(f)(g))
const TN = F => a => f => g => g === G ? f(a) : TN(F)(a)(F(f)(g))

export const B = f => g => a => f(g(a))
export const C = N(B)
export const D = TN(B)

export const P = f => g => a => g(f(a))
export const Q = N(P)
export const R = TN(P)
