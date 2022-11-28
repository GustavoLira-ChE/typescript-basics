class User{

    /* 
    This type of constructor is a shortcut, because it defines properties (fields) and assigns properties automatically 
    Minimizes boilerplate coding.
    */
    constructor(private _userName: string, private _userEmail: string){
    }

    get userName(): string{
        return this._userName;
    }
    set userName(value: string){
        this._userName = value;
    }
    get userEmail(): string{
        return this._userEmail;
    }
    set userEmail(value: string){
        this._userEmail = value;
    }
}

let user1: User = new User("@gus23game","gus@tcs.com");

console.log(user1.userEmail);
console.log(user1.userName);