function clone() {

    var person = {
        name: "Elon Musk",  // key: value  (key-value pair)
        age: 45,
        tech: ['X', 'PayPal', 'Tesla', 'SpaceX', 'Hyperloop'],
        changeName: function(new_name) {   // basically anonymous function, difference? Not declared as a variable
            this.name = new_name;   // ^ but rather declared as a KEY inside of an OBJECT
            return this
        },
        changeAge: function(new_age) {
            this.age = parseInt(new_age);   //parseint
            return this 
            
        }
    };

    return person;
}

var person = clone();
var clone1 = clone();
clone1.changeName("Definitely not a clone");
var clone2 = clone();
clone2.changeName("It's a me, Mario!");
console.log(clone1);
console.log(clone2);



person.changeName('John Johnman').changeAge(12);

person['married'] = true;

document.querySelector('#test').innerHTML = person.name + ' is ' + person.age + ' and he has worked on ' + person.tech['3'];

person.changeAge(25);

for(var key in person) {
    if(person[key].constructor === String); {
        console.log(key, person[key].constructor, person[key]);
    }
}

