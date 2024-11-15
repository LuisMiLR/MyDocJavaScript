# Chapter Recap

**Last updated April 2024**  
Nice work!

In the next chapter, we'll take a look at advanced control flows.

## Chapter Recap

- The **nullish coalescing** (`??`) operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.
- A **nullish value** is a value that is either `null` or `undefined`.
- The nullish coalescing operator will **short-circuit** if the left-hand side returns a non-nullish value, meaning it will not execute the right-hand side.
- You can only use **nullish coalescing** when the variable is defined.
- Nullish coalescing can be used in conjunction with **optional chaining** (`?.`).
- The main usage of nullish coalescing is to safely access a property that could be nullish while also being able to default to a certain value.
- **undefined vs. null**: `undefined` means that the property has not been defined yet, while `null` means that the property has been defined but is empty.
```

