1. The number 3 will be printed to console because `var` is function scoped, so even though its declared within the loop it's accessible outside.
2. 150 will be printed to console since `discountedPrice` is declared as a `var`, the value contained within the variable after the loop terminates is still accessible within the function.
3. 150 will be printed sicne `finalPrice` is declared as a `var` before the loop and its value is updated within the loop, and after the loop terminates it will be accessible in the function. `Math.round(discountedPrice * 100) / 100` functions to round decimals, which has no effect on whole numbers.
4. The function will return an array that contains the discounted prices [50, 100, 150]. This is because `discounted` is an array that is declared with `var` inside the function so it has fuction scope, and is updated within the loop as discounted prices are pushed into it. 
5. There will be a reference error because i is declared with `let` inside the loop header, and since variables declcared with `let` are block-scoped which means it's only accessible within the loop.
6. There will be a reference error because `discountedPrice` is declared with `let` inside the loop, which limits it to block-scope. It is not visible outside of the loop.
7. 150 will be printed. That is the discounted and rounded price of 300, the array element at the last iteration of the loop. `finalPrice` is declared outside of the loop but inside the function so it has function scope, and it is able to use `discountedPrice` which has block scope to update its value since it's within the same loop.
8. The function will return an array that contains [50, 100, 150] for reasons stated in answer 4 and the fact that `discounted` has function scope since it is declared with `let` within the function.
9. There will be a reference error because i is declared with `let` inside the loop header, and since variables declcared with `let` are block-scoped which means it's only accessible within the loop.
10. 3 will be printed to console. There is no attempt to modify `length` which is correct since its a `const`, and it also has function scope.
11. It will return [50, 100, 150]. Although line 7 is concerning and seems like it should throw an error, it is technically creating a new `const` called `discountedPrice` each iteration, not modifying an existing `const`.
12. 
    a. let name = student.name;

    b. let grad_year = student['Grad Year'];

    c. student.greeting();

    d. student['Favorite Teacher'].name;

    e. student.courseLoad[0];
13. 
    a. '32' because integers like 2 map to their string representation and `+` is treated like the string concatenation operator

    b. '3' because there is no way to subtract strings from each other using `-`, so JS knows we are trying to work with integers.

    c. 3 because when there is a number + `null`, the null value maps to 0 

    d. '3null' because a string coupled with a `+` triggers string concatenation which causes JS to treat `null` like a string

    e. 4 because `true` maps to 1

    f. 0 because `false` maps to 0, and so does `null`

    g. '3undefined' because a string coupled with a `+` triggers string concatenation which causes JS to treat `undefined` like a string

    h. `NaN` because the `-` operator treats the statement like arithmetic, and '3' maps to 3, `undefined` maps to `NaN` and 3 - `NaN` = `NaN`

14. 
    a. True because `>` operator coupled with the integer 1 indicates that we are doing arithmetic comparion so '2' maps to 2

    b. false because both things being compared are strings, so we are directly comparing strings, and the 1 in 12 comes less than 2 in Unicode

    c. true because the `==` operator checks for loose equality, so it checks if the values are the same after doing type coercion of '2' to 2.

    d. false because the `===` operator checks for strict equality, if both the type and value are the same, so no type coercion is performed.

    e. false because `true` maps to 1 and 1 == 2 is false.

    f. true because `Boolean(2)` coerces 2 into a boolean value `true`. true === true is true!

15. `==` checks for loose equality, just if the values are the same or not. So, '2' == 2 returns true even through they are different types. `===` checks for strict equality, so the value and the type must be the same in order to return true. So, '2' === 2 will be false.
16. The answer is in part2-question16.js
17. The result will be [2, 4, 6]. This is because the function call on line 13 passes the `doSomething` function as an argument to the `callback` parameter, and within the loop of the `modifyArray` function, the `doSomething` function is called with the array element of index `i` passed in. The `doSomething` function doubles the number its given.
18. The answer is in part2-question18.js
19. output: 1 4 3 2. This is because lines 2 and 5 are synchronous functions which mean that execute as soon as the function is called. Lines 3 and 4 are asynchronous functions so they will first wait for the synchronous functions to finish executing. Then, line 4 has a shorter delay value so it will execute before line 3.

