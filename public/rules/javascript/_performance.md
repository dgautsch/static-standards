  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)


### Miscellaneous

#### BLOCK SCOPE
In JavaScript blocks do not have scope. Only functions have scope. Do not use blocks except as required by the compound statements.

#### ASSIGNMENT EXPRESSIONS
Avoid doing assignments in the condition part of if and while statements.

Is
```javascript
    if (a = b) {
```
a correct statement? Or was

```javascript
    if (a == b) {
```
intended? Avoid constructs that cannot easily be determined to be correct.

####`===` AND `!==` OPERATORS.
It is almost always better to use the `===` and `!==` operators. The `==` and `!=` operators do type coercion. In particular, do not use `==` to compare against falsy values.


####CONFUSING PLUSES AND MINUSES
Be careful to not follow a `+` with `+` or `++`. This pattern can be confusing. Insert parenthesis between them to make your intention clear.
```javascript
    total = subtotal + +myInput.value;
```
is better written as
```javascript
    total = subtotal + (+myInput.value);
```
so that the `+ +` is not misread as `++`.


####`EVAL` IS EVIL
The `eval` function is the most misused feature of JavaScript. Avoid it.

`eval` has aliases. Do not use the `Function` constructor. Do not pass strings to `setTimeout` or `setInterval`.

Most uses of `eval` involve the developer generating some code on the fly to include a variable's value in the source. This is inefficient and can be avoided with some simple refactoring. When you're tempted to use `eval` in this way, stop and consider alternative implementations that will be more readable and maintainable in the future.
