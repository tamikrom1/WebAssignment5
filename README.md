# Assignment #5. JavaScript Basics (DOM Manipulation & Events)

**Name:** Tamerlan Iskakov
**Group:** IT-2504

**GitHub Pages:** https://YOUR_LOGIN.github.io/assignment5/

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object

Create a JavaScript `const` object named `userProfile` that stores various data types: string (name), number (birthYear), boolean (isDeveloper), and an array (hobbies).


![Task 1 - userProfile object in console](screenshots/task1.png)

### Task 2. Arithmetic Calculations

Write a script that uses arithmetic operators to calculate the user's current age dynamically, and another metric (age in months and hobbies count). Display the values in the console.


![Task 2 - age, months and hobbies count](screenshots/task2.png)

---

## Part 2. Form Input & Event Responses

### Task 3. HTML Form Setup

Create a form with an input for Username, an input for Birth Year, and a "Create / Update Profile" submit button.

![Task 3 - profile form](screenshots/task3.png)

### Task 4. Event Listener

Add a submit event listener to the form. When submitted, capture the user's input values and update the `userProfile` object.


Before submitting the form:

![Task 4 - before update](screenshots/task4-before.png)

After submitting the form (profile and age are updated):

![Task 4 - after update](screenshots/task4-after.png)

---

## Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements

Create an unordered list (`<ul>`) of hobbies/tasks, an "Add Item" button that adds a new `<li>` from user input, and a "Remove Item" button that deletes the last item.

Initial list:

![Task 5 - initial list](screenshots/task5-initial.png)

After adding an item:

![Task 5 - item added](screenshots/task5-add.png)

After removing the last item:

![Task 5 - item removed](screenshots/task5-remove.png)

---

## Summary of my work process

First, I created the project structure with `index.html` and `script.js`. Then I wrote the `userProfile` object with four data types (string, number, boolean, array) and used arithmetic operators to calculate age, age in months and the number of hobbies, showing the results in the console.

Next, I built the form and connected it with JavaScript using `addEventListener("submit")`. I used `event.preventDefault()` to stop the page from reloading, read the input values, converted the birth year to a number, and updated the `userProfile` object.

Finally, I implemented the list: `document.createElement` and `appendChild` for adding new items, and `removeChild` with `lastElementChild` for removing the last one. The hobbies array is kept in sync with the list. The main thing I learned is how JavaScript finds elements in the DOM, changes their content, and reacts to user events. At the end I uploaded the project to a public GitHub repository and published it with GitHub Pages.