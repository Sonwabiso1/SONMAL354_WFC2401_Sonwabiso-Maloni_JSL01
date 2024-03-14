# [JSL01] Submission: Syntax-Engine Interaction Challenge

This challenge involves writing a JavaScript function to validate user input to ensure it follows a specific syntax. The input should be in the format "pet_yearName", where "year" consists of four digits and "name" consists of at least one alphanumeric character. For example, "pet_2015Forrest" is a valid input.

## Challenge Details

Write a JavaScript function called `validateSyntax()` that performs the following tasks:

1. Retrieves the user input from an HTML input field with the ID `petInput`.
2. Validates the input to ensure it follows the required syntax:
   - Starts with the string "pet_".
   - Followed by exactly four digits representing the year.
   - Followed by at least one alphanumeric character representing the name.
3. Displays a validation result message in an HTML element with the ID `result`. If the input is valid, display a success message; otherwise, display an error message indicating the required pattern.
