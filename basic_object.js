// simply variable with values

let car = {name:"ford", color: "white", weight: "500"}

console.log(car.color);

console.log(car["name"]);


//function stored as property


const person = {
    firstname: "ISHIMWE",
    lastname: "Fabrice",
    age: 18,
    fullname: function() {
        return this.firstname + " " + this.lastname
    }
}

console.log(person["fullname()"]);




