function studets_grades()
{
    const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
    let half_range;
    let median;
    let grades_half = grades.slice(grades.length / 2, grades.length);
    grades_half.sort();
    let organized_Grades = grades.sort();
    if (grades.length%2 === 1){
        median = organized_Grades[((organized_Grades.length)/2- 0.5)];
     }
    else {
        median = organized_Grades[(grades.length)/2];
    }
    half_range = grades_half[grades_half.length-1]-grades_half[0];
    console.log("stats: \n","  Range: ", (organized_Grades[organized_Grades.length-1] - organized_Grades[0]),"\n","  Median: ",median, "\n", "  Half Range: ", half_range);
}
studets_grades();
