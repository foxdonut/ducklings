export const G = {}

export const B = f => g => a => f(g(a))
export const I = a => a
export const K = a => () => a
export const P = f => g => a => g(f(a))
export const T = a => f => f(a)
export const V = a => b => f => f(a)(b)

export const Q = f => g => g === G ? a => f(a) : Q(P(f)(g))
export const R = a => f => g => g === G ? f(a) : R(a)(P(f)(g))
