

// taking the input values from the user form

const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');


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

// ResetPatientData();

  console.log(patientList);
  generateReport(patientList);

}


// function generateReport() {
//   const numPatients = patientList.length;
//   const conditionsCount = {
//     Diabetes: 0,
//     Thyroid: 0,
//     "High Blood Pressure": 0,
//   };
//   const genderConditionsCount = {
//     Male: {
//       Diabetes: 0,
//       Thyroid: 0,
//       "High Blood Pressure": 0,
//     },
//     Female: {
//       Diabetes: 0,
//       Thyroid: 0,
//       "High Blood Pressure": 0,
//     },
//   };

//   for (const patient of patientList) {
//     conditionsCount[patient.condition]++;
//     genderConditionsCount[patient.gender][patient.condition]++;
//   }

//   report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
//   report.innerHTML += `Conditions Breakdown:<br>`;
//   for (const condition in conditionsCount) {
//     report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
//   }

//   report.innerHTML += `<br>Gender-Based Conditions:<br>`;
//   for (const gender in genderConditionsCount) {
//     report.innerHTML += `${gender}:<br>`;
//     for (const condition in genderConditionsCount[gender]) {
//       report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
//     }
//   }
// }

addPatientButton.addEventListener("click", addPatient);

function generateReport(patientList){

    const conditionalCount = {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,  // Add space
    };
    
    const genderBasedCondition = {
      Male: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0, // Add space
      },
      Female: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0, // Add space
      }
    };
    

 patientList.forEach((patient)=>{
  const {selectedCondition , gender} = patient;

  // console.log( typeof(selectedCondition));
  // console.log( typeof(gender));
  if(conditionalCount.hasOwnProperty(selectedCondition)){
    conditionalCount[selectedCondition]++;
  }

  if(genderBasedCondition[gender]&&genderBasedCondition[gender].hasOwnProperty(selectedCondition)){
    genderBasedCondition[gender][selectedCondition]++;   
  } 


  console.log("Number of patients:", patientList.length);
  console.log("Conditions Breakdown:", conditionalCount);
  console.log("Gender-Based Conditions:", genderBasedCondition);



  // Display the results
console.log("Number of patients:", patientList.length);
console.log("Conditions Breakdown:");
console.log("Diabetes:", conditionalCount.Diabetes);
console.log("Thyroid:",conditionalCount.Thyroid);
console.log("High Blood Pressure:", conditionalCount["High Blood Pressure"]);

  // Now updating the Dom and inserting values

  report.innerHTML = `<br>Condition breakdown :</br>`
  for(const condition in conditionalCount){
    report.innerHTML += `${condition}: ${conditionalCount[condition]}<br>`;
  }
  
  report.innerHTML += `<br>Gender-Based Conditions:<br>`;
  for (const gender in genderBasedCondition) {
    report.innerHTML += `${gender}:<br>`;
    for (const condition in genderBasedCondition[gender]) {
      report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderBasedCondition[gender][condition]}<br>`;
    }
  }
 })

}

// function ResetPatientData(){
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
// document.querySelector('input[name="gender"]:checked').checked = false;
//   document.getElementById("condition").value = "";

// }



// function to retreive the data using asynchronoous fetch api which is promise based 
// target the search button and add event listener to it
// grap the value from the user input and pass it to the fetch api

// async function searchCondition(){
//   const input = document.getElementById("search").value;
//   const resultDiv = document.getElementById("result");
//     const conditions = await fetchData();
 
// }

async function searchCondition() {
  const input = document.getElementById("conditionInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  // Wait for fetched data
  const conditions = await fetchData();

  // Find matching condition
  const foundCondition = conditions.find(condition => condition.name.toLowerCase() === input);

  // Display result
  if (foundCondition) {
    resultDiv.innerHTML = `
      <h3>${foundCondition.name}</h3>
      <p>${foundCondition.imgsrc}</p>
      <p><strong>Symptoms:</strong> ${foundCondition.symptoms.join(", ")}</p>
      <p><strong>Prevention:</strong> ${foundCondition.prevention}</p>
      <p><strong>Treatment:</strong> ${foundCondition.treatment}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>No matching condition found.</p>`;
  }
}


// Add event listener
document.getElementById("btnSearch").addEventListener("click", searchCondition);

// Fetch function
async function fetchData() {
  try {
    const response = await fetch("health.json");
    const data = await response.json();
    return data.conditions; // Ensure we return the conditions array
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}


btnSearch.addEventListener("click", searchCondition);



// async function fetchData() {
//   try {
//     const response = await fetch("health.json");
//     const data = await response.json();
//     return data.conditions; // Ensure it returns the conditions array
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// async function fetchData(){
//   try {
//     const response = await fetch("health.json");
//     const data = await response.json();
//     // console.log(data.conditions);
//     const conditions = data.conditions;
//     return conditions;
//     // console.log(conditions);
//     // conditions.find((condition)=>{
//     //   if(condition.name === "Diabetes"){
//     //     console.log(condition);  

//     //   }
//     // })
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
fetchData();
