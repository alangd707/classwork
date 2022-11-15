let studentStrings = [
    'Martin Pratt: 53%',
    'Kain Gibbs: 76%',
    'Shantelle Shah: 82%',
    'Ritik Alcock: 80%',
    'Abdurahman Ratcliffe: 57%',
    'Bailey Garcia: 68%',
    'Freyja Joyce: 99%',
    'Abraham Davison: 92%',
    'Zarah Cote: 95%',
    'Aayush Keith: 100%',
    'Melvin Fischer: 58%',
    'Blane Ayala: 68%',
    'Gregg Zuniga: 76%',
    'Rizwan Goodwin: 64%',
    'Denise Turner: 84%',
    'Shelly Reed: 89%',
    'Robin Ellwood: 87%',
    'Pollyanna Hopkins: 67%',
    'Darcey Martins: 79%',
    'Javan Rankin: 92%',
    'Lina Flower: 99%',
    'Millie-Rose Lacey: 65%',
    'Lynda Whitley: 100%',
    'Emrys Banks: 77%',
    'Bradleigh Hodges: 60%',
    'Aishah Knott: 94%',
    'Shannen Blanchard: 90%',
    'Ellise Watson: 56%',
    'Kimora Carver: 54%',
    'Elaina Allison: 59%',
    'Kobe Odom: 61%',
    'Keeleigh Searle: 97%',
    'Coby Peters: 52%',
    'Leslie Whitmore: 93%',
    'Christian Cook: 65%',
    'Esme Downes: 77%',
    'Nico Clegg: 74%',
    'Aine Welch: 82%',
    'Noah Huber: 97%',
    'Dewey Benton: 55%',
    'Ubaid Shannon: 88%',
    'Todd Chadwick: 81%' ] // Array of names with test scores that is in a string format however is going to be converted into object format with next variable.
let students = studentStrings.map((element) => {
    let tempArray = element.split(': ')
    return {name: tempArray[0], score: tempArray[1]};
}) // Makes an array of objects that sorts name by test score.

console.log('There are ' + students.length + ' students present.') // Displays the amount of students.

students.map((element) => {
    console.log(element.name)
}) // Lists each student who is present in the list at the moment.

let newStudentString = [
    'Isobella Moyer: 95%',
    'Star Mcdougall: 56%',
    'Blade Lennon: 72%',
    'Karishma Molloy: 92%',
    'Gregor Garner: 63%',
    'Alec Peterson: 100%',
    'Letitia Benitez: 67%',
    'Elicia Hoover: 55%'
] // Added on names/scores
newStudentString.map((element) => {
    let tempArray = element.split(': ')
    students.push({name: tempArray[0], score: tempArray[1]});
}) // Pushes the newly added names to the list of students and their scores.
students.map((element) => {
    element.score.replaceAll('%','')
    element.score = parseInt(element.score)
}) // Replaces the '%' letter on each object's test score value.
let totalGrade = 0
let totalGradeLevel = 0 // Initial variables for calculating percentage of answers gotten correctly.
for (let i = 0; i < students.length; i++) {
    totalGradeLevel += students[i].score
    totalGrade = totalGradeLevel / (i + 1)
} // Does the math to convert and eventually display the mean average grade achieved on the test.
console.log('Grade average: ' + totalGrade + '%')
console.log('Grades with removed top 4 and bottom 4:')
let secondList = students.map(i => {
    let secondItteration = students.map(j => {
        if (i.score >= j.score && students.indexOf(i) != students.indexOf(j)) {
            return true
        } else {
            return false
        }
    })
    return secondItteration
}) // Checks each value's relation to each other value depending on size relative to it, if greater then true, if less then false. Used to determine if it is in the top 4 or bottom 4 for values later on.
secondList.map(element => {
    let greaterThan = 0
    let lessThan = 0
    element.map(y => {
        if (y) {
            greaterThan++
        } else {
            lessThan++
        }
    })
    if (greaterThan < 5 || lessThan < 5) {
        secondList.splice(secondList.indexOf(element), 1, false)
    } else {
        secondList.splice(secondList.indexOf(element), 1, true);
    } 
}) // If a value is polarized being the top 4 or bottom 4, it will be displayed as false in the secondList which tracks not only the specific values it is in relation to others but also to eventually remove from the whole student list altogether.
students.map(element => {
    if (secondList[students.indexOf(element)] === false) {
        students.splice(students.indexOf(element), 1, false);
    }
}) // Deletes the specific element that is top 4 or bottom 4.
students.map(element => {
    if (element.score != undefined) {
        console.log(element.score)
    }
}) // Logs the values of the non removed values.