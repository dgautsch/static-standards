## Types

**Primitives**: When you access a primitive type you work directly on its value.

  + `string`
  + `number`
  + `boolean`
  + `null`
  + `undefined`

```javascript
var foo = 1;
var bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```
**Complex**: When you access a complex type you work on a reference to its value.

  + `object`
  + `array`
  + `function`

```javascript
var foo = [1, 2];
var bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
