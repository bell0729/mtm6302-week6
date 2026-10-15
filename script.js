const $employee = {
    name: "Kinger",
    id: 762390,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    department: "Innovation",
    email: "kinger@company.com",
    skills: ["UX", "Prototyping", "Research", "Documentation"],
    address: {
        street: "123 Online Road",
        city: "Digital Circus"
    },
    selfIntro: function(){
        const $introTemplate = `Hi, my name is ${this.name}. I started working in ${this.department} on ${this.hireMonth}/${this.hireDate}/${this.hireYear}. I am skilled in ${this.skills.join(", ")}.`
        return $introTemplate
    }
}

const $empSection = document.getElementById("employee")

$empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${$employee.name}</h2>`)

$employee.department = "Innovation and Research"

const $empInfo = `<dl>
    <dt>ID</dt>
    <dd>${$employee.id}</dd>
    <dt>Department</dt>
    <dd>${$employee.department}</dd>
    <dt>Hired On</dt>
    <dd>${$employee.hireMonth}/ ${$employee.hireDate}/ ${$employee.hireYear}</dd>
    <dt>Email</dt>
    <dd>${$employee.email}</dd>
</dl>`

$empSection.insertAdjacentHTML("beforeend", $empInfo)

// Access Arrays in OBjects
const $empSkills = $employee.skills
$empSection.insertAdjacentHTML("beforeend", `<p>${$employee.name} is still doing ${$empSkills.join(", ")}</p>`)

//Access Objects in Objects
const $empAddress = `${$employee.address.street}, ${$employee.address.city}`
$empSection.insertAdjacentHTML("beforeend", `<p>Employee's Address: ${$empAddress}</p>`)

//Accessing Object Methods
console.log($employee.selfIntro())
$empSection.insertAdjacentHTML("beforeend", $employee.selfIntro())

//JS Object Static Methods
console.log(Object.keys($employee))
console.log(Object.values($employee))
console.log(Object.entries($employee))