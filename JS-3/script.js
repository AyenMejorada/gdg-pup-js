function checkAge() {
    let age = document.getElementById('ageInput').value;

    age = Number(age);
    
    let category;

    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number."; // for invalid input
    } else if (age <= 12) {
        category = "Child"; // for age 0 to 12
    } else if (age <= 19) {
        category = "Teenager"; // for age 13 to 19
    } else {
        category = "Adult"; // for age 20+
    }

    // this is for the result
    document.getElementById('result').innerText = category;
}
