//Each question can be saved in array of objects
let questions = [
    {
    question: "Which of the following is not a primitive data type in JavaScript?",
    choices: ["number", "boolean", "object", "string"],
    correct_answer: "object"
    },
    {
    question: "What keyword is used to declare a variable in JavaScript?",
    choices: ["var", "int", "string", "variable"],
    correct_answer: "var"
    },
    {
    question: "Which of the following is a correct way to comment out a single line in JavaScript?",
    choices: ["/* This is a comment */", "' This is a comment", "// This is a comment", "# This is a comment"],
    correct_answer: "// This is a comment"
    },
    {
    question: "What operator is used for strict equality in JavaScript?",
    choices: ["==", "===", "!=", "!=="],
    correct_answer: "==="
    },
    {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    choices: ["push()", "append()", "add()", "addToEnd()"],
    correct_answer: "push()"
    },
    {
    question: "How can you check the type of a variable in JavaScript?",
    choices: ["typeOf", "typeof", "checkType", "varType"],
    correct_answer: "typeof"
    },
    {
    question: "What is the purpose of the console.log() function in JavaScript?",
    choices: ["To display a message on the web page", "To write data to a file", "To display data in the browser console", "To create a pop-up dialog box"],
    correct_answer: "To display data in the browser console"
    },
    {
    question: "How do you declare a function in JavaScript?",
    choices: ["function myFunction() {}", "def myFunction() {}", "func myFunction() {}", "function: myFunction() {}"],
    correct_answer: "function myFunction() {}"
    },
    {
    question: "Which operator is used to combine two or more strings in JavaScript?",
    choices: ["+", "&", "||", "/"],
    correct_answer: "+"
    },
    {
    question: "How do you create a new object in JavaScript?",
    choices: ["newObject = {}", "var newObject = {}", "create newObject = {}", "object.new();"],
    correct_answer: "var newObject = {}"
    },
    {
    question: "What is the result of 2 + '2' in JavaScript?",
    choices: ["22", "4", "'22'", "NaN"],
    correct_answer: "'22'"
    },
    {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    choices: ["pop()", "removeLast()", "shift()", "splice()"],
    correct_answer: "pop()"
    },
    {
    question: "What does the isNaN() function do in JavaScript?",
    choices: ["Checks if a value is not a number", "Checks if a value is a number", "Converts a string to a number", "Rounds a number to the nearest integer"],
    correct_answer: "Checks if a value is not a number"
    },
    {
    question: "How can you create a comment that spans multiple lines in JavaScript?",
    choices: ["// This is a multi-line comment", "' This is a multi-line comment", "/* This is a multi-line comment */", "# This is a multi-line comment"],
    correct_answer: "/* This is a multi-line comment */"
    },
    {
    question: "What is the purpose of the window.alert() function in JavaScript?",
    choices: ["To display a message in the browser's alert box", "To open a new browser window", "To print a message in the console", "To close the current browser tab"],
    correct_answer: "To display a message in the browser's alert box"
    },
    {
    question: "Which of the following is an example of a truthy value in JavaScript?",
    choices: ["0", "null", "undefined", "'true'"],
    correct_answer: "'true'"
    },
    {
    question: "What is the result of 5 % 2 in JavaScript?",
    choices: ["2.5", "3", "0", "1"],
    correct_answer: "1"
    },
    {
    question: "What does the Math.random() function return in JavaScript?",
    choices: ["A random integer", "A random float between 0 and 1", "A random string", "The value of π (pi)"],
    correct_answer: "A random float between 0 and 1"
    },
    {
    question: "What is the purpose of the for loop in JavaScript?",
    choices: ["To define a function", "To repeat a block of code a specified number of times", "To create an object", "To display an alert"],
    correct_answer: "To repeat a block of code a specified number of times"
    },
    {
    question: "Which function is used to parse a string to an integer in JavaScript?",
    choices: ["parseInt()", "parseFloat()", "toInteger()", "parseNumber()"],
    correct_answer: "parseInt()"
    },
    {
    question: "What is the purpose of the return statement in a function?",
    choices: ["To print a message to the console", "To exit the function and return a value", "To declare a variable", "To create a new function"],
    correct_answer: "To exit the function and return a value"
    },
    {
    question: "What is the result of typeof null in JavaScript?",
    choices: ["'null'", "'undefined'", "'object'", "'string'"],
    correct_answer: "'object'"
    },
    {
    question: "Which of the following is a valid way to create a JavaScript array?",
    choices: ["array myArray = [];", "myArray = new Array[];", "var myArray = new Array();", "var myArray = ();"],
    correct_answer: "var myArray = new Array();"
    },
    {
    question: "How can you access the first element of an array in JavaScript?",
    choices: ["array[1]", "array[0]", "array.first()", "array.firstElement()"],
    correct_answer: "array[0]"
    },
    {
    question: "What is the result of 3 == '3' in JavaScript?",
    choices: ["true", "false", "3", "'3'"],
    correct_answer: "true"
    },
    {
    question: "Which method is used to join the elements of an array into a string in JavaScript?",
    choices: ["concat()", "join()", "merge()", "toString()"],
    correct_answer: "join()"
    },
    {
    question: "What is the result of typeof NaN in JavaScript?",
    choices: ["'number'", "'string'", "'NaN'", "'undefined'"],
    correct_answer: "'number'"
    },
    {
    question: "What is the purpose of the addEventListener method in JavaScript?",
    choices: ["To create a new element in the DOM", "To add an event listener to an HTML element", "To remove an element from the DOM", "To change the background color of a webpage"],
    correct_answer: "To add an event listener to an HTML element"
    },
    {
    question: "Which operator is used for logical AND in JavaScript?",
    choices: ["&", "&&", "||", "|"],
    correct_answer: "&&"
    },
    {
    question: "What is the result of null == undefined in JavaScript?",
    choices: ["true", "false", "null", "undefined"],
    correct_answer: "true"
    },
    {
    question: "How can you round a number to the nearest integer in JavaScript?",
    choices: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    correct_answer: "Math.round()"
    },
    {
    question: "What does the substring() method do in JavaScript?",
    choices: ["Removes characters from the beginning of a string", "Extracts a substring from a string", "Converts a string to uppercase", "Adds characters to the end of a string"],
    correct_answer: "Extracts a substring from a string"
    },
    {
    question: "What is the result of 0.1 + 0.2 in JavaScript?",
    choices: ["0.3", "0.12", "0.01", "0.102"],
    correct_answer: "0.3"
    },
    {
    question: "How can you convert a string to lowercase in JavaScript?",
    choices: ["toLowerCase()", "toUpperCase()", "lowerCase()", "toLower()"],
    correct_answer: "toLowerCase()"
    },
    {
    question: "What is the result of '5' - 3 in JavaScript?",
    choices: ["2", "52", "5", "3"],
    correct_answer: "2"
    },
    {
    question: "What does the Array.isArray() function do in JavaScript?",
    choices: ["Checks if an array is empty", "Converts an array to a string", "Checks if a value is an array", "Joins array elements into a string"],
    correct_answer: "Checks if a value is an array"
    },
    {
    question: "Which statement is used to exit a loop in JavaScript?",
    choices: ["break", "return", "continue", "exit"],
    correct_answer: "break"
    },
    {
    question: "What is the purpose of the `this` keyword in JavaScript?",
    choices: ["It refers to the next line of code", "It refers to the current object or context", "It defines a new function", "It defines a new variable"],
    correct_answer: "It refers to the current object or context"
    },
    {
    question: "How do you declare a constant variable in JavaScript?",
    choices: ["const myVar = 42;", "let myVar = 42;", "var myVar = 42;", "constant myVar = 42;"],
    correct_answer: "const myVar = 42;"
    },
    {
    question: "Which method is used to find the index of the first occurrence of a value in an array in JavaScript?",
    choices: ["findIndex()", "indexOf()", "search()", "indexOfValue()"],
    correct_answer: "indexOf()"
    },
    {
    question: "What is the result of `3 * '3'` in JavaScript?",
    choices: ["9", "33", "6", "NaN"],
    correct_answer: "9"
    },
    {
    question: "What is the purpose of the `localStorage` object in JavaScript?",
    choices: ["To store data on the server", "To store data on the client's device", "To create a new HTML element", "To define a function"],
    correct_answer: "To store data on the client's device"
    },
    {
    question: "What is the result of `5 > 3 && 4 < 6` in JavaScript?",
    choices: ["true", "false", "5", "3"],
    correct_answer: "true"
    },
    {
    question: "Which method is used to remove the first element from an array in JavaScript?",
    choices: ["shift()", "pop()", "unshift()", "removeFirst()"],
    correct_answer: "shift()"
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        choices: ["53", "8", "5", "35"],
        correct_answer: "53"
    },
    {
    question: "Which method is used to add one or more elements to the beginning of an array in JavaScript?",
    choices: ["unshift()", "push()", "shift()", "addFirst()"],
    correct_answer: "unshift()"
    },
    {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    choices: ["To compare two values", "To concatenate strings", "To check the type of a value", "To calculate mathematical expressions"],
    correct_answer: "To check the type of a value"
    },
    {
    question: "What does the `parseFloat()` function do in JavaScript?",
    choices: ["Converts a string to an integer", "Converts a string to a floating-point number", "Converts a string to a boolean", "Converts a string to a date"],
    correct_answer: "Converts a string to a floating-point number"
    },
    {
    question: "What is the result of `true || false` in JavaScript?",
    choices: ["true", "false", "null", "undefined"],
    correct_answer: "true"
    },
    {
    question: "How can you remove an element from an array by its index in JavaScript?",
    choices: ["removeElementByIndex()", "splice()", "delete()", "removeByIndex()"],
    correct_answer: "splice()"
    },
    {
    question: "What is the result of `null || 'default'` in JavaScript?",
    choices: ["null", "'default'", "true", "false"],
    correct_answer: "'default'"
    },
    {
    question: "Which keyword is used to define a block of code in JavaScript?",
    choices: ["block", "code", "function", "if"],
    correct_answer: "if"
    },
    {
    question: "What is the purpose of the `Math.floor()` function in JavaScript?",
    choices: ["To round a number up to the nearest integer", "To round a number to the nearest integer", "To round a number down to the nearest integer", "To calculate a square root"],
    correct_answer: "To round a number down to the nearest integer"
    },
    {
    question: "What is the result of `3 ** 2` in JavaScript?",
    choices: ["6", "9", "32", "4"],
    correct_answer: "9"
    }
];
