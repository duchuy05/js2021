// Callback
// - La mot ham 
// - Duoc truyen qua doi so
// - Duoc goi la trong cai ham nhan doi so
// VD:
// function myFuntion(thamso) {
//     if (typeof thamso === 'function') {
//         thamso('Hoc lap trinh')
//     }
// }

// function myCallBack(value) {
//     console.log('Value:', value)
// }

// myFuntion(myCallBack);

// Tao ra phuong thuc map 2 === map
// Array.prototype.map2 = function(callback) {
//     var arrayLength = this.length
//     for (var i = 0; i < arrayLength; ++i) {
//         callback(this[i], i);
//     }
// }



// courses.map2(function(course, index) {
//     console.log(index, course)
// })

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// })

// console.log(htmls.join(' '))

// Tao ra phuong thuc forEach2 === forEach, su dung for/in
var courses = [
    'Javascript',
    'Python',
    'SQL'
];

Array.prototype.forEach2 = function(goilai) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            goilai(this[index], index)
        }
    }
}

courses.forEach2(function(course, index) {
    console.log(course, index)
})