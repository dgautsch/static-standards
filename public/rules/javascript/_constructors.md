```javascript
function Jedi() {
    console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
      console.log('fighting');
  },

  block: function block() {
      console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
    console.log('fighting');
};

Jedi.prototype.block = function block() {
    console.log('blocking');
};
```

Methods can return `this` to help with method chaining.

```javascript
// bad
Jedi.prototype.jump = function() {
    this.jumping = true;
    return true;
};

Jedi.prototype.setHeight = function(height) {
    this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
Jedi.prototype.jump = function() {
    this.jumping = true;
    return this;
};

Jedi.prototype.setHeight = function(height) {
    this.height = height;
    return this;
};

var luke = new Jedi();

luke.jump()
    .setHeight(20);
```
