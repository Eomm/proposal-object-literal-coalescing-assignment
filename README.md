# proposal-object-literal-coalescing-assignment

A proposal to introduce new assignment forms for ECMAScript object literals


```js
const obj = {
  a: undefined,
  b?: undefined
}

Object.hasOwn(obj, 'a') // true
Object.hasOwn(obj, 'b') // false
```
