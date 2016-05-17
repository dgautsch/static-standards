#### Variables

Always use `var` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace.

```javascript
// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();
```

Use one `var` declaration per variable.
It's easier to add new variable declarations this way, and you never have
to worry about swapping out a `;` for a `,` or introducing punctuation-only
diffs.

```javascript
// bad
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
var items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';
```

Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```javascript
// bad
var i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
var i;
var items = getItems();
var dragonball;
var goSportsTeam = true;
var len;

// good
var items = getItems();
var goSportsTeam = true;
var dragonball;
var length;
var i;
```

Declare all variables before use. JavaScript does not require this, but doing so makes the program easier to read and makes it easier to detect undeclared variables that may become implied [globals](http://yuiblog.com/blog/2006/06/01/global-domination/).

Use of global variables should be minimized. Do not use implied global variables.

Assign variables at the top of their scope. This helps avoid issues with variable declaration and assignment hoisting related issues.

```javascript
// bad
function() {
    test();
    console.log('doing stuff..');

    //..other stuff..

    var name = getName();

    if (name === 'test') {
        return false;
    }

    return name;
}

// good
function() {
    var name = getName();

    test();
    console.log('doing stuff..');

    //..other stuff..

    if (name === 'test') {
        return false;
    }

    return name;
}

// bad - unnecessary function call
function() {
    var name = getName();

    if (!arguments.length) {
        return false;
    }

    this.setFirstName(name);

    return true;
}

// good
function() {
    var name;

    if (!arguments.length) {
        return false;
    }

    name = getName();
    this.setFirstName(name);

    return true;
}
```
