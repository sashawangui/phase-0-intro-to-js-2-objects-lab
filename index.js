// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee, 
    }
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee,
    }

    delete newEmployee[key];
    return newEmployee;    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Donald Glover');
console.log(employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'III Telegraph Ave.');
console.log(employee); 

const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
console.log(employeeWithoutName);
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employee);