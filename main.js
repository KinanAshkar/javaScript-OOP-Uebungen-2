// -6-
//  Defining Object With Object.assign:

/* const src1 = {
    prop1:"value1",
    prop2:"value2",
    method1:function(){
        return `method1`;
    }
};
const src2 = {
    prop3:"value3",
    prop4:"value4",
    method2:function(){
        return `method2`;
    }
};
const target = {
    prop5:"value5"
};
Object.assign(target,src1,src2,{prop6:"value6"});
// console.log(target);

const myObject = Object.assign({},target,{prop7:"value7"});
console.log(myObject);
console.log(myObj.prop1);
console.log(myObj.prop2);
console.log(myObj.prop6);
console.log(myObj.method1());
console.log(myObj.method2()); */

// -7-
// Delete Operator:

/* const user = {name:"kinan"};
console.log(user);
console.log(user.name);

delete user; // Delete Property Not Object
delete user.name;
// delete user["name"];

console.log(delete user.name); // true ( It Was Deleted )
console.log(user);
console.log(user.name);

console.log("-".repeat(10));

const username = "Kinan";
console.log(username);
console.log(delete username); //false It Was Not Deleted
console.log(username);

console.log("-".repeat(10));

const freezedObj = Object.freeze({age:37});
console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);// false It Was Not Deleted
console.log(freezedObj);
console.log(freezedObj.age);

console.log("-".repeat(10));

const emptyObj = {};
Object.defineProperty(emptyObj,"age",{value:23,configurable : false}); // false ( It Was Not Deleted )
// Object.defineProperty(emptyObj,"age",{value:23,configurable : true}); // true ( It Was Deleted )
console.log(emptyObj);
console.log(emptyObj.age);

console.log(delete emptyObj.age);
console.log(emptyObj);
console.log(emptyObj.age); */

// -8-
// For In Loop With Object Properties:

/* const user = {
    name:"kinan",
    country:"germany",
    age: 37
};

for(let i in user){
    console.log(i);
}

console.log("-".repeat(10));
for(let info in user){
    console.log(user[info]);
}

console.log("-".repeat(10));
for(let infos in user){
    console.log(infos, user[infos]);
}

console.log("-".repeat(10));
for(let infos in user){
    console.log(`The ${infos} Is ${user[infos]}`)
}

console.log("-".repeat(10));

let str = "";
for(let n in user){
    str += `The ${n} Is : ${user[n]}\n`;
};
console.log(str);

console.log("-".repeat(10));

let str = "";
for(let n in user){
    str += `The ${n} Is : ${user[n]}<br>`;
};
document.getElementById("info").innerHTML = str; */

// -9-
// Constructor Function Introduction:

/* function phone(serial,color,price){
    this.serial = serial;
    this.color = color;
    this.price = price - 100;
}
let phone1 = new phone(123,"red",500);
let phone2 = new phone(44,"blue",1000);
let phone3 = new phone(123,"black",130);
console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);

console.log(phone3.serial);
console.log(phone3.color);
console.log(phone3.price); */
/* const phone1 = {
    serial:123,
    color:"red",
    price:500
};
const phone2 = {
    serial:457,
    color:"blue",
    price:400
};
const phone3 = {
    serial:333,
    color:"white",
    price:280
}; */

// andere Beispiel:
/* function employee(firstName,lastName,age,address,job,salary){
    this.firstName = `Hallo ${firstName}`;
    this.lastName = lastName;
    this.age = age*365;
    this.address = address;
    this.job = job;
    this.salary = salary*10/100;
}
const employee1 = new employee("kinan","ashkar",39,"schlossstraße","frontend",2200);
const employee2 = new employee("tamer","hashem",34,"berlinerstraße","designer",2000);
const employee3 = new employee("fares","agha",31,"mierendorffplatz","manager",2750);
const employee4 = new employee("ward","mohamed",27,"wilmersdorf","backend",1900);

console.log(employee1.firstName);
console.log(employee1.lastName);
console.log(employee1.age);
console.log(employee1.address);
console.log(employee1.job);
console.log(employee1.salary);
console.log("*".repeat(10));
console.log(employee2.firstName);
console.log(employee2.lastName);
console.log(employee2.age);
console.log(employee2.address);
console.log(employee2.job);
console.log(employee2.salary);
console.log("*".repeat(10));
console.log(employee3.firstName);
console.log(employee3.lastName);
console.log(employee3.age);
console.log(employee3.address);
console.log(employee3.job);
console.log(employee3.salary);
console.log("*".repeat(10));
console.log(employee4.firstName);
console.log(employee4.lastName);
console.log(employee4.age);
console.log(employee4.address);
console.log(employee4.job);
console.log(employee4.salary);
*/

// -10-
// Constructor Function Advanced And New:

/* function sayHello(person){
    return `hello ${person}`;
}
console.log(sayHello("kinan")); */

// andere Beispiel
/* const phone = (serial) => {
    // This Is The Created Object From The Constructor Function
    console.log(this);
    this.serial = serial;
}
let phone1 = new phone(123456);
let phone2 = new phone(999666);

console.log(phone1.serial);
console.log(phone2.serial);

// CheckIt -1-
console.log(phone1 instanceof phone);
console.log(phone2 instanceof phone);

// CheckIt -2-
console.log(phone1.constructor === phone);
console.log(phone2.constructor === phone);
 */