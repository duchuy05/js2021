/*
forEach(): duyet qua tung phan tu cua array
every(): kiem tra tat ca cac phan tu cua 1 mang thoa man dieu kien
some(): kiem tra mot trong cac phan tu cua 1 mang thoa man dieu kien
find(): tim kiem va xuat ra duy nhat 1 doi tuong
filter(): tim kiem va xuat ra tat ca doi tuong thoa man
map(): thay doi thuoc tinh cua array
reduce():
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'Python',
        coin: 220
    },
    {
        id: 3,
        name: 'Django',
        coin: 340
    },
    {
        id: 4,
        name: 'HTML, CSS',
        coin: 130
    }
]

// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

// var listcourse = courses.filter(function(listcourse, index) {
//     return listcourse.name === 'Javascript';
//     // return is important
// })

// console.log(listcourse)

// var newCourses = courses.map(function(khoa, so) {
//     return {
//         id: khoa.id,
//         name: `Khoa hoc: ${khoa.name}`,
//         coin: khoa.coin,
//         Giaovien: 'Duc Huy'
//     }

// })
// console.log(newCourses)

// reduce

// function hander(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentValue.coin
//     console.table({
//         'luot chay:':i,
//         'bien luu tru:' : accumulator, 
//         'Gia khoa hoc:' : currentValue.coin,
//         'Tich tru duoc:' : total
//     })

//     return total;
// }
// var totalCoin = courses.reduce(function(total, course) {
//     return total + course.coin
// }, 0) 
// // 0 la inital value ko bat buoc
// console.log(totalCoin)

// Lam phang mang (FLatArray)
// var depthArray = [1,2, [23, 12, 12], 52, 23, [124, 135,47]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, [])

// console.log(flatArray)

// Lay ra cac khoa hoc dua vao mot mang moi
// var topics = [
//     {
//         topic: 'Front end',
//         khoa: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'Javascript'
//             }
//         ]
//     },
//     {
//         topic: 'Back end',
//         khoa: [
//             {
//                 id: 1,
//                 title: 'Django'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ]

// var newkhoa = topics.reduce(function(khoa, topics) {
//     return khoa.concat(topics.khoa)
// }, [])

// console.log(newkhoa)

// Mot chut ve HTML DOM
// var htmls = newkhoa.map(function(khoa) {
//     return `
//         <div>
//             <h2>${khoa.title}</h2>
//             <p>ID: ${khoa.id}</p>
//         </div>
//     `
// })

// console.log(htmls.join(' '))


// Tinh tong mot Array 
// const numbers = [1, 2, 3, 4, 5, 6, 234, 12]

// const result = numbers.reduce(function(total, number) {
//     return total + number
// })

// console.log(result)

// reduce(callback*, initial value)

// includes array, strings
// var title = 'Responsive web design'
// console.log(title.includes('web', 13))

// var mot = [
//     'Javascript',
//     'PHP',
//     'Python'
// ]

// console.log(mot.includes('Javascript', 2))

// Math object

/*
Math.PI
Math.round() lam tron so
Math.abs() gia tri tuyet doi
Math.ceil() lam tron tren
Math.floor() lam tron duoi
Math.random() random
Math.min() 
Math.max()
 */