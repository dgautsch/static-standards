#### Commas

Leading commas: **No, please.**

```javascript
// bad
var story = [
    once
  , upon
  , aTime
];

// good
var story = [
    once,
    upon,
    aTime
];

// bad
var hero = {
    firstName: 'Bob'
  , lastName: 'Parr'
  , heroName: 'Mr. Incredible'
  , superPower: 'strength'
};

// good
var hero = {
    firstName: 'Bob',
    lastName: 'Parr',
    heroName: 'Mr. Incredible',
    superPower: 'strength'
};
```

Additional trailing comma: **Nope.** This can cause problems with IE6/7 and IE9 if it's in quirksmode.

```javascript
// kaboooom
var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn',
};

var heroes = [
    'Batman',
    'Superman',
];

// phew
var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn'
};

var heroes = [
    'Batman',
    'Superman'
];
```
