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

