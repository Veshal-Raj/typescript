# typescript

- TypeScript is a superset of JavaScript.
- All the code that you are written in JavaScript is finally compiled into JavaScript.
- It's a development tool. Your Project still runs Js.
- TypeScript is all about the type safety.
- What TypeScript does? 
    - Static Checking (Analyze the code as we type.)

# global Install
- npm i -g typescript
- tsc -v (Check the version, so you can understand whether typescript is installed or not.)

# Types in typescript
- Number
- String
- Boolean
- Null // means absent
- Undefined // means unintialized
- Void
- Object
- Array
- Tupels 
- Any
- Never
- unknown and more...

# syntax

- let variableName: type = value

# any
if you give the any keyword, ts will ignore checking the type of it. 

# never

- "never" --> some functions never return a value;
- for HandlingError use "never"
- The "never" type represents values which are "never" observed. In a return type, this means that the function throws an exception or terminates execution of the program.
- "never" also appears when TypeScript determines there's nothing left in a union.