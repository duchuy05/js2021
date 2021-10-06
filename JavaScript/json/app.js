var json = '["Java", "PHP"]';
var json = '{"name":"Duc Huy", "age": 18}';

var a = 1;

console.log(typeof JSON.parse(a))

console.log(JSON.stringify({
    name: 'Huy',
    age: 19
}))

var pro = new Promise(
    function(resolve, reject) {
        // Logic
        // Success: resolve()
        // Fail: reject()
    }
);

pro
    .then(function () {
        
    })
    .catch(function () {
        
    })
    .finally(function () {
        
    })