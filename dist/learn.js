"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nam = "Adamya";
//also here specifying what type should function return (:void,string,number,boolean etc)
function spell(naam) {
    return naam;
}
console.log(spell(nam));
const moj = {
    reason: "No reason needed",
    kitnibaar: 100000,
};
console.log(moj);
const Harsh = {
    name: "Harsh",
    location: "Jewel",
};
//now book interface will have both price and pages property because it merged
const meriBook = {
    price: "500",
    pages: 200
};
//---------------------------------------------------------------------------------------------------------------
//random concept -  type Adamya=any matlab kuch bhi type ho skata ha    any[] array of any matlab kisi bhi cheez ka array
//-----------------------------------------------------------------------------------------------------------------------
//Generics
//Generics in TypeScript are used to create reusable, flexible, and type-safe code. 
//placeholder name of type paramter<T>                      //we can use any character or word in place of T
function identtity(numm) {
    return numm; //Here, T is a generic type parameter. The identity function can work with any type (number, string, etc.), but TypeScript 
    //ensures that the return type matches the input type.
}
const naaame = "waaow";
const masti = identtity(naaame);
//this means it will return promise of T type as async fucnit return Promise
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`/xyz/${path}`);
    return response.json();
});
//we made fetchData function generic here ,now it can be used to fetch userData,posts ,or anything hume bs type describe kr deni hai
(() => __awaiter(void 0, void 0, void 0, function* () {
    //VVVIMPP. new thing learned we have to tell the type paramter here in some cases while using a generic function
    const posts = yield fetchData("/posts");
    posts[0].message; //see i am able to access message and page properties which would not have been posible if it wasnt generiv
    posts[0].page;
}))();
function validation(banda) {
    return banda.username;
}
const mohan = {
    username: "Monu",
    password: "123",
};
const response = validation(mohan); //see it gives no error even though the validation fucntion expects input of User type and i gave simple mohan
const ronu = {
    naam: "ronnu",
    pata: "Jammu",
    login(username, password) {
        return true;
    }
};
//2.inference Inference in TypeScript is the process by which the compiler automatically determines the type of a variable, function, or 
//expression based on its context and usage. 
let xyz = "123"; //
let abc = 1;
const numbers = [1, 2, 3]; //see in sab mein typescript khud hi inference krke inki type determine kr raha hai
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
