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

### Variations

#### Explicit string key

```js
const obj = {
  'a' : undefined,
  'b' ?: undefined
  //  ^ 
  //   \___ Parsing the `?:` token    
}

Object.hasOwn(obj, 'a') // true
Object.hasOwn(obj, 'b') // false
```

#### Variable key alias

```js
// Explicit string key
const a = undefined, b = undefined;
const obj = {
  a,
  b?
// ^ 
//  \___ Parsing the `?` token    
}

Object.hasOwn(obj, 'a') // true
Object.hasOwn(obj, 'b') // false
```
