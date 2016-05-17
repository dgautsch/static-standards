#### Blocks

Use braces with all multi-line blocks.

```javascript
// bad
if (test)
    return false;

// good
if (test) return false;

// good
if (test) {
    return false;
}

// bad
function() { return false; }

// good
function() {
    return false;
}
```

If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your
`if` block's closing brace.

```javascript
// bad
if (test) {
    thing1();
    thing2();
}
else {
    thing3();
}

// good
if (test) {
    thing1();
    thing2();
} else {
    thing3();
}
```

The `if` class of statements should have the following form:

```javascript
    if (condition) {
        // statements
    }

    if (condition) {
        // statements
    } else {
        // statements
    }

    if (condition) {
        // statements
    } else if (condition) {
        // statements
    } else {
        // statements
    }
```
A `for` class of statements should have the following form:

```javascript

    for (initialization; condition; update) {
        // statements
    }

    for (variable in object) {
        if (filter) {
            // statements
        }
    }
```

The first form should be used with arrays and with loops of a predeterminable number of iterations.

The second form should only be used with objects. Be aware that members that are added to the prototype of the object will be included in the enumeration. It is wise to program defensively by using the `hasOwnProperty` method to distinguish the true members of the object:

```javascript
    for (variable in object) {
        if (object.hasOwnProperty(variable)) {
            // statements
        }
    }
```

A `while` statement should have the following form:

```javascript
    while (condition) {
        // statements
    }
```
A `do` statement should have the following form:

```javascript
    do {
        // statements
    } while (condition);
```

Unlike the other compound statements, the do statement always ends with a `;` (semicolon).

A switch statement should have the following form:

```javascript
    switch (expression) {
    case expression:
        // statements
    default:
        // statements
    }
```

Each `case` is aligned with the `switch`. This avoids over-indentation.

Each group of statements (except the `default`) should end with `break`, `return`, or `throw`. If your intention is to fall though into the next case, it must be indicated with a comment in place of the `break`.

The `try` class of statements should have the following form:

```javascript
    try {
        // statements
    } catch (variable) {
        // statements
    }

    try {
        // statements
    } catch (variable) {
        // statements
    } finally {
        // statements
    }
```

Use of the `continue` statement should be limited since it can obscure control flow in a function. It is best used at the start of a loop to handle pre-conditions. This technique reduces excessive indentation.

The `with` statement should not be used. (Learn more at http://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)
