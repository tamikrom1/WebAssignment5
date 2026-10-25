# Assignment #5. JavaScript Basics (DOM Manipulation & Events)

**Name:** Tamerlan Iskakov

**Group:** IT-2504

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object

Create a JavaScript `const` object named `userProfile` that stores various data types: string (name), number (birthYear), boolean (isDeveloper), and an array (hobbies).

<img width="519" height="209" alt="Снимок экрана (711)" src="https://github.com/user-attachments/assets/26cb2fae-3ba8-40dc-b43f-ba1fdbb89d5e" />


### Task 2. Arithmetic Calculations

Write a script that uses arithmetic operators to calculate the user's current age dynamically, and another metric (age in months and hobbies count). Display the values in the console.


<img width="917" height="272" alt="Снимок экрана (712)" src="https://github.com/user-attachments/assets/6c979398-4264-41ad-b3ba-7fddee7ac6ca" />

---

## Part 2. Form Input & Event Responses

### Task 3. HTML Form Setup

Create a form with an input for Username, an input for Birth Year, and a "Create / Update Profile" submit button.

<img width="1168" height="324" alt="Снимок экрана (714)" src="https://github.com/user-attachments/assets/eba9c4a5-24e1-4182-884d-46da8960b2ee" />

### Task 4. Event Listener

Add a submit event listener to the form. When submitted, capture the user's input values and update the `userProfile` object.

<img width="842" height="415" alt="Снимок экрана (713)" src="https://github.com/user-attachments/assets/e72d97af-2e62-493f-acfd-eb9ff7c985cb" />

---

## Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements

Create an unordered list (`<ul>`) of hobbies/tasks, an "Add Item" button that adds a new `<li>` from user input, and a "Remove Item" button that deletes the last item.

<img width="1085" height="337" alt="Снимок экрана (715)" src="https://github.com/user-attachments/assets/76f40b86-92b0-4282-a45e-7701f9db02ab" />
<img width="849" height="625" alt="Снимок экрана (716)" src="https://github.com/user-attachments/assets/02bd11c2-41bc-47a4-8e4b-4be32c05cc4d" />

---

## Summary

First, I created the project structure with `index.html` and `script.js`. Then I wrote the `userProfile` object with four data types (string, number, boolean, array) and used arithmetic operators to calculate age, age in months and the number of hobbies, showing the results in the console.

Next, I built the form and connected it with JavaScript using `addEventListener("submit")`. I used `event.preventDefault()` to stop the page from reloading, read the input values, converted the birth year to a number, and updated the `userProfile` object.

Finally, I implemented the list: `document.createElement` and `appendChild` for adding new items, and `removeChild` with `lastElementChild` for removing the last one. The hobbies array is kept in sync with the list. The main thing I learned is how JavaScript finds elements in the DOM, changes their content, and reacts to user events. At the end I uploaded the project to a public GitHub repository and published it with GitHub Pages.
