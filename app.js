// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */

const createInstructor = (firstName, lastName) =>{
    return {firstName, lastName}
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */

const favoriteNumber = (favoriteNumber, firstName) =>{
    return {
        firstName,
        [favoriteNumber]:"That my favorite!"
    }
}

console.log(favoriteNumber(42, 'James')[42])

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

/* Write an ES2015 Version */

const instructor = {
    firstName: 'Colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
}

const createAnimal = (species, verb, noise) =>{
    return{
        species,
        [verb](){
            return noise;
        }
    }
}

let dog = createAnimal('dog', "bark", "wooof")
