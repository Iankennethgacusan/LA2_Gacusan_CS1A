// First student
let first_name1 = "Ian Kenneth";
let middle_name1 = "Gacusan";
let lastname1 = "G";
let birth_date1 = "October 19, 2006";
let birth_place1 = "Tablac, Candon City, Ilocos Sur";
let address1 = "Tablac, Candon City, Ilocos Sur";
let course_and_year1 = "Bachelor of Science in Computer Science (BSCS) 1st Year";
let dream_job1 = "Professional Programmer";

// Second student
let first_name2 = "John Patrick";
let middle_name2 = "Mapanao";
let lastname2 = "Andaquig";
let birth_date2 = "April 24, 2006";
let birth_place2 = "Tampugo, Sta. Cruz, Ilocos Sur";
let address2 = "Tampugo, Sta. Cruz, Ilocos Sur";
let course_and_year2 = "Bachelor of Science in Computer Science (BSCS)";
let dream_job2 = "Software Developer";

// First student description
let first_student = first_name1.toUpperCase() + " " + middle_name1.toUpperCase() + " " + lastname1.toUpperCase() +
" was born " + birth_date1 + " at " + birth_place1.toUpperCase() + " and currently living at " + address1.toUpperCase() + ". " +
first_name1.toLowerCase() + " " + middle_name1.toLowerCase() + " " + lastname1.toLowerCase() +
" is taking up " + course_and_year1.toLowerCase() + " and dreams to be a " + dream_job1 + " after graduation.";

// Second student description
let second_student = first_name2.toUpperCase() + " " + middle_name2.toUpperCase() + " " + lastname2.toUpperCase() +
" was born " + birth_date2 + " at " + birth_place2.toUpperCase() + " and currently living at " + address2.toUpperCase() + ". " +
first_name2.toLowerCase() + " " + middle_name2.toLowerCase() + " " + lastname2.toLowerCase() +
" is taking up " + course_and_year2.toLowerCase() + " and dreams to be a " + dream_job2 + " after graduation.";

// Printing student details
console.log(first_student);
console.log(second_student);
