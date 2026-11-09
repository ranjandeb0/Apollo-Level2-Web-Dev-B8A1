# Type Aliases vs Interfaces in TypeScript

Type Aliases and Interface are two closely related features in TypeScript. They both can be used to define custom types but they serve different purposes under different scenarios.


The main technical difference lies in declaration merging and extensibility. Interfaces can be declared multiple times in the same scope, and TypeScript automatically merges them into a single definition.
example:
interface UserProfile {
  id: number;
}
interface UserProfile {
  username: string; 
}

In contrast, type aliases can only be defined once in a scope. However, type aliases offer more flexibility by supporting union types, primitive types, literal types, tuples etc.
example:
type UserRole = "admin" | "editor" | "viewer";

Interfaces can extend other Interfaces using the extends keyword, which follows object oriented mechanism. Types handle combination through intersection operators "&".
Example: 
interfaces extending:
interface Admin extends User {
  role: string;
  permissions: string[];
}
type aliases intersection:
type Admin = User & AdminDetails;

When to Choose Which:
Interface should be choosen when working with objects or working in OOP context: building object-oriented classes, or publishing library APIs that may require extensibility. Type aliases when working with primitive types, defining unions, complex tuples.


In modern TypeScript projects, interfaces are suited for standard object oriented tasks and public APIs, whereas type aliases are best for complex type composition. Overall, Maintaining consistency for each usecase should be number one priority.