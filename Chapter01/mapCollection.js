const mappedEmp = new Map();

mappedEmp.set("limda", { fullName: "Linda Johnson", id: 1 });
mappedEmp.set("jim", { fullName: "Jim Johnson", id: 2 });
mappedEmp.set("pam", { fullName: "Pam Johnson", id: 3 });
mappedEmp.set("pam", { fullName: "Pam Johnson", id: 4 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("jim"));
console.log("size", mappedEmp.size);

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
