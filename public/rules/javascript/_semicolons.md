#### Semicolons

**[Yes, have some.](https://www.youtube.com/watch?v=pdMGPvODN44)**

```javascript
// bad
(function() {
    var name = 'Skywalker'
    return name
})()

// good
(function() {
    var name = 'Skywalker';
    return name;
})();

// good (guards against the function becoming an argument when two files with IIFEs are concatenated)
;(function() {
    var name = 'Skywalker';
    return name;
})();
```

[Read more](http://stackoverflow.com/a/7365214/1712802).
