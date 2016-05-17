Perform type coercion at the beginning of the statement.
Strings:

```javascript
//  => this.reviewScore = 9;

// bad
var totalScore = this.reviewScore + '';

// good
var totalScore = '' + this.reviewScore;

// bad
var totalScore = '' + this.reviewScore + ' total score';

// good
var totalScore = this.reviewScore + ' total score';
```

Use `parseInt` for Numbers and always with a radix for type casting.

```javascript
var inputValue = '4';

// bad
var val = new Number(inputValue);

// bad
var val = +inputValue;

// bad
var val = inputValue >> 0;

// bad
var val = parseInt(inputValue);

// bad
var val = 1 * inputValue;

// good
var val = Number(inputValue);

// good
var val = parseInt(inputValue, 10);
```

Booleans:

```javascript
var age = 0;

// bad
var hasAge = new Boolean(age);

// bad
var hasAge = !!age;

// good
var hasAge = Boolean(age);
```
