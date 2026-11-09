# Access Modifiers in TypeScript

## Introduction

Access modifiers are an important part of Object-Oriented Programming (OOP) in TypeScript. They control how class properties and methods can be accessed from different parts of a program. TypeScript provides three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly` to prevent properties from being reassigned after initialization.

## What is Public Access Modifier?

The `public` modifier allows properties and methods to be accessed from anywhere. It is the default access modifier in TypeScript. This means we do not need to write `public` explicitly.

## What is Private Access Modifier?

The `private` modifier restricts access to a property or method within its own class. It cannot be accessed directly from outside the class or its subclasses. It helps protect important data from unwanted access.

## What is Protected Access Modifier?

The `protected` modifier allows properties and methods to be accessed inside their own class and its subclasses. However, they cannot be accessed directly from outside the class. It is especially useful when working with inheritance.

## What is Readonly Modifier?

The `readonly` modifier prevents a property from being reassigned after its initial value is set. It is useful for storing values that should remain unchanged. A readonly property can be initialized when declared or inside the constructor.

```typescript
class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  readonly id: number;

  constructor(name: string, salary: number, department: string, id: number) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.id = id;
  }
}
```

## Why Are Access Modifiers Important?

Access modifiers help control how data is used inside a program. They support encapsulation, which is an important concept of OOP. Using the correct modifier makes classes easier to manage and maintain.

## Conclusion

Each access modifier has a different purpose depending on how we want to access or protect class members. Understanding their differences helps developers choose the right modifier for different situations. Overall, access modifiers help us write cleaner, safer, and more organized TypeScript code.