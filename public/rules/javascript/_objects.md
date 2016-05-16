## Objects

Use the literal syntax for object creation.

```javascript
// bad
var item = new Object();

// good
var item = {};
```

Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61).

```javascript
// bad
var superman = {
    default: { clark: 'kent' },
    private: true
};

// good
var superman = {
    defaults: { clark: 'kent' },
    hidden: true
};
```

Use readable synonyms in place of reserved words.

```javascript
// bad
var superman = {
    class: 'alien'
};

// bad
var superman = {
    klass: 'alien'
};

// good
var superman = {
    type: 'alien'
};
```
