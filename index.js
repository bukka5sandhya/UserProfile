//this file is not exceuting i wrote js code in html file in script

let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imageContainerElement = document.getElementById("imgContainer");
let imageElement = document.createElement("img");
imageElement.setAttribute("src", profileDetails.imgSrc);
imageContainerElement.appendChild(imageElement);

let nameElement = document.createElement("h1");
nameElement.classList.add("heading");
nameElement.textContent = profileDetails.name;
profileContainerElement.appendChild(nameElement);

let ageElement = document.createElement("p");
ageElement.classList.add("paragraph");
ageElement.textContent = "Age: " + profileDetails.age;
profileContainerElement.appendChild(ageElement);
