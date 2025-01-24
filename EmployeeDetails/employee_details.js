


const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Sharoon', age: 36, department: 'HR', salary: 60000 },
    { id: 5, name: 'Sam altman', age: 37, department: 'HR', salary: 60000 },
    { id: 6, name: 'Elon Musk', age: 38, department: 'HR', salary: 60000 },
    //... More employee records can be added here
  ];

//   function displayEmployees() {
    // const employeesDetails = document.getElementById('employeesDetails');
    // employeesDetails.innerHTML = '';
    // employees.forEach(employee => {
    //   const employeeDiv = document.createElement('div');
    //   employeeDiv.innerHTML = `
    //     <p>ID: ${employee.id}</p>
    //     <p>Name: ${employee.name}</p>
    //     <p>Age: ${employee.age}</p>
    //     <p>Department: ${employee.department}</p>
    //     <p>Salary: $${employee.salary}</p>
    //   `;
    //   employeesDetails.appendChild(employeeDiv);
    // });
//   }

function displayEmployees() {
    employees.map((emp)=>{
        employeesDetails.innerHTML += `<div>
        <p>ID: ${emp.id}</p> 
        <p>Name: ${emp.name}</p>
        <p>Age: ${emp.age}</p>
        <p>Department: ${emp.department}</p>
        <p>Salary: $${emp.salary}</p>
        </div>`
       
    }).join("");
}
const employeesDetails = document.getElementById("employeesDetails");
// displayEmployees();



function calculateTotalSalaries() {
    const initialValue = 0;

    const totalSalary = employees.reduce((acc, currval) => acc + currval.salary, initialValue);

    document.getElementById('employeesDetails').innerHTML += `<p>Total Salaries: ${totalSalary}</p>`;
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
    // console.log(hrEmployees);


}

// function findEmployeeById(employeeid){
//     const foundemp = employees.filter((emp)=>{
//         if(emp.id == employeeid){
//             document.getElementById('employeesDetail').innerHTML += `<p>${foundemp.id}: ${foundemp.name}: ${foundemp.name} - ${foundemp.department} - $${foundemp.salary}</p>`;
//         }
//         else{
//             document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
//         }
//     })
// }

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}
// displayHREmployees();
; // Function to display all employees
//  const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
//  document.getElementById('employeesDetails').innerHTML = totalEmployees;
