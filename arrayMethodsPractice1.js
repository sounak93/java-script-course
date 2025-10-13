// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [67, 95,91, 44, 87, 90, 99, 58];

let newMarks = marks.filter( (mark) => {
    return mark > 90;
});

console.log(newMarks);