# Assignment 1: Problem Solving with TypeScript & OOP

This repository contains the completed solutions and technical blog posts for **Assignment 1 (Batch 8)** of the Apollo Level 2 Web Development program.

---

## 📁 Repository Structure

```text
├── solutions.ts                                     # TypeScript solutions for Problems 1 through 8
├── type-vs-interface.md                             # Technical Blog 1: Type Aliases vs Interfaces
├── union_and_intersection_types_in_typescript.md    # Technical Blog 2: Union vs Intersection of types
└── README.md                                        # Assignment overview and documentation
```

---

## 🛠️ Problem Solutions Overview (`solutions.ts`)

The solution file implements 8 problems covering core TypeScript fundamentals and Object-Oriented Programming (OOP) without using `any`:

1. **`multiplyValue`**: Handles optional numeric parameters and default fallback multipliers.
2. **`processInput`**: Discriminated type narrowing across `string | number | boolean`.
3. **`formatCoordinate`**: Labeled read-only tuple formatting (`readonly [latitude, longitude, locationName]`).
4. **`concatenateArrays`**: Generic rest-parameter array flattening (`<T>(...arrays: T[][]): T[]`).
5. **`getPopularCourses`**: Interface-driven filtering for published courses meeting minimum student thresholds.
6. **`pluckValues`**: Generic object property extraction using the `keyof` constraint (`<T, K extends keyof T>`).
7. **`Employee` & `Manager` Classes**: Demonstrates OOP inheritance, parameter properties, `protected`/`private` access modifiers, and `super()` delegation.
8. **`validateAgeAsync`**: Asynchronous validation returning an explicitly typed `Promise<string>` with conditional delay and immediate error rejection.

---

## 📝 Technical Blog Posts

As part of the assignment blog task, two technical blog posts (150–300 words each) have been written:

1. 📄 **[Type Aliases vs Interfaces in TypeScript](./type-vs-interface.md)**  
   *Covers structural distinctions, declaration merging, union capabilities, and decision criteria for choosing between `type` and `interface`.*

2. 📄 **[Type Union and Intersecrion in TypeScript](./union_and_intersection_types_in_typescript.md)**  
   *Explores how to model complex application state by combining Union `(|)` and Intersection `(&)` types. Demonstrates handling distinct API responses using discriminated unions, while using intersections to enforce shared metadata across all payloads with practical code examples.*

---
