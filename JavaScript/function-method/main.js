function User(ho, ten, ava) {
    this.ho = ho;
    this.ten = ten;
    this.ava = ava;
    this.getTuu = function() {
        return `${this.ho} ${this.ten}`
    }
}
User.prototype.className = 'F6'
User.prototype.getClassName = function() {
    return this.className
}

var user2 = new User('Doan', 'Huy', 'depzai');
var user = new User('Son', 'Dang', 'depzai');

user2.title = 'Hoc tai F6';
user.cmt = 'Khoa hoc tuyet voi'

console.log(user2.getTuu());
console.log(user.getClassName());

var date = new Date();
console.log(date.getMinutes())

var date = 19;