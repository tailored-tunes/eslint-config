# Tailored Tunes Eslint Config

The global Eslint configuration for all Tailored Tunes JS projects.

## Installation

### Yarn (preferred)
`yarn add -D eslint-config-tailored-tunes`

### NPM (legacy)
`npm install --save-dev eslint-config-tailored-tunes`

In your project root, create a file called `.eslintrc` with the following contents


## Rules

```json
{
  "extends": "tailored-tunes"
}

```

### Usage with babel

```bash
yarn add -D babel-eslint
```

`.eslintrc`
```json
{
  "parser": "babel-eslint",
  "extends": "tailored-tunes"
}

```

### Usage with jest

`.eslintrc`
```json
{
  "extends": "tailored-tunes",
  "env": {
    "jest": true
  }
}

```

## Rules

### Enforced rules
#### array-bracket-spacing
This rule enforces consistent spacing inside array brackets.

Examples of correct use:

```javascript
var arr = ['foo', 'bar'];
var [x,y] = z;
```

#### brace-style
Brace style is closely related to indent style in programming and describes the placement of braces relative to their
control statement and body.

The one true brace style is one of the most common brace styles in JavaScript, in which the opening brace of a block is
placed on the same line as its corresponding statement or declaration.

Example of correct use:

```javascript
if (foo) {
  bar();
} else {
  baz();
}
```

#### camelcase
Enforces that variable names and property names are camelCaseOnly.

#### comma-dangle
This rule enforces consistent use of trailing commas in object and array literals.

Examples of correct use:

```javascript
var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

#### comma-spacing
Enforces spacing around commas.

Examples of correct use:
```javascript
var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

#### comma-style
This rule enforce consistent comma style in array literals, object literals, and variable declarations.

This rule does not apply in either of the following cases:

- comma preceded and followed by linebreak (lone comma)
- single-line array literals, object literals, and variable declarations

Examples of correct use:
```javascript
var foo = 1, bar = 2;

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

#### complexity
[Cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) measures the number of linearly independent paths through a program's source code. This rule
allows setting a cyclomatic complexity threshold.

This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program.
As such, it will warn when the cyclomatic complexity crosses the configured threshold.

The current complexity threshold is 7

#### computed-property-spacing
This rule enforces consistent spacing inside computed property brackets.

Examples of correct use:
```javascript
obj[foo]
obj['foo']
var x = {[b]: a}
obj[foo[bar]]
```

#### consistent-return
Unlike statically-typed languages which enforce that a function returns a specified type of value, JavaScript allows
different code paths in a function to return different types of values.

A confusing aspect of JavaScript is that a function returns undefined if any of the following are true:

- it does not execute a return statement before it exits
- it executes return which does not specify a value explicitly
- it executes return undefined
- it executes return void followed by an expression (for example, a function call)
- it executes return followed by any other expression which evaluates to undefined

If any code paths in a function return a value explicitly but some code path do not return a value explicitly, it
might be a typing mistake, especially in a large function.

Example of correct use:
```javascript
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
}
```

Example of *IN*correct use:
```javascript
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}

function doSomething(condition) {
    if (condition) {
        return true;
    }
}
```

#### consistent-this
This rule enforces two things about variables with the designated alias names for this:

- If a variable with a designated name is declared, it must be either initialized (in the declaration) or assigned (in the same scope as the declaration) the value `this`.
- If a variable is initialized or assigned the value `this`, the name of the variable must be a designated alias.

Examples of correct use:
```javascript
var self;
self = this;

var foo, self;
foo = 42;
self = this;
```

#### curly
JavaScript allows the omission of curly braces when a block contains only one statement. However, it is considered by
many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity.

Examples of correct use:
```javascript
if (foo) {
    foo++;
}

while (bar) {
    baz();
}

if (foo) {
    baz();
} else {
    qux();
}
```

#### default-case
Require a `default` case in `switch` statements

Examples of correct use:
```javascript
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    default:
        // do nothing
}
```

#### dot-notation
In JavaScript, one can access properties using the dot notation (foo.bar) or square-bracket notation (foo["bar"]).
At Tailored Tunes, the dot notation is preferred because it is easier to read, less verbose, and works better with aggressive
JavaScript minimizers.

```javascript
var x = foo.bar;

