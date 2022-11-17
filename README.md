# Team Organisation Tool

## Description

This project challenged us to build a Node.js command-line application that takes user input about employees on a software engineering team and generates a HTML webpage displaying information on each employee.

At its current functionality level the HTML aspect of the project is not implemented.

The application uses Jest for running unit tests and Inquirer for collection of input from the user.

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Built With

* JavaScript
* Node.js
** Inquirer
** Jest

## Usage 

To run this command-line invoke using the command:
```md
node index.js
```
Below is the link to the video demonstration

_____



## Credits

Made by
* [Jasmin Shearer](https://github.com/jasminshea)

