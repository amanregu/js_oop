//1. Using function to create object

var user = function(name, id, password,noOfProject){
    var obj = {};
    obj.name = name;
    obj.id = id;
    obj.password = password;
    obj.noOfProject = noOfProject;

    obj.getUsername = function getUsername(){
        return obj.name;
    };
    
    obj.getPassword = function getPassword(){
        return obj.password;
    };

    obj.changeUsername = function changeUsername(newUserName){
        obj.name = newUserName
        return obj.name;
    };
    obj.changePassword = function changePassword(newPassword){
        obj.password = newPassword;
        return obj.password;
    };

    obj.incrementProject = function incrementProject(){
        return obj.noOfProject = ++(obj.noOfProject);
    };

    obj.decrementProject = function decrementProject(){
        return obj.noOfProject = --(obj.noOfProject);
    };
return obj;

let aman = user("aman", 77, "qwerty123", 12)

}

//2. Using Object.create


createUser = {}

createUser.getUsername = function getUsername(){
    return this.name;
};

createUser.getPassword = function getPassword(){
    return this.password;
};

createUser.changeUsername = function changeUsername(newUsername){
    this.name = newUsername
    return this.name;
};

createUser.changePassword = function changePassword(newPassword){
    this.password = newPassword
    return this.password;
};

createUser.incrementProject = function incrementProject(){
    return this.noOfProject = ++(this.noOfProject);
};

createUser.decrementProject = function decrementProject(){
    return this.noOfProject = --(this.noOfProject);
};


function create(name, id, password, noOfProject){
    let user = Object.create(createUser);
    user.name = name;
    user.id = id;
    user.password = password;
    user.noOfProject = noOfProject;
 	return user
}

let aman = create('aman','17','qq',3)

//3.Using Pseudoclassical Way
function createUser(name, id, password,noOfProject){
    
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProject = noOfProject;
}
createUser.prototype.getUsername = function(){
    return this.name;
};

createUser.prototype.getPassword = function(){
    return this.password;
};

createUser.prototype.changeUsername = function(newUserName){
    this.name = newUserName
    return name;
};

createUser.prototype.changePassword = function(newPassword){
    this.password = newPassword;
    return password;
};

createUser.prototype.incrementProject = function(){
    return this.noOfProject = ++(this.noOfProject);
};

createUser.prototype.decrementProject = function(){
    return this.noOfProject = --(this.noOfProject);
};
let aman = new createUser("aman", 77, "qwerty123", 12);
//4.Using class
class User {
    constructor(name, id, password,noOfProject) {
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProject = noOfProject;
    }
    getUsername() {
        return this.name;
    }
    getPassword(){
        return this.password;
    };

    changeUsername(newUserName){
        this.name = newUserName;
        return name;
    };

    changePassword(newPassword){
        this.password = newPassword;
        return this.password;
    };

    incrementProject(){
        return this.noOfProject = ++(this.noOfProject);
    };

    decrementProject(){
        return this.noOfProject = --(this.noOfProject);
    };
    
  }
  let aman = user('aman','77','qwerty123',15)