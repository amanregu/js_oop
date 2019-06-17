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

    obj.changeUsername = function changeUsername(){
        return obj.name;
    };

    obj.incrementProject = function incrementProject(){
        return obj.noOfProject = ++(obj.noOfProject);
    };

    obj.decrementProject = function decrementProject(){
        return obj.noOfProject = --(obj.noOfProject);
    };
return obj;

}

//2. Using Object.create

function createUser(name, id, password, noOfProject){
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProject = noOfProject;
}

createUser.prototype.getUsername = function getUsername(){
    return this.name;
};

createUser.prototype.getPassword = function getPassword(){
    return this.password;
};

createUser.prototype.changeUsername = function changeUsername(){
    return this.name;
};

createUser.prototype.incrementProject = function incrementProject(){
    return this.noOfProject = ++(this.noOfProject);
};

createUser.prototype.decrementProject = function decrementProject(){
    return this.noOfProject = --(this.noOfProject);
};
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

createUser.prototype.changeUsername = function(){
    return this.name;
};

createUser.prototype.incrementProject = function(){
    return this.noOfProject = ++(this.noOfProject);
};

createUser.prototype.decrementProject = function(){
    return this.noOfProject = --(this.noOfProject);
};
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

    changeUsername(){
        return this.name;
    };

    incrementProject(){
        return this.noOfProject = ++(this.noOfProject);
    };

    decrementProject(){
        return this.noOfProject = --(this.noOfProject);
    };
    
  }