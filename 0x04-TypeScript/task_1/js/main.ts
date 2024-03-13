interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [contract: string]: unknown,
};

interface Directors extends Teacher {
    numberOfReports: number,
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


// Question 3 - Printing Teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = (firstName, lastName): string =>  {
    const firstNameInitials = firstName.charAt(0);
    return `${firstNameInitials}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


// Task 4
interface Student {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string,
}

interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
}

/**
 * Student
 */
class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(this: Student): string {
        return this.firstName;
    }
}

const createStudent: StudentConstructor = StudentClass; // Use to enforce the constructor types
const student = new createStudent("Andrew", "ALX");
console.log(student.displayName())
console.log(student.workOnHomework())



/// Task 5

