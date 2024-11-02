console.log('next level web development');
const id:number = 5;
console.log(id);

// Basic data type 
const UserName:string ='Shipon';
const roll : number = 223; 
const isSuccess :boolean = true;
const profile:undefined = undefined;
const demand: null = null;
let x;
x= 24;
x= 'shipon1';
x=false;

//  Array 
let userNameList :string[] = ['shipon','rasel','manik'];
userNameList.push('mim');
const rollNumbers :number[] = [2,4,5,5];
rollNumbers.push(4);

// tuple 

const userInfo:[number,string] = [23,'shipon'];
userInfo[1] = 'Rahul';

// Object 
const user:
{ readonly company:string;
  firstName:string,
  middleName?:string;
  lastName:string;
  isMarried: true

} ={
  company:'ph-team',
  firstName:'shipon',
  // middleName:'ahmed',
  lastName:'shalauddin',
  isMarried: true
}
// user.company='shflahf'

// Function 
function add(a:number,b:number=10):number{
  return a+b;
}

add(2,5);

const arrowAdd =(a:number,b:number):number=> a+b ;
arrowAdd(3,10)

// object => function => method 
const poorUser ={
  name:'Shipon',
  balance: 0,
  addBalance(balance:number):string{
    return `My Balance is now ${this.balance + balance}`
  }
}

const arr:number[] = [1,2,5];
const newArr: number[] = arr.map((item:number): number =>item*item);

// spread operator 
const friends:string[] =['rasel','Abdur Rahim', 'nahid'];
const relativeFriends:string[]=['Foysal','Jibon','Sojib'];
friends.push(...relativeFriends);

// rest operator 
const greeting =(...friends:string[])=>{
  return  friends.forEach(f => {
    `Assalamualaikum ${f}`;
  }); 
 
}

greeting('shawon','nobab','hero');

const userInformation ={
  userId: 7,
  name:{
    firstName: 'Shalauddin',
    lastName: 'Shipon'
  },
  address: 'mirpur',
  contact: '017843938'

}
const {userId,address,name:{firstName}} = userInformation;