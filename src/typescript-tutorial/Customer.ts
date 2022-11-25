class Customer {

    // properties - fields are public by default
    // _ is a convention for TS developers
    private _firstName: string;
    private _lastName: string;

    constructor(first: string, last:string){
        this._firstName = first;
        this._lastName = last;
    }

    get firstName():string{
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName():string{
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

}


let customer1: Customer = new Customer("Gustavo","Lira");

customer1.firstName = "John"

console.log(customer1.firstName);
console.log(customer1.lastName);