var x = foo[bar];    // Property name is a variable, square-bracket notation required
```

#### eol-last
Require or disallow newline at the end of files.

Trailing newlines in non-empty files are a common UNIX idiom. Benefits of trailing newlines include the ability to
concatenate or append to files as well as output files to the terminal without interfering with shell prompts.

#### eqeqeq
Require === and !==

Use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=`.

Examples of correct use:
```javascript
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

#### func-style
Enforce the consistent use of function expressions

Examples of correct use:
```javascript
var foo = function() {
    // ...
};
```

#### guard-for-in
Looping over objects with a for in loop will include properties that are inherited through the prototype chain. This
behavior can lead to unexpected items in your for loop.

Iit will warn when `for in` loops do not filter their results with an `if` statement.

Example of correct use:
```javascript
for (key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

#### handle-callback-error
This rule expects that when you're using the callback pattern in Node.js you'll handle the error.

Examples of correct use:
```javascript
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (error) {
    if (error) {}
}
```

#### indent
This rule enforces a consistent indentation style of 2 spaces.

#### keyword-spacing
Enforce consistent spacing before and after keywords.

Examples of correct use:
```javascript
if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

```

#### linebreak-style
This rule enforces consistent `unix` line endings.

#### max-nested-callbacks
Enforce a maximum depth of `3` that callbacks can be nested.

Many JavaScript libraries use the callback pattern to manage asynchronous operations. A program of any complexity will
most likely need to manage several asynchronous operations at various levels of concurrency. A common pitfall that is
easy to fall into is nesting callbacks, which makes code more difficult to read the deeper the callbacks are nested.

#### new-cap
Require constructor names to begin with a capital letter.

The `new` operator in JavaScript creates a new instance of a particular type of object.
That type of object is represented by a constructor function. Since constructor functions are
just regular functions, the only defining characteristic is that `new` is being used as part
of the call. Native JavaScript functions begin with an uppercase letter to distinguish those
functions that are to be used as constructors from functions that are not.

Examples of correct use:
```javascript
var friend = new Person();
```

#### new-parens
Require parentheses when invoking a constructor with no arguments.

Example of correct use:
```javascript
var person = new Person();
var person = new (Person)();
```

#### no-alert
Disallow the use of `alert`

JavaScript's `alert`, `confirm`, and `prompt` functions are widely considered to be obtrusive as UI elements and should
be replaced by a more appropriate custom UI implementation. Furthermore, `alert` is often used while debugging code,
which should be removed before deployment to production.

#### no-array-constructor
Disallow Array constructors.

Use of the `Array` constructor to construct a new array is generally discouraged in favor of array literal notation
because of the single-argument pitfall and because the `Array` global may be redefined. The exception is when the Array
constructor is used to intentionally create sparse arrays of a specified size by giving the constructor a single
numeric argument.

Examples of correct use:
```javascript
Array(500)
new Array(someOtherArray.length)
```

#### no-caller
Disallow Use of caller/callee

The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been
deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

#### no-catch-shadow
This rule is aimed at preventing unexpected behavior in your program that may arise from a bug in IE 8 and earlier,
in which the catch clause parameter can leak into outer scopes. This rule will warn whenever it encounters a catch
clause parameter that has the same name as a variable in an outer scope.

Examples of correct use:
```javascript
var err = "x";

try {
    throw "problem";
} catch (e) {

}

function err() {
    // ...
};

try {
    throw "problem";
} catch (e) {

}
```

#### no-cond-assign
Disallow assignment operators in conditional statements.

This rule disallows ambiguous assignment operators in test conditions of `if`, `for`, `while`, and `do...while` statements.

Example of correct use:
```javascript
// Assignment replaced by comparison
var x;
if (x === 0) {
    var b = 1;
}
```
#### no-console
Disallow the use of `console`

#### no-constant-condition
This rule disallows constant expressions in the test condition of:

- `if`, `for`, `while`, or `do...while` statement
- `?:` ternary expression

Examples of correct use:
```javascript
if (x === 0) {
    doSomething();
}

for (;;) {
    doSomethingForever();
}

while (typeof x === "undefined") {
    doSomething();
}

do {
    doSomething();
} while (x);

var result = x !== 0 ? a : b;
```

Examples of *IN*correct use:
```javascript
if (false) {
    doSomethingUnfinished();
}

if (void x) {
    doSomethingUnfinished();
}

for (;-2;) {
    doSomethingForever();
}

while (typeof x) {
    doSomethingForever();
}

do {
    doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;
```

#### no-continue
This rule disallows continue statements.

#### no-control-regex
Disallow control characters in regular expressions.

Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in
JavaScript strings so a regular expression containing these characters is most likely a mistake.

#### no-debugger
Disallow the use of the `debugger` keyword.

#### no-delete-var
Disallows the use of the `delete` operator on variables.

Example of *IN*correct use:
``` javascript
var x;
delete x;
```

#### no-div-regex
Disallow regular expressions that look like division.
This is used to disambiguate the division operator to not confuse users.

Example of correct use
```javascript
function bar() { return /\=foo/; }
```

Example of *IN*correct use
```javascript
function bar() { return /=foo/; }
```

#### no-dupe-args
Disallows duplicate parameter names in function declarations or expressions. It does not apply to arrow functions or
class methods, because the parser reports the error.

If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.

#### no-dupe-keys
Disallow duplicate keys in object literals.
Multiple properties with the same key in object literals can cause unexpected behavior in our application.

#### no-else-return
If an if block contains a return statement, the else block becomes unnecessary.
Its contents can be placed outside of the block.

Example of correct use
```javascript
function foo() {
    if (x) {
        return y;
    }

    return z;
}
```

Example of *IN*correct use
```javascript
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}
```

#### no-empty
Empty block statements, while not technically errors, usually occur due to refactoring that wasn't completed.
They can cause confusion when reading code.

#### no-empty-character-class
Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

Examples of correct use
```javascript
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]
```

Examples of *IN*correct use
```javascript
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null
```

#### no-eq-null
Comparing to `null` without a type-checking operator (`==` or `!=`), can have unintended results as the comparison will
evaluate to `true` when comparing to not just a `null`, but also an `undefined` value.

Examples of correct use:
```javascript
if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}
```

Examples of *IN*correct use
```javascript
if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}
```

#### no-eval
JavaScript's `eval()` function is potentially dangerous and is often misused. Using `eval()` on untrusted code can
open a program up to several different injection attacks. The use of `eval()` in most contexts can be substituted for a
better, alternative approach to a problem.

#### no-ex-assign
Disallow reassigning exceptions in `catch` clauses.

Examples of correct use
```javascript
try {
    // code
} catch (e) {
    var foo = 10;
}
```

Examples of *IN*correct use
```javascript
try {
    // code
} catch (e) {
    e = 10;
}
```

#### no-extend-native
Disallow extending of native objects.

In JavaScript, you can extend any object, including builtin or 'native' objects. Sometimes people change the behavior
of these native objects in ways that break the assumptions made about them in other parts of the code.

#### no-extra-bind
Disallow unnecessary function binding.

The `bind()` method is used to create functions with specific `this` values and, optionally, binds arguments to specific
values. When used to specify the value of `this`, it's important that the function actually use `this` in its function
body.

#### no-extra-boolean-cast
Disallow unnecessary boolean casts.

In contexts such as an `if` statement's test where the result of the expression will already be coerced to a `Boolean`,
casting to a `Boolean` via double negation (`!!`) or a `Boolean` call is unnecessary.

#### no-extra-semi
Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary.
While not technically an error, extra semicolons can cause confusion when reading code.

#### no-fallthrough
Disallow case statement fallthrough.

This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough
scenarios that are not marked by a comment.

Examples of correct use:
```javscript
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}
```

#### no-floating-decimal
Float values in JavaScript contain a decimal point, and there is no requirement that the decimal point be preceded or
followed by a number.

Examples of correct use
```javascript
var num = 0.5;
var num = 2.0;
var num = -0.7;
```

#### no-func-assign
Disallow reassigning function declarations

JavaScript functions can be written as a FunctionDeclaration function `foo() { ... }` or as a
FunctionExpression `var foo = function() { ... };`.
While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration
is often indicative of a mistake or issue.

#### no-implied-eval

```javascript
setTimeout("alert('Hi!');", 100);
```

This is considered an implied `eval()` because a string of JavaScript code is passed in to be interpreted.
The same can be done with `setInterval()` and `execScript()`. Both interpret the JavaScript code in the global scope.
For both `setTimeout()` and `setInterval()`, the first argument can also be a function, and that is considered safer and is
 more performant

Example of correct use:
```javascript
setTimeout(function() {
    alert("Hi!");
}, 100);
```

#### no-inner-declarations
Disallow variable or function declarations in nested blocks.

Examples of correct use:
```javascript
function doSomething() { }

function doSomethingElse() {
    function doAnotherThing() { }
}

if (test) {
    asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
    fn = function fnExpression() { };
}
```

Examples of *IN*correct use
```javascript
if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}
```

#### no-invalid-regexp
Disallow invalid regular expression strings in RegExp constructors.

Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature to mixed tabs and spaces.

Various whitespace characters can be inputted by programmers by mistake for example from copying or keyboard shortcuts. Pressing Alt + Space on macOS adds in a non breaking space character for example.

Known issues these spaces cause:

- Zero Width Space
  - Is NOT considered a separator for tokens and is often parsed as an Unexpected token ILLEGAL
  - Is NOT shown in modern browsers making code repository software expected to resolve the visualization
- Line Separator
  - Is NOT a valid character within JSON which would cause parse errors

#### no-iterator
The `__iterator__` property was a SpiderMonkey extension to JavaScript that could be used to create custom iterators
that are compatible with JavaScript's `for in` and `for each` constructs. However, this property is now obsolete,
so it should not be used.

#### no-label-var
Disallow labels that are variables names

Example of correct use
```javascript
// The variable that has the same name as the label is not in scope.

function foo() {
  var q = t;
}

function bar() {
q:
  for(;;) {
    break q;
  }
}
```

#### no-labels
Disallow labeled statements

Examples of correct use:
```javascript
var f = {
    label: "foo"
};

while (true) {
    break;
}

while (true) {
    continue;
}
```

Examples of *IN*correct use:
```javascript
label:
    while(true) {
        // ...
    }

label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }

label:
    switch (a) {
    case 0:
        break label;
    }

label:
    {
        break label;
    }

label:
    if (a) {
        break label;
    }
```

#### no-lone-blocks
In JavaScript, prior to ES6, standalone code blocks delimited by curly braces do not create a new scope and have no use.

In ES6, code blocks may create a new scope if a block-level binding (`let` and `const`), a class declaration or a
function declaration (in strict mode) are present. A block is not considered redundant in these cases.

### Explicity disabled rules
The rules below have been explicitly disabled because they are either not useful, or outright
promoting bad habits.

#### accessor-pairs
This rule enforces a style where it requires to have a getter for every property which has a setter defined.

It has been disabled because _generic_ getters and setters in general are a bad smell, and should not be used.
Most commonly getters and setters are simply masking publicy modifyable internal state.

#### dot-location
This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines
around the dot in a member expression.

#### func-name
Require or disallow named function expressions

#### key-spacing
This rule enforces spacing around the colon in object literal properties. It can verify each property individually, or
it can ensure horizontal alignment of adjacent properties in an object literal.

#### lines-around-comment
Require empty lines around comments.

#### newline-after-var
Require or disallow an empty line after variable declarations.

#### no-inline-comments
We allow inlien comments. Since code should be documenting itself, inline comments can be
used to make a point stronger.
