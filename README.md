# ducklings

Combinators!

## Usage

Install:

```
npm i ducklings
```

Use:

```javascript
import { I, K, R, /* ... */ } from 'ducklings'
```

## API

Here are the provided combinators:

```javascript
export const E = {}

export const I = a => a
export const K = a => () => a
export const G = ps => a => ps.reduce((o, p) => o == undefined ? undefined : o[p] , a)
export const T = a => f => f(a)
export const V = a => b => f => f(a)(b)

const N = F => f => g => g === E ? a => f(a) : N(F)(F(f)(g))
const TN = F => a => f => g => g === E ? f(a) : TN(F)(a)(F(f)(g))

export const B = f => g => a => f(g(a))
export const C = N(B)
export const D = TN(B)

export const P = f => g => a => g(f(a))
export const Q = N(P)
export const R = TN(P)
```

## What?

Okay, here are the provided combinators with some explanations and examples of how you would use
them:

### Identity (I)

You need a function that just passes a value through. Use `I`.

### Constant (K)

You have a value, but you need to pass a function. Use `K(value)`.

### Get (G)

You want to safely get a deep property from an object.

```javascript
// This will return `undefined` without blowing up if the object is `null` or `undefined`,
// or if any property along the path does not exist.
G(['deeply', 'nested', 'path'])(object)
```

### Thrush (T)

You want to pass a value to a function, but you want the value to be on the left side instead of on
the right side.

### Vireo (V)

You want to "hold on" to parameters to a function.

### Composition (B)

You want to create a function out of two other functions, passing the result of one to the next,
from right to left.

```javascript
const fn = B(fn1)(fn2)
// fn = value => fn1( fn2(value) )
```

### Composition (C)

You want to create a function out of any number of other functions, passing the result of one to the
next, from right to left. Pass `E` (extract) at the end to indicate the end of the pipeline.

```javascript
const fn = C(fn1)(fn2)(fn3)(fn4)(E)
// fn = value => fn1( fn2( fn3( fn4(value) ) ) )
```

### Composition (D)

You want to pass a value through any number of other functions, passing the result of one to the
next, from right to left. Pass `E` (extract) at the end to indicate the end of the pipeline.

```javascript
const result = D(value)(fn1)(fn2)(fn3)(fn4)(E)
// result = fn1( fn2( fn3( fn4(value) ) ) )
```

### Pipeline (P)

You want to create a function out of two other functions, passing the result of one to the next,
from left to right.

```javascript
const fn = P(fn1)(fn2)
// fn = value => fn2( fn1(value) )
```

### Pipeline (Q)

You want to create a function out of any number of other functions, passing the result of one to the
next, from left to right. Pass `E` (extract) at the end to indicate the end of the pipeline.

```javascript
const fn = Q(fn1)(fn2)(fn3)(fn4)(E)
// fn = value => fn4( fn3( fn2( fn1(value) ) ) )
```

### Pipeline (R)

You want to pass a value through any number of other functions, passing the result of one to the
next, from left to right. Pass `E` (extract) at the end to indicate the end of the pipeline.

```javascript
const result = R(value)(fn1)(fn2)(fn3)(fn4)(E)
// result = fn4( fn3( fn2( fn1(value) ) ) )
```

## Further Reading and Watching

- [Common combinators in JavaScript](https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45)
- A Flock of Functions, [Part I](https://youtube.com/watch?v=3VQ382QG-y4) and [Part II](https://youtube.com/watch?v=pAnLQ9JwN-E)
- [combinators-js](https://github.com/benji6/combinators-js)
- [tinyfunk](https://github.com/flintinatux/tinyfunk)
