//1. Using Prototypal Pattern
const userMethods = {
    increaseScore() {
        return this.score++;
    },
    decreaseScore() {
        return this.score--
    }
}
function user(name,score) {
    var user = Object.create(userMethods)
    user.name = name;
    user.score = score;
    return user;
}

const paidUserMethods = Object.create(userMethods);
paidUserMethods.increasebalance = function() {
    return this.balance++;
}

function paidUser(name,score,balance) {
    var paidUser = user(name,score);
    Object.setPrototypeOf(paidUser, paidUserMethods);
    paidUser.balance = balance;
    return paidUser;
}

// 2. Using Pseudoclassical Pattern
function User(name,score) {
    this.name =name;
    this.score = score;
}
User.prototype.increaseScore = function() {
    return this.score++
}
User.prototype.decreaseScore = function() {
    return this.score--;
}




// 3. UsingClasses
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}