/* Javascript variables */

/*------------ var ------------------*/


/* o`zgaruvchini var orqali 2xil e`lon qilib olish mumkin. 
    O`zgaruvchini qiymatlarini ham istalgancha o`zgaritirib ketishimiz mumkin (typeni ahamiyati yo`q). */

var son1 = 50;  // initialization
var son;    // decloration

console.log(typeof (son))   // undefined

son = 20;   // assignment
console.log(typeof (son))   // type Number

son = "25"  // re-assignment
console.log(typeof (son))   // type string

/* globalda yoki local scopeda bir xil nom ostida var orqali o`zgaruvchini takror e`lon qilish mumkin */

var son = [45, 44, 25];   // redecloration
console.log((son[0]));  // 45

/* var orqali e`lon qilingan o`zgaruvchi global yoki local scopelarga amal qilmaydi. 
    globalda var orqali e`lon qilingan o`zgaruvchi localda ham shu nom bilan var orqali 
    e`lon qilingan bo`lsa, localning scopedan keyin ya`ni globalda shu o`zgaruvchini 
    consolega chiqarganimizda localdagi o`zgaruvchini qiymatini beradi*/
{
    {
        var son1 = 35;
    }
}
console.log(son1);


/******************************************************************* */
/*------------ let ------------------*/


/* o`zgaruvchini let orqali 2xil e`lon qilib olish mumkin. 
    O`zgaruvchini qiymatlarini ham istalgancha o`zgaritirib ketishimiz mumkin (typeni ahamiyati yo`q). */

let son2 = 50;  // initialization
let son3;    // decloration

console.log(typeof (son3))   // undefined

son3 = 20;   // assignment
console.log(typeof (son3))   // type Number

son3 = "25"  // re-assignment
console.log(typeof (son3))   // type string



/* let orqali e`lon qilingan o`zgaruvchi local scope ichida bo`lsa  o`zgaruvchi
    shu scopening ichida amal qiladi. 
    globalda let orqali e`lon qilingan o`zgaruvchini, local scopelarga chaqirish mumkin. 
    lekin localda e`lon qilingan o`zgaruvchini globalda yoki qo`shni scopeda chaqirib bo`lmaydi. 
    (ichma ich scope bundan mustasno, bu scope ichki scope uchun global hisoblanadi) */

//global
son3 = '25'
{
    //local-global
    {
        //local-global
        {
            //local

            let son3 = '123456'
            console.log(son3);
        }
        son3 = 41
        console.log(son3);  //41
    }

    console.log(son3);  // 41

    son3 = 'olma'
    console.log(son3);  // olma

}
console.log(son3);  //olma

/* let orqali bir o`zgaruvchini globalda yoki local scopeda orasida bir xil nom ostida e`lon qilib bo`lmaydi. 
let raqam = 25;
let raqam = 41;
*/




/******************************************************************* */
/*------------ const ------------------*/
/* const o`zi o`zgarmas degan ma`noni bildiradi. const orqali o`zgaruvchimizga 
        o`zgarmas qiymat berib ketiladi. 
        const decloration qilib keyin qiymat berib ketib bo`lmaydi. 
        E`lon qilingan o`zgaruvchini qiymatini berib  ketish shart. 
        uning qiymatini keyin o`zgartirib bo`lmaydi. 
        o`zgarmas deb const bilan e`lon qilib olganimiz uchun */

const s = 20;
{
    {
        console.log(s);
    }
    // s = 30;
    /* TypeError  - Assignment to constant variable  --
     constant bilan e`lon qilingan o`zgaruvchini qiymatini o`zgartira olmaysan degan TypeError beradi.*/
}
console.log(s);


/*Java script data tiplari  quyidagi katta guruhlarga bo`linadi

1. primitive data  types
2. structural types


1. primitive data types:

    - Number
    - BigInt
    - String
    - boolean
    - Undefined
    - Null
    - Symbol
    
2. Structural type:
    new Array()[]
    new Object(){}
    new Map()
    new Set()
    .. har qanday new keywoardi bilan boshlangan biror class instanse(Object)
    function(){}

    */

// 1. Number
let num1 = 123 //integer numbers
let num2 = 123.44 //float numbers
// Infinity - har qanday sondan katta cheksiz son. Matematik Infinity
// Nan - xato matematik amal bajarilganda paydo bo`ladi.

let inf = (1 / 0);        // infinity
let nan = 'string' / 2     // Nan

//2. BigInt 
/*          javascript ((2**53)-1) dan katta va -((2**53)-1) dan kichik sonlarni ifodalay olmaydi. 
                Bundan katta raqamlarni ifodalash uchun BigInt tipi qo`shilgan. 
                Bu raqamlar oxirida n harfi qo`shish bilan ifodalanadi.
 */
const bigInt = 1234567890123456789012345678901234567890n
const bigint = 78n


//3.String 
/*
Javascriptda qo`shtirnoq bilan o`rab olingan bo`shliq, belgilar yoki bo`shliqlar to`plami 
string data typega kiradi. String qiymatlarni 3 xil usulda yozish mumkin:
*/
let davlat = 'O\'zbekiston';
let singleQuoted = 'assalom, ' + davlat;
let doubleQuoted = "assalom, " + davlat;
let backtickQuoted = `assalom, ${davlat}`;

/* double va single quoted ya`ni bittalik yoki ikkitalik qo`shtirnoqlar oddiy stringlar hisoblanadi.
Backtick esa stringning ichida ${} belgisi orqali javascript expression kiritish mumkin.  */

//4. Boolean
/* boolean odatda biror expressionlar ustida logic amallarni bajarganda bizga qaytadigan qiymat.
u true va false. Bu biror ifodaning true(rost) yoki false(yolg`on) ekanligini bildiradi */

let t = true;
let a = 10 + 2 > 13;
console.log(a);     // false chunki 12 13dan katta emas

