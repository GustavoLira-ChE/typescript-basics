# *This repo containe a basic TypeScript tutorial*

First to use TypeScript into a project it's necessary install TypeScript with the command:
```NPM
npm install typescript --D 
```

Once TS is installed, we can use `npx tsc` command, for example to know the version of TS, we can use:
```NPM
npx tsc --version
```

## *@ts-check*
To enable Static code checking in a JavaScript file we can use `// @ts-check` to the first line in the `.js` file to have TS raise it as an error.

## *Using TypeScript*
We can see the file `"file-01.ts"` if we can transpilate this .ts file we can use:
```NPM
npx tsc src/file-01.ts
```

If we don't have any error, a new ".js" file is generated.
By default ts transpilation, convert the typescript code into JavaScript using ES5 if we can use another ESversion we can use:

```npm 
npx tsc src/index.ts --target
es6 
```

> This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called downleveling.

To have all the files organized we can put the files generated into dist directory with se next command.
```NPM
npx tsc src/index.ts --target
es6 --outDir dist
```
## *Using TSConfig.json*
We can use a pre configuration TS mode if we run:
```NPM
npx tsc --init
```
This create a `.json` file with rules to transpilate TS to JS.
Some rules are enabled and other ones commented.
If we need that automatically TS will be transpilate to JS we can run:
```NPM
npx tsc --watch
```
This will read the change that occurs into src and transpilate to generate JS files into dist.


# *Everyday Types* 

## *The primitives: `string`, `number`, and `boolean`*

JavaScript has three very commonly used primitives: `string`, `number`, and `boolean`. Each has a corresponding type imn TypeScript.

> The types names `String`, `Number`, and `Boolean` (starting with capital letters) are legal, but refer to some special built-in types.

## *Arrays*
To specify the type of an array like `[1,2,3,4]` ypu can use the syntax `number[]`; this syntax works for any type (e.g. `string[]` is an array of strings, and so on).
Or we can use
`(number | string | boolean)[]`
> Note that `[number]` is a different thing; refer to Tuples.

## *`any`*
TypeScript also has a special type, `any`, that you can use whenever you don't want a particular value to cause typechecking errors.
When a value is of type `any`, you can access any properties of it, call it like a function, assign it to (or from) a value of any type, or pretty much anything else that's syntactically legal.

## *`noImplicitAny`*
When you don't specify a type, and TypeScript can't infer it from context, the compiler will typically default to `any`.
You usually want to avoid this, though, because `any` isn't type-checked. Use the compiler flag `noImplicitAny` to flag any implicit `any` as an error.

## *Type Annotations on Variables*
When you declare a variable using `const`, `let`, or `var`, you can optionally add a type annotation to explicitly specify the type of the variable:

```TypeScript
let myName: string = "Alice";
```

In most cases, though, this isn't needed. Whenever possible, TypeScript tries to automatically _infer_ the type in your code.

## *Functions*
Functions are the primary means of passing data around in JS. TypeScript allows you to specify the types of both the input and output values of functions.
### *Parameter Type Annotations*
When you declare a function, you can add type annotations after each parameter to declare what type of parameter the function accepts.
```TypeScript
//Parameter type annotation
function greet(name: string){
    console.log("Hello, " + name.toUpperCase() + "!!");
}
```

### *Return Type annotations*
You can also add return type annotation. Return type annotations appears after the parameter list:

```TypeScript
function getFavoriteNumber(): number {
    return 26;
}
```

### *Anonymous Functions* 
When a function appears in a place where TypeScript can determinate how it's going to be callled, the parameters of that function are automatically given types.

```TypeScript
const names = ["Alice", "Bob", "Eve"];
//Contextual typing for Function
name.forEach(function(s){
    console.log(s.toUppercase());
    //Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
// Contextual typing also applies to arrow function
names.forEach(s => {
    console.log(s.toUppercase());
    //Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
})
```

Even though the paramenter `s` didn't have a type annotation, TypeScript used the types of the `forEach` function, along with the inferred type of the array, to determinate the type `s` will have.
This process is called _contextual typing_ because the context that the function occurred within informs what type it should have.

## *Object types*
Apart from primitives, the most common sort of type you'll encounter is an _object type_. This refers to any JS value with properties, which is almost all of them. To define an object type we simply list its properties and their types.

```TypeScript
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

We annotated the parameter with a tyoe with two properties - `x` and `y` - which are both of type `number`. You can use `,` or `;` to separate the properties, and the last separator is optional either way.
Teh type part of each property is also optional. if you don't specify a type, it will be assumed to be `any`.

### *Optional properties*
Object types can also specify that some or all of their properties are optional: To do this, add a `?` after the property name:
```TypeScript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```
When you read from an optional property, you'll have to check for `undefined` before using it.
```TypeScript
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  //  Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

## *Union Types*
TypeScript's type system allows you to build new types out of existing ones using a large variety of operators.
A union type is a type formed from two or more other types, representing values that may be any one of those types.

```TypeScript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

### *Working with Union Types*
TypeScript will only allows an operation if it is valid for every member of the union. For example, if you  have the union `string | number`, you can't use methods that are only available on string:
```TypeScript
function printId(id: number | string) {
  console.log(id.toUpperCase());
  //Property 'toUpperCase' does not exist on type 'string | number'.
  //Property 'toUpperCase' does not exist on type 'number'.
}
```
The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. _Narrowing_ occurs when TypeScript can deduce a more specific type for a value based on the structura of the code.
```TypeScript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

## Type Aliases
