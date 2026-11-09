const multiplyValue = (value :number, multiplier? :number): number => {
    if(typeof multiplier !== "undefined") return value * multiplier;
    return value * 2;
}

const processInput = (value :string | number | boolean): string | number => {
    if(typeof value === "string") return value.trim().toLowerCase();
    else if(typeof value === "number") return value * 10;
    return value ? "Active" : "Inactive";
}

const formatCoordinate = (location: readonly [latitude: number, longitude: number , locationName:string]): string => {
    const [latitude, longitude , locationName] = location;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const newArray: T[] = [];
    for (const ele of arrays) newArray.push(...ele);
    return newArray;
}

interface Course {
    title: string, 
    students: number, 
    isPublished: boolean
}
const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
    return courses.filter((value:Course) => value.isPublished == true && value.students >= minStudents);
}

// problem 6 solution
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
    constructor(
        protected name : string,
        private baseSalary : number,
    ){}
    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee{
    constructor(
        name : string,
        baseSalary : number,
        private department: string
    ){
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
