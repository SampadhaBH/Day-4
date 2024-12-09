//create a java script function to manage student information through out the college it shoud manage personal information ,acadamic details and administrative details.delete the profile once student is passed out
class Student {
    constructor(id, name, age, major) {
        this.id = id; // Unique identifier for the student
        this.personalInfo = {
            name: name,
            age: age,
            major: major,
        };
        this.academicDetails = {
            courses: [],
            grades: {},
        };
        this.administrativeDetails = {
            enrollmentDate: new Date(),
            status: 'enrolled', // 'enrolled' or 'graduated'
        };
    }

    // Method to add a course
    addCourse(course) {
        this.academicDetails.courses.push(course);
    }

    // Method to update grades
    updateGrade(course, grade) {
        this.academicDetails.grades[course] = grade;
    }

    // Method to update personal information
    updatePersonalInfo(newInfo) {
        this.personalInfo = { ...this.personalInfo, ...newInfo };
    }

    // Method to update administrative details
    updateAdministrativeDetails(newDetails) {
        this.administrativeDetails = { ...this.administrativeDetails, ...newDetails };
    }

    // Method to graduate the student
    graduate() {
        this.administrativeDetails.status = 'graduated';
    }

    // Method to delete the student profile
    deleteProfile() {
        if (this.administrativeDetails.status === 'graduated') {
            // Here you can implement the logic to delete the profile
            console.log(`Deleting profile for student ID: ${this.id}`);
            // In a real application, you would remove this student from the database
            return true; // Indicate successful deletion
        } else {
            console.log(`Cannot delete profile for student ID: ${this.id}. Student is still enrolled.`);
            return false; // Indicate failure to delete
        }
    }

    // Method to display student information
    displayInfo() {
        console.log('Student Information:');
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.personalInfo.name}`);
        console.log(`Age: ${this.personalInfo.age}`);
        console.log(`Major: ${this.personalInfo.major}`);
        console.log(`Courses: ${this.academicDetails.courses.join(', ')}`);
        console.log(`Grades: ${JSON.stringify(this.academicDetails.grades)}`);
        console.log(`Enrollment Date: ${this.administrativeDetails.enrollmentDate}`);
        console.log(`Status: ${this.administrativeDetails.status}`);
    }
}

// Example usage
const student1 = new Student(1, 'John Doe', 20, 'Computer Science');

// Adding courses and grades
student1.addCourse('Mathematics');
student1.addCourse('Physics');
student1.updateGrade('Mathematics', 'A');
student1.updateGrade('Physics', 'B');

// Displaying student information
student1.displayInfo();

// Graduating the student
student1.graduate();
student1.displayInfo();

// Deleting the student profile
student1.deleteProfile();