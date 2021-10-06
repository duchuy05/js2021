function writeLog() {
    var x = ''
    for (var p of arguments) {
        x += `${p} - `
    }
    console.log(x)
}