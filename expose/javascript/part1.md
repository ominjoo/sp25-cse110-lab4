1. values added: 20
2. final result: 20
3. Because `var` has function scope, and not block scope, it can get confusing to deal with vars that can be accessed outside of its block. Also, they can be redeclared any number of times and even declared after they are accessed/used. `let` and `const` are cleaner, predictable, less error-prone, and provide more rigid structure + rules of scoping. 
4. values added: 20
5. This code returns a ReferenceError since `let` is block-scoped so the variable is only visible within the if block where it was defined.
6. The code returns an error because the code attempts to reassign a `const` value after it has already been initialized, which is not allowed.
7. Again, the code returns an error because a `const` is being forced to have it value updated which is not allowed. Also, it's not within the same scope.