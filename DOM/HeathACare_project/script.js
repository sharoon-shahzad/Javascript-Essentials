

// taking the input values from the user form

const addPatientbtn = document.getElementById("addPatient");

let patientList = [];

// function to get the pateint details
function getDetails() {
  const Name = document.getElementById("name")?.value.trim();
  const age = document.getElementById("age")?.value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const conditionSelect = document.getElementById("condition"); // Target the dropdown
  const selectedCondition = conditionSelect?.value; // Get the selected value

  return { Name, age, gender, selectedCondition };
}


// function validateUsers(){

// }
const addPatient = (e) => {
  e.preventDefault();

  const { Name, age, gender, selectedCondition } = getDetails();

  // validating the input values and checking the corner cases
  if (!Name) return "Name is required.";
  if (!gender) return "Please select a gender.";
  if (!age || age < 1 || age > 120) return "Enter a valid age (1-120).";
  if (!selectedCondition) return "Select a health condition.";

//   console.log("Name: ", Name , "Age: ", age , "Gender: ", gender , "Condition: ", selectedCondition); ;
patientList.push({ Name, age, gender, selectedCondition });

//   console.log(patientList)
}

addPatientbtn.addEventListener("click", addPatient);

