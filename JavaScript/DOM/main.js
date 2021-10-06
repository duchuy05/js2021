// Document object: document la ca 1 cai website
// document.write('Hello')

// Get element methods; ID, class, CSS selector, HTML collection, tag
// var headingnode = document.getElementById('heading')
// console.log({
//     element: headingnode
// })

// var headingnodes = document.getElementsByTagName('p')
// console.log(headingnodes)

// var headingNode = document.querySelector('.box .heading-2:nth-child(3)');
// console.log(headingNode)

// var headingNodes = document.querySelectorAll('.box .heading-2')
// console.log(headingNodes[2])

// console.log(document.forms['form-1'])

// console.log(document.images);

// Chỉ có getElementByID và querrtSelector là trả về trực tiếp element
// Các thằng khác nó trả về Nodelist và HTML collection (gần giống thằng Array)

// DOM attributes
// var headingElement = document.querySelector('h1')

// headingElement.className = 'Heading'
// console.log(headingElement.getAttribute('class'))

// Thêm element vào 1 element đã có sẵn
// var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1>Hello World</h1>';
// console.log(document.querySelector('h1').innerText)

// boxElement.outerHTML = '<span>Mat luon class box</span>'
// innerHTML thêm được element và atrribute của element luôn

// Change color of text when click onto button

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn1').forEach(function(btn1) {
        btn1.onclick = function() {
            document.querySelector('#hello').style.color = btn1.dataset.color
        }
    })
})

// Count number when click onto count button

if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('#h2').innerHTML = counter;
    localStorage.setItem('counter', counter)

    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`)
    }
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#h2').innerHTML = localStorage.getItem('counter')
        document.querySelector('#btn2').onclick = count;

    })

// Task submit

document.addEventListener('DOMContentLoaded', function() {

    // By deafault, submit button is disabled

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;

        const li = document.createElement('li')
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';

        document.querySelector('#submit').disabled = true;

        // Stop form from submit
        return false
    }
})

// DOM style CSS
var boxNode = document.querySelector('.box');

Object.assign(boxNode.style, {
    width: '100px',
    height: '100px',
})

// ClassList property: add, conatains, remove, toggle

boxNode.classList.add('blue')

setTimeout(() => {
    boxNode.classList.remove('blue')
}, 3000)

setInterval(() => {
    boxNode.classList.toggle('red')
}, 2000)

// DOM events
// 1. preventDefault
// 2. stopPropagation

var aElements = document.links;
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }

    }
}
var listElement = document.querySelector('.list')
listElement.onmousedown = function(e) {
    e.preventDefault();
}
