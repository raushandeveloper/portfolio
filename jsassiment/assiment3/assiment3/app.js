let age = prompt("Enter your age:");
age = Number(age); // string to number convert

if (age < 13) {
    alert("You are a child");
} else if (age >= 13 && age < 19) {
    alert("You are a teenager");
} else if (age >= 19 && age < 60) {
    alert("You are an adult");
} else {
    alert("You are a senior citizen");
}