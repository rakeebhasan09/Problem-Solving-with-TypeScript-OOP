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
