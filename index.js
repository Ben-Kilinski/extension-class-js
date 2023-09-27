// -----  CLASS EXTENSIONS   --------- //
// class Product{
//     constructor(title, price, inSale, salePercentage, image, quantity){
//         this.title = title;
//         this.price = price;
//         this.inSale = inSale;
//         this.salePercentage = salePercentage;
//         this.image = image;
//         this.quantity = quantity;
//         this.priceAfterSale = this.calculatelPrice()
//     }
//     calculatelPrice(){
//         if(!this.inSale){
//             return this.price 
//         }
//         else{
//             return this.price*(1 - this.salePercentage)
//         }
//     }

//     getTotalPrice() {
//         if(this.inSale){
//             return this.quantity * this.priceAfterSale
//         }
//     }
// }

// const airJordan = new Product("Air Jordan", 300, true, 0.5, "https://img.buzzfeed.com/buzzfeed-static/static/2023-08/3/15/campaign_images/00558956fddb/red-cement-air-jordan-4-releases-in-september-3-577-1691077893-6_16x9.jpg", 1)

// console.log(airJordan.getTotalPrice())

//------26/09--------------exercises------------------------------------------

//task1-----------------------------------------------------------------------
// function Person(firstName, lastName, birthdate, profileImage){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthdate = birthdate;
//     this.profileImage = profileImage;

//     this.getFullName = function() {
//         return this.firstName + " " + this.lastName;
//     };

//     this.getAge = function() {
//         const today  = new Date();
//         const currentYear = today.getFullYear();
//         const birthYear = this.birthdate.getFullYear();
//         return currentYear - birthYear;
//     };

//     this.canClub = function() {
//         return this.getAge() >= 18;
//     };

//     this.render = function(){
//         document.body.innerHTML += 
//         `<div class="person">
//             <h2>${this.getFullName()}</h2>
//             <img src="${this.profileImage}">
//             <p>Age: ${this.getAge()}</p>
//         </div><br>`
//     };

// }

// const people = [
//     new Person("Jim", "Carrey", new Date("1962-01-17"), "https://cdn.britannica.com/84/200584-050-7EC3F3F6/Jim-Carrey-2012.jpg"),
//     new Person("Mary", "Streep", new Date("1949-06-22"), "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/345px-Meryl_Streep_December_2018.jpg"),
//     new Person("Orlando", "Bloom", new Date("1977-01-13"), "https://upload.wikimedia.org/wikipedia/commons/8/81/Orlando_Bloom_Cannes_2013.jpg"),
//     new Person("Arik", "Einstein", new Date("1939-01-03"), "https://remember.bio/wp-content/uploads/2022/07/%D7%90%D7%A8%D7%99%D7%A7-%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F.jpg"), 
//     new Person("Charles", "Chaplin", new Date("1889-04-16"), "https://image.tmdb.org/t/p/w500/qQZ2qDAyX9aw8KCkj9VZAQLKysK.jpg"),
//     new Person("Ben", "Kilinski", new Date("1997-03-10"), "https://media.licdn.com/dms/image/D5603AQEPPe9oOOqbgg/profile-displayphoto-shrink_800_800/0/1691579027182?e=1701302400&v=beta&t=8KupgGFxTF7GKZiXc_hy-PPfJ4iiyMsLzcZhAJY3Ufw"),
// ]

// people.forEach(function(item){item.render()})
//------------------------------------------------------------------------


//task2---------------------------------------------------------------------
// class Car {
//     constructor(model, year, brand, price, maxSpeed, image){
//         this.model = model;
//         this.year = year;
//         this.brand = brand;
//         this.price = price;
//         this.maxSpeed = maxSpeed;
//         this.image = image;
//         this.currentSpeed = 0;
//     }

//     get speed() {
//         return this.currentSpeed;
//     }

//     accelerate() {
//         if (this.currentSpeed + 20 <= this.maxSpeed) {
//             this.currentSpeed += 20;
//         }
//     }

//     stop() {
//         this.currentSpeed = 0;
//     }

//     render() {
//         document.body.innerHTML += `
//         <div class="carDiv">    
//             <h2>${this.brand} ${this.model}</h2>
//             <p>Year: ${this.year}</p>
//             <p>Price: $${this.price}</p>
//             <p>Max Speed: ${this.maxSpeed} Kh</p>
//             <p>Current Speed: ${this.currentSpeed} Kh</p>
//             <img src="${this.image}" alt="${this.brand} ${this.model}">
//         </div><br>    
//         `;
//     }    

// }

// const cars = [];

// function addCar() {
//     const model = document.getElementById('model').value;
//     const year = document.getElementById('year').value;
//     const brand = document.getElementById('brand').value;
//     const price = document.getElementById('price').value;
//     const maxSpeed = document.getElementById('maxSpeed').value;
//     const image = document.getElementById('image').value;

//     const car = new Car(model, year, brand, price, maxSpeed, image);
//     cars.push(car);
//     car.render();
// }

// document.body.innerHTML += `
//     <form>
//         <label for="model">Model: </label>
//         <input type="text" id="model"><br>
//         <label for="year">Year: </label>
//         <input type="text" id="year"><br>
//         <label for="brand">Brand: </label>
//         <input type="text" id="brand"><br>
//         <label for="price">Price: </label>
//         <input type="text" id="price"><br>
//         <label for="maxSpeed">Max Speed: </label>
//         <input type="text" id="maxSpeed"><br>
//         <label for="image">Image URL: </label>
//         <input type="text" id="image"><br>
//         <button type="button" onclick="addCar()">Add Car</button>
//     </form>
//     `;
//---------------------------------------------------------------------------

//task3 
class Person {
    constructor(firstName, lastName, birthdate, profileImage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.profileImage = profileImage;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const today = new Date();
        const birthYear = new Date(this.birthdate).getFullYear();
        const age = today.getFullYear() - birthYear;
        return age;
    }

    canClub() {
        const age = this.getAge();
        return age >= 18;
    }

    render() {
        const personDiv = document.createElement('div');
        personDiv.className = 'person';
        personDiv.innerHTML = `
            <h2>${this.getFullName()}</h2>
            <p>Age: ${this.getAge()}</p>
            <img src="${this.profileImage}" alt="${this.getFullName()}'s profile picture">
        `;
        document.getElementById('student-info').appendChild(personDiv);
    }
}

class Student extends Person {
    constructor(firstName, lastName, birthdate, profileImage, currentCourse, grades) {
        super(firstName, lastName, birthdate, profileImage);
        this.currentCourse = currentCourse;
        this.grades = grades;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}

// Create an array of students from the form on the DOM
const studentForm = document.getElementById('student-form');
const students = [];

studentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const birthdate = event.target.elements.birthdate.value;
    const profileImage = event.target.elements.profileImage.value;
    const currentCourse = event.target.elements.currentCourse.value;
    const grades = event.target.elements.grades.value.split(',').map(grade => parseFloat(grade.trim()));

    const student = new Student(firstName, lastName, birthdate, profileImage, currentCourse, grades);
    students.push(student);

    // Render the student on the screen
    student.render();

    // Clear the form fields
    event.target.reset();
console.log(students)

});

