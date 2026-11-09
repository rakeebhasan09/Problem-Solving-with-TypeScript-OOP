# Type Aliases vs Interfaces in TypeScript: Core Differences and When to Use Them

## Introduction

TypeScript provides two powerful ways to define custom types: `type` aliases and `interface`. Both help developers describe the structure of data and improve code readability. However, they have some important differences that determine when to use each.

## Core Differences

An **interface** is primarily used to define the structure of objects and classes. For example:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}
```

A **type alias** can define object shapes, primitive types, unions, intersections, tuples, and more.

```typescript
type User = {
    id: number;
    name: string;
    email: string;
};

type Status = "active" | "inactive";
type ID = string | number;
```

One major difference is declaration merging. Interfaces with the same name can be declared multiple times, and TypeScript automatically combines their properties.

```typescript
interface User {
    name: string;
}

interface User {
    age: number;
}
```

Now, `User` contains both `name` and `age`. Type aliases do not support declaration merging.

Both support inheritance-like composition. Interfaces use `extends`, while type aliases commonly use intersections (`&`).

```typescript
interface Admin extends User {
    role: string;
}

type AdminUser = User & {
    role: string;
};
```

## When Should You Choose One?

Choose **interface** when defining object structures, class contracts, or APIs that may need extension through declaration merging.

Choose **type** when working with unions, intersections, primitive types, tuples, or more complex type combinations.

## Conclusion

Both `type` aliases and `interface` are useful tools in TypeScript. For simple object structures, either works perfectly. Choose interfaces for extensible object contracts and type aliases for flexible, complex type definitions. Consistency within your project is also important.
