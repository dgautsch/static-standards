 **Names should be formed from the 26 upper and lower case letters (A .. Z, a .. z), the 10 digits (0 .. 9), and `_` (underscore).** Avoid use of international characters because they may not read well or be understood everywhere. 

Do not use `_` (underscore) as the first character of a name. It is sometimes used to indicate privacy, but it does not actually provide [privacy](http://javascript.crockford.com/private.html). If privacy is important, use the forms that provide private members. Avoid conventions that demonstrate a lack of competence.

Avoid single letter names. Be descriptive with your naming.

```javascript
// bad
function q() {
    // ...stuff...
}

// good
function query() {
    // ..stuff..
}
```

Be consistent with either camelCase or underscore_case convention when naming objects, functions, and instances. Don't mix naming conventions within a single project.

```javascript
// bad, matches neither convention:
var OBJEcttsssss = {};
var o = {};
function c() {}

// bad, mixed conventions:
var thisIsMyObject = {};
function this_is_my_function() {}

// good, camelCase:
var thisIsMyObject = {};
function thisIsMyFunction() {}

// good, underscore_case:
var this_is_my_object = {};
function this_is_my_function() {}

```

Use PascalCase when naming constructors or classes. Constructor functions which must be used with the [new](http://yuiblog.com/blog/2006/11/13/javascript-we-hardly-new-ya/) prefix should start with a capital letter. JavaScript issues neither a compile-time warning nor a run-time warning if a required new is omitted. Bad things can happen if new is not used, so the capitalization convention is the only defense we have.

```javascript
// bad
function user(options) {
    this.name = options.name;
}

var bad = new user({
    name: 'nope'
});

// good
function User(options) {
    this.name = options.name;
}

var good = new User({
    name: 'yup'
});
```

Use a leading underscore `_` when naming private properties.

```javascript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```

To indicate that a variable contains a jQuery object, names should start with a `$`:

```javascript
var $email = $("#email");
```

When saving a reference to `this` use `_this`.

```javascript
// bad
function() {
    var self = this;
    return function() {
        console.log(self);
    };
}

// bad
function() {
    var that = this;
    return function() {
        console.log(that);
    };
}

// good
function() {
    var _this = this;
    return function() {
        console.log(_this);
    };
}
```

Name your functions. This is helpful for stack traces.

```javascript
// bad
var log = function(msg) {
    console.log(msg);
};

// good
var log = function log(msg) {
    console.log(msg);
};
```

**Note:** IE8 and below exhibit some quirks with named function expressions.  See [http://kangax.github.io/nfe/](http://kangax.github.io/nfe/) for more info.

If your file exports a single class, your filename should be exactly the name of the class.
```javascript
// file contents
class CheckBox {
  // ...
}
module.exports = CheckBox;

// in some other file
// bad
var CheckBox = require('./checkBox');

// bad
var CheckBox = require('./check_box');

// good
var CheckBox = require('./CheckBox');
```
