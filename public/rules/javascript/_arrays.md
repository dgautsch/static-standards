## Arrays

Use the literal syntax for array creation.

```javascript
// bad
var items = new Array();

// good
var items = [];
```

Use `Array#push` instead of direct assignment to add items to an array.

```javascript
var someStack = [];


// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

When you need to copy an array use `Array#slice`. [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)

```javascript
var len = items.length;
var itemsCopy = [];
var i;

// bad
for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();
```

To convert an array-like object to an array, use `Array#slice`.

```javascript
function trigger() {
    var args = Array.prototype.slice.call(arguments);
    ...
}
```
