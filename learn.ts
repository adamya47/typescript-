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



