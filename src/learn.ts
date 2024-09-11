let nam:string="Adamya";

                          //also here specifying what type should function return (:void,string,number,boolean etc)
function spell(naam:string):string{

    return naam;
}

console.log(spell(nam));
//--------------------------------------------------------------------------------------------
 
//Type Allias- to create your own type(Custom type)

type Masti={  //the first letter of type by convention should be capital
reason:string; //, also works but while defining type properties try to use ;
kitnibaar:number;
frequency?:number; // V.IMP ki optional property hogayi yeh custom type ki
}

const moj:Masti={
    reason:"No reason needed",
    kitnibaar:100000,
}

console.log(moj);

// the | concept

type ID=number | string;  //ID is a custom type which could be number or string 

//-----------------------------------------------------------------------------------------------


//interfaces -used to create custo type 
 
interface Friend{ //no = in this like type
    name:string;
    location:string;

}

const Harsh:Friend={
    name:"Harsh",
    location:"Jewel",
}


// extend nature of interface

interface animal{
    sound:string;
    legs:number;
}

interface waterAnimal extends animal {
 arms:boolean;                      //waterAnimal extended animal have 3 properties
}


//merge in interface

interface book{
    price:string;
}
interface book{
    pages:number;
}
//now book interface will have both price and pages property because it merged
const meriBook:book={
    price:"500",
    pages:200
}

//diff between type and interface way

//1. no merging in type

//2. we cant do type ID=number in inteface we always have to give object here 


//------------------------------------------------------------------------------------------------------------

//Unions

// | it works like or

type Docss=string | number[];

//---------------------------------------------------------------------------------------------------------------

//random concept -  type Adamya=any matlab kuch bhi type ho skata ha    any[] array of any matlab kisi bhi cheez ka array

//-----------------------------------------------------------------------------------------------------------------------

//Generics

//Generics in TypeScript are used to create reusable, flexible, and type-safe code. 
                                  
            //placeholder name of type paramter<T>                      //we can use any character or word in place of T


function identtity<T>(numm:T):T{


    return numm;         //Here, T is a generic type parameter. The identity function can work with any type (number, string, etc.), but TypeScript 
                        //ensures that the return type matches the input type.

}


const naaame:string="waaow"

const masti=identtity(naaame); 


//VVIMP GENERIC EXAMPLE ,here also observe that in arrow function cases <T> comes before bracket

interface IPost{
    message:string;
    page:number;
}

                                   

                                     //this means it will return promise of T type as async fucnit return Promise
const fetchData=  async<T>(path:string):Promise<T>  =>{

const response=await fetch(`/xyz/${path}`);
return response.json();

}
//we made fetchData function generic here ,now it can be used to fetch userData,posts ,or anything hume bs type describe kr deni hai

(async()=>{
                          //VVVIMPP. new thing learned we have to tell the type paramter here in some cases while using a generic function
    const posts=await fetchData<IPost[]>("/posts")
   
    posts[0].message; //see i am able to access message and page properties which would not have been posible if it wasnt generiv
    posts[0].page;

})()


//-------------------------------------------------------------------------------------------------------------------------------------

//Structural typing / Duck 
//In TypeScript, structural typing means that the type of an object is determined by its shape (its properties and methods) rather than its 
//explicit type declaration


interface User{
    username:string;
    password:string;
}

function validation(banda:User){

    return banda.username;

}

const mohan={ 
    username:"Monu",
    password:"123",
}

const response=validation(mohan);//see it gives no error even though the validation fucntion expects input of User type and i gave simple mohan
                                 // which is an object this is structural or duck typing

          //mohan is just an object and is not of type User still it worked caused inka structure same tha
           //matlab agr 2 object ka shape same to vo typescript ke hisab se same even if unka type alag ho


//-----------------------------------------------------------------------------------------------------------------------------------------------
//2 important concepts

//1. how to specify function in interface

interface examp{
    naam:string;
    pata:string;
   login(username:string,password:string):boolean; //imp
}

const ronu:examp={
    naam:"ronnu",
    pata:"Jammu",
    login(username:string,password:string){
        return true;
    }
}

//2.inference Inference in TypeScript is the process by which the compiler automatically determines the type of a variable, function, or 
//expression based on its context and usage. 

let xyz="123";  //
let abc=1;

const numbers=[1,2,3] //see in sab mein typescript khud hi inference krke inki type determine kr raha hai


//--------------------------------------------------------------------------------------------------------------------------------------------------------


// tsc --init (for tsconfig.json)file


// Using the include and exclude properties

// {
//   "compilerOptions": {
//     "module": "system",
//     "noImplicitAny": true,
//     "removeComments": true,
//     "preserveConstEnums": true,
//     "outFile": "../../built/local/tsc.js",
//     "sourceMap": true
//   },                                                                                                                             
//   "include": ["src/**/*"],
//   "exclude": ["**/*.spec.ts"] }

  
 