// while loop
var i = 1;

while (i <= 1000) {
    
    console.log(i)
    i++;
}

var chuoi = [
    'JS',
    'PHP'
]

var h = 0
while (h < chuoi.length) {
    console.log(h)
    h++
}

// do/while loop

var x = 0 
var isSuccess = false;


do {
    x++;
    console.log('Nap the lan ' + x)
    if (false) {
        isSuccess = true;
    }

} while (!isSuccess && x <= 3) {

}