export const E = {}

export const I = a => a
export const K = a => () => a
export const G = ps => a => ps.reduce((o, p) => o == undefined ? undefined : o[p] , a)
export const D = a => b => b == undefined ? a : b
export const W = f => a => a == undefined ? undefined : f(a)
export const T = a => f => f(a)
export const V = a => b => f => f(a)(b)

const N = F => f => g => g === E ? a => f(a) : N(F)(F(f)(g))
const TN = F => a => f => g => g === E ? f(a) : TN(F)(a)(F(f)(g))

export const B = f => g => a => f(g(a))
export const C = N(B)

export const P = f => g => a => g(f(a))
export const Q = N(P)
export const R = TN(P)
