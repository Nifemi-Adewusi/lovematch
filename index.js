/** @format */

// Element Selectors

const submitButton = document.querySelector("button");
const showResult = document.querySelector(".show-result");
const yourName = document.querySelector(".your-name");
const partnerName = document.querySelector(".partner-name");
const compatibilityPercent = document.querySelector(
  ".show-compatibility-percent"
);

// Functions

// Validate Name, Convert To Title Case and generate random Number
function validateName() {
  if (yourName.value === "" && partnerName.value === "") {
    if (yourName.value === "" || partnerName.value === "") {
      compatibilityPercent.innerHTML = "Please Enter Both Names";
    }
  } else if (yourName.value === "" || partnerName.value === "") {
    compatibilityPercent.innerHTML = "Fill Both Names Please";
  } else if (yourName.value && partnerName.value) {
    console.log("Both Fields Were Filled");
    const you = convertToTitleCase(yourName.value);
    const them = convertToTitleCase(partnerName.value);
    compatibilityPercent.innerHTML = "Calculating...";
    yourName.value = "";
    partnerName.value = "";
    setTimeout(() => {
      const randomNumberGenerated = `${generateRandomNumber()}%`;
      compatibilityPercent.innerHTML = randomNumberGenerated;
      showResult.innerHTML = `Compatibility Between ${you} And ${them} is ${randomNumberGenerated}`;
    }, 5000);
    setTimeout(() => {
      showResult.innerHTML = "";
      compatibilityPercent.innerHTML = "";
    }, 20000);
    setTimeout(() => {
      alert("This is just a joke, nothing serious😂");
    }, 10000);
  }
}

function convertToTitleCase(name) {
  const firstCharacter = name[0].toUpperCase();
  const remainingCharacter = name.slice(1);
  const result = firstCharacter + remainingCharacter;
  return result;
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  validateName();
});
