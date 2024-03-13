// Advanced Types Part 1

interface DirectorIterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
};

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorIterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director task';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}


function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));



// Task 6
type Employee = Director | Teacher;

function isDirector(employee: Employee): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Task 7
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
        default:
            const _never: never = todayClass;
            return _never
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));