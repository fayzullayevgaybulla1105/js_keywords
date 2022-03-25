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
    s = 30;
    /* TypeError  - Assignment to constant variable  --
     constant bilan e`lon qilingan o`zgaruvchini qiymatini o`zgartira olmaysan degan TypeError beradi.*/
}
console.log(s);

