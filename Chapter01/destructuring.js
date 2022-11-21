function getEmployee(id) {
  return {
    name: "John",
    age: 35,
    address: "123 st",
    country: "United States",
  };
}

function getEmployeeWorkInfo(id) {
  return [id, "Office st", "France"];
}

const { name: fullName, age } = getEmployee(22);
console.log("employee", fullName, age);

const [id, officeAddress] = getEmployeeWorkInfo(22);
console.log("employee", id, officeAddress);
