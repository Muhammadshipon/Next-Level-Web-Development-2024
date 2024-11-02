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
const friends:string[] =['rasel','Abdur Rahim', 'nahid','aslam','masrul'];
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

// destructuring
// const friends:string[] =['rasel','Abdur Rahim', 'nahid'];
const [,,ogamaraFriend,...rest] = friends;

// type alias 
type Student = {
  id: number;
  name: string;
  contact?:string;
  gender: string
}
type isProgrammer =boolean;
type age =number;

const student1 : Student ={
  id:11,
  name:'Shipon',
  contact:'09385',
  gender:'male'
}
const student2 : Student ={
  id:12,
  name:'Shipon Ahmed',
  contact:'09385',
  gender:'male'
}

const shiponAge:age = 26;
const programmer: isProgrammer = true;

// union and intersection type 
type User ={
  name: string;
  email?: string;
  gender: 'male'|'female';
  blood_group: 'o+'|'o-';
}

const user1: User={
  name:'shipon',
  gender:'male',
  blood_group:'o+'
}

type Frontend = 'fakibaz'| 'jr. frontend developer';
type Fullstack = 'frontend developer' | 'expert developer';
type Developer = Frontend | Fullstack ;

type FrontendDeveloper ={
  skill: string[],
  designation1: 'frontend developer'
}
type BackendDeveloper ={
  skill: string[],
  designation2: 'backend developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const developer : FullstackDeveloper ={
  skill: ['html','css','node.js'],
  designation1:'frontend developer',
  designation2:'backend developer'
}
console.log('here is ');

// nullish coalescing operator 
const isAuthenticated = '';
const result1 = isAuthenticated ?? 'Guest';
const result2 = isAuthenticated? isAuthenticated:'guest';
console.log({result1},{result2});

// unknown type 
const getTopSpeed =(speed:unknown)=>{
  if(typeof speed ==='number'){
    return `The top speed is ${speed} km/h`
  }
  else if(typeof speed==='string'){
    const topSpeed = speed.split(' ')[0];
    const unit = speed.split(' ')[1];
    return `The top speed is ${topSpeed} ${unit}`
  }
  else{
    return 'please provide correct input'
  }
}


console.log(getTopSpeed( 133));

// Never type 
const error =(msg:string):never=>{
  throw new Error(msg);
}

console.log(error('mama vule error khaiya gesi'));
