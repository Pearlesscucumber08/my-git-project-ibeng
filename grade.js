var grades = 100;

// if else 
console.log("Grade: " + grades);

if (grades >= 75) {
    console.log("Status: Passed");
} else {
    console.log("Status: Failed");
}

if (grades >= 90) {
    console.log("Remarks: A");
} else if (grades >= 80) {
    console.log("Remarks: B");
} else if (grades >= 75) {
    console.log("Remarks: C");
} else if (grades < 75) {
    console.log("Remarks: D");
} else {
    console.log("Invalid grade");
}

console.log("");
console.log("");

// switch case
console.log("Grade: " + grades);

switch (true) {
    case grades >= 75:
        console.log("Status: Passed");
        break;
    default:
        console.log("Status: Failed");
}       
switch (true) {
    case grades >= 90:
        console.log("Remarks: A");
        break;
    case grades >= 80:
        console.log("Remarks: B");
        break;
    case grades >= 75:
        console.log("Remarks: C");
        break;
    case grades < 75:
        console.log("Remarks: D");
        break;
    default:
        console.log("Invalid grade");
}