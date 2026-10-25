/*Task 1*/
const userProfile = {
    name: "Tamerlan",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["basketball", "music", "videogames"]
}

/*Task 2*/
const currentYear = new Date().getFullYear();
const currentAge = currentYear - userProfile.birthYear;

const months = currentAge * 12;
const hobbiesCount = userProfile.hobbies.length;

console.log("userProfile:", userProfile);
console.log("Age: ", currentAge, " Months: ", months, " Hobbies: ", hobbiesCount);

/*Task 4*/
const form = document.getElementById("profileForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    
    userProfile.name = username;
    userProfile.birthYear = birthYear;
    
    message.textContent = "Profile updated";
    form.reset();
});

/*Task 5*/
const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");

document.getElementById("addBtn").addEventListener("click", function () {
  const text = newItemInput.value.trim();
  if (text === "") {
    alert("Please type something");
    return;
  }
 
  const li = document.createElement("li");
  li.textContent = text;
  itemList.appendChild(li);
 
  userProfile.hobbies.push(text);
  newItemInput.value = "";
});
 
document.getElementById("removeBtn").addEventListener("click", function () {
  const last = itemList.lastElementChild;
  if (last) {
    itemList.removeChild(last);
    userProfile.hobbies.pop();
  }
});