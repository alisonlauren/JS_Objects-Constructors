function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

Person.prototype.info = function() {
    console.log('Hello my name is' + " " + this.name + ", " + 'My email is' + " " + this.email + ", " + 'My phone number is' + " " + this.phone + '.');

}

const thePeople = [
    new Person("Sonny", "sonny@hotmail.com", "483-485-4948"),
    new Person("Jordan", "jordan@aol.com", "495-586-3456"),
]

// console.log(thePeople);

thePeople[0].greet(thePeople[1])
thePeople[1].greet(thePeople[0])


thePeople.forEach((person) => {
    person.info();
    
})




