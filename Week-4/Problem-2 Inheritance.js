var person = function() {};
person.prototype.initialize = function(name,age)
{
    this.name = name;
    this.age = age;
}

class teacher extends person {
    teach(inheritance)
    {
    this.subject = inheritance;
    }
};
Object.setPrototypeOf(teacher,person);
teacher.prototype=person;
var him = new teacher();
him.initialize("Adam",45)
him.teach("Inheritance");
console.log(him.name,him.age,him.subject);