#### Whitespace

Use soft tabs set to 4 spaces. ([Stack Overflow: Soft tabs or hard tabs?](http://stackoverflow.com/a/9446364/1096083))

```javascript
// no
function() {
âˆ™âˆ™var name;
}

// no
function() {
âˆ™var name;
}

// yeah
function() {
âˆ™âˆ™âˆ™âˆ™var name;
}
```

Place 1 space before the leading brace.

```javascript
// bad
function test(){
    console.log('test');
}

// good
function test() {
    console.log('test');
}

// bad
dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog'
});
```

Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space before the argument list in function calls and declarations.

```javascript
// bad
if(isJedi) {
    fight ();
}

// good
if (isJedi) {
    fight();
}

// bad
function fight () {
    console.log ('Swooosh!');
}

// good
function fight() {
    console.log('Swooosh!');
}
```

Set off operators with spaces.

```javascript
// bad
var x=y+5;

// good
var x = y + 5;
```

End files with a single newline character.

```javascript
// bad
(function(global) {
    // ...stuff...
})(this);
```

```javascript
// bad
(function(global) {
    // ...stuff...
})(this);â†µ
â†µ
```

```javascript
// good
(function(global) {
    // ...stuff...
})(this);â†µ
```

Use indentation when making long method chains. Use a leading dot, which emphasizes that the line is a method call, not a new statement.

```javascript
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
    find('.selected').
        highlight().
        end().
    find('.open').
        updateCount();

// good
$('#items')
    .find('.selected')
        .highlight()
        .end()
    .find('.open')
        .updateCount();

// bad
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
var leds = stage.selectAll('.led')
  .data(data)
  .enter().append('svg:svg')
      .classed('led', true)
      .attr('width', (radius + margin) * 2)
  .append('svg:g')
      .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
      .call(tron.led);
```

Leave a blank line after blocks and before the next statement

```javascript
// bad
if (foo) {
    return bar;
}
return baz;

// good
if (foo) {
    return bar;
}

return baz;

// bad
var obj = {
    foo: function() {
    },
    bar: function() {
    }
};
return obj;

// good
var obj = {
    foo: function() {
    },

    bar: function() {
    }
};

return obj;
```
