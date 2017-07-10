interface bankAccount{
    money:number;
    deposit(value:number):void;
}
let bankAcc:bankAccount={
    money:2000,
    deposit(value:number){ 
       return this.money+value;
    }
}
interface myselfInterace{
    name:String;
    bankAccount:bankAccount;
    hobbies:string[];
}
let mySelf:myselfInterace={
    name:"Asaad",
    bankAccount:bankAcc,
    hobbies:['Violon','Cooking']
}
console.log(mySelf.bankAccount.deposit(3000));