function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // Regular expression to match the required pattern
    let regex = /^pet_\d{4}[a-zA-Z]+$/;

    if (regex.test(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }

    document.getElementById('result').innerText = result;
}


