// for loop
var myArray = [
    'Java',
    'C#',
    'C',
    'C++',
    'Python',
    'SQL',
    'MySQL'
]

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i])
}

// for/in loop
var myText = {
    name: 'Huy',
    age: 13    
}

for (var key in myText) {
    console.log(myText[key])
}

var khoahoc = 'Python'
for (var key in khoahoc) {
    console.log(khoahoc[key])
}

// for/of loop
var hoc = [
    'Java',
    'PHP',
    'C#'
]

for (var value of hoc) {
    console.log(value)
}

var helo = {
    name: 'Huy',
    age: 20,
    sex: 'male'
}
 for (var value of Object.values(helo)) {
    console.log(value)
}

