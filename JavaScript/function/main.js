const prompt = require('prompt-sync')();

var fname = prompt('Enter your first name: ');
var lname = prompt('Enter your last name: ');


console.log("Your full name is",fname,lname);

var languages = [
    'Javascript',
    'Python',
    'C++',
    'PHP'
]

var result = languages[languages.length -1]

languages.splice()
console.log(result)
console.log(languages.push('C#', 'ReactJS'))
console.log(languages.shift())
console.log(languages.unshift('Java'))
console.log(languages)

var languages2 = [
    'Main',
    'Laravel'
]

console.log(languages.concat(languages2))

function clickOnSlide() {
    console.log('Hi xin chao');
}

var a = 6
var a = 112
console.log(a)

function writeLog() {
    var x = ''
    for (var p of arguments) {
        x += `${p} - `
    }
    console.log(x)
}

writeLog('Hi', 'Lo', 'Hee', 'Mit')

function plus(a, b) {
    return [a , b];
}

var kq = plus(2, 3)

console.log(kq)

var phoneNumber = 'phone'

var myInfo = {
    name: "Huy",
    age: 18,
    sex: "male",
    [phoneNumber]: '0393189119',
    getName: function() {
        return this.name; 
    }
};

console.log(myInfo.getName())
















