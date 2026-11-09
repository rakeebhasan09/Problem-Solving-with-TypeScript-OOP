function multiplyValue(value: number, multiplier: number = 2): number {
    if (multiplier === 2) {
        return value * multiplier;
    }

    return value * multiplier;
}

function processInput(inputValue: string | number | boolean): string | number {
    if (typeof inputValue === "string") {
        return inputValue.trim().toLowerCase();
    } else if (typeof inputValue === "number") {
        return inputValue * 10;
    } else {
        if (typeof inputValue === "boolean" && inputValue == true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}

const formatCoordinate = (coordinate: readonly [number, number, string]) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.reduce((acc, current) => [...acc, ...current]);
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number) => {
    return courses.filter(
        (course) =>
            course.isPublished === true && course.students >= minStudents,
    );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
    return items.map((item) => item[key]);
};

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
};
