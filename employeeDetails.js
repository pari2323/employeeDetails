//AI Corrected code for Reference

// const divisionButtons = document.getElementById("divisionButtons");

// const displayEmployeesBtn = document.createElement("button");
// displayEmployeesBtn.textContent = "Display Employees";
// displayEmployeesBtn.addEventListener('click', () => {
//     document.getElementById("employeeDetails").innerHTML = displayEmployeeData.join('');
// });
// divisionButtons.appendChild(displayEmployeesBtn);
// // creating an array of objects
// const employees = [
//     { id: 1, name: 'Ajay Singaniya', age: '32', department: 'IT', salary: '75000' },
//     { id: 2, name: 'Ramesh Raghav', age: '34', department: 'IT', salary: '98000' },
//     { id: 3, name: 'Raghav ram', age: '43', department: 'HRM', salaray: '98000' },
//     { id: 4, name: 'Chadda', age: '53', department: 'HRM', salaray: '198000' },
//     { id: 5, name: 'Ganesh Gupta', age: '32', department: 'Finance', salary: '67000' },
//     { id: 6, name: 'Gopavaram Gupta', age: '39', department: 'Finance', salary: '87000' }
// ];

// const displayEmployeeData = employees.map((employee, index) => {
//     return `<p> Employee ${index + 1} : ${employee.name} </p>`;
// });



// const calculateTotalSalaries = document.createElement("button");
// calculateTotalSalaries.textContent = "Calculate Total Salaries";
// calculateTotalSalaries.addEventListener('click', () => {
//     const totalSalaries = employees.reduce((sum, employee) => sum + parseInt(employee.salary || employee.salaray), 0); //Handle error with salary or salaray
//     document.getElementById("employeeDetails").innerHTML = `<p>Total Salaries: ${totalSalaries}</p>`;
// });
// divisionButtons.appendChild(calculateTotalSalaries);

// const displayHREmployees = document.createElement("button");
// displayHREmployees.textContent = "Display HR Employees ";
// displayHREmployees.addEventListener('click', () => {
//     const hrEmployees = employees.filter(employee => employee.department === 'HRM');
//     const hrEmployeeData = hrEmployees.map((employee, index) => {
//         return `<p> HR Employee ${index + 1} : ${employee.name} </p>`;
//     });
//     document.getElementById("employeeDetails").innerHTML = hrEmployeeData.join('');
// });
// divisionButtons.appendChild(displayHREmployees);

// const findEmployeeById = document.createElement("button");
// findEmployeeById.textContent = "Find Employee by ID";
// findEmployeeById.addEventListener('click', () => console.log("reserved"));
// divisionButtons.appendChild(findEmployeeById);




// Up to here Reference code corrected by AI
const divisionButtons = document.getElementById("divisionButtons");

const displayEmployeesBtn = document.createElement ("button");
displayEmployeesBtn.textContent = "Display Employees" ;
displayEmployeesBtn.addEventListener('click',() => {
    document.getElementById("employeeDetails").innerHTML = displayEmployeeData.join('');
});
divisionButtons.appendChild (displayEmployeesBtn);

// storing the value in an array of string

const employees = [
    {id: 1, name:'Ajay Singaniya' ,age:'32', department:'IT', salary:'75000'},
    {id:2 ,name:'Ramesh Raghav', age:'34', department:'IT', salary:'98000'},
    {id:3, name:'Raghav ram', age:'43', department:'HRM', salary:'98000' },
    {id:4, name:'Chadda', age:'53', department:'HRM', salary:'198000' },
    {id:5, name:'Ganesh Gupta', age:'32', department:'Finance', salary:'67000'},
    {id:6, name:'Gopavaram Gupta', age:'39', department:'Finance', salary:'87000'}
]

const displayEmployeeData = employees.map((employe, index) => {
    return `<p> Employee ${index + 1} : ${employe.name} : ${employe.department} - ${employe.salary} </p>`;
});


const calculateTotalSalaries = document.createElement("button");
calculateTotalSalaries.textContent ="Calculate Total Salaries";
calculateTotalSalaries.addEventListener ('click', () => alert (`The total salaries of employees is $${totalSalaries}`));
divisionButtons.appendChild(calculateTotalSalaries);

const totalSalaries = employees.reduce( (total, currentEmployee) => total + parseInt(currentEmployee.salary) , 0 );

const displayHREmployees = document.createElement ("button");
displayHREmployees.textContent = "Display HR Employees ";
displayHREmployees.addEventListener ('click', () => {
    document.getElementById("employeeDetails").innerHTML = hrEmployeesHTML;
});

const hrEmployees = employees.filter( employee => employee.department === "HRM");
var hrEmployeesHTML ="";
 hrEmployees.forEach( (employees, index) => {
    hrEmployeesHTML += `<p> ${index + 1} Employe ID : ${employees.id} - ${employees.name} - ${employees.department} - ${employees.salary} </p>`
})

divisionButtons.appendChild (displayHREmployees) ;

const findEmployeeById = document.createElement ("button");
findEmployeeById.textContent = "Find Employee by ID" ;
   
findEmployeeById.addEventListener ('click', () => {
    var employeeId = parseInt( prompt("Enter the ID number of the employee you are looking for :"));
    // if (employeeId === null) return ;

    const employ = employees.find ( employees => employees.id === employeeId);

    if (employ) {
        document.getElementById("employeeDetails").innerHTML = `<p> The name of the employee with ID ${employeeId} is ${employ.name}</p> `;
    } else {
        document.getElementById("employeeDetails").innerHTML = `<p> The employee ID is not exist, Enter valid ID number </p>`;
    }
});



divisionButtons.appendChild(findEmployeeById);



