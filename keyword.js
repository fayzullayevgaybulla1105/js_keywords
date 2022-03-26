/* Javascript variables */

/*------------ var ------------------*/


/* o`zgaruvchini var orqali 2xil e`lon qilib olish mumkin. 
    O`zgaruvchini qiymatlarini ham istalgancha o`zgaritirib ketishimiz mumkin (typeni ahamiyati yo`q). */

var son1 = 50;  // initialization
var son;    // decloration

// console.log(typeof (son))   // undefined

son = 20;   // assignment
// console.log(typeof (son))   // type Number

son = "25"  // re-assignment
// console.log(typeof (son))   // type string

/* globalda yoki local scopeda bir xil nom ostida var orqali o`zgaruvchini takror e`lon qilish mumkin */

var son = [45, 44, 25];   // redecloration
// console.log((son[0]));  // 45

/* var orqali e`lon qilingan o`zgaruvchi global yoki local scopelarga amal qilmaydi. 
    globalda var orqali e`lon qilingan o`zgaruvchi localda ham shu nom bilan var orqali 
    e`lon qilingan bo`lsa, localning scopedan keyin ya`ni globalda shu o`zgaruvchini 
    consolega chiqarganimizda localdagi o`zgaruvchini qiymatini beradi*/
{
    {
        var son1 = 35;
    }
}
// console.log(son1);


/******************************************************************* */
/*------------ let ------------------*/


/* o`zgaruvchini let orqali 2xil e`lon qilib olish mumkin. 
    O`zgaruvchini qiymatlarini ham istalgancha o`zgaritirib ketishimiz mumkin (typeni ahamiyati yo`q). */

let son2 = 50;  // initialization
let son3;    // decloration

// console.log(typeof (son3))   // undefined

son3 = 20;   // assignment
// console.log(typeof (son3))   // type Number

son3 = "25"  // re-assignment
// console.log(typeof (son3))   // type string



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
            // console.log(son3);
        }
        son3 = 41
        // console.log(son3);  //41
    }

    // console.log(son3);  // 41

    son3 = 'olma'
    // console.log(son3);  // olma

}
// console.log(son3);  //olma

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
        // console.log(s);
    }
    // s = 30;
    /* TypeError  - Assignment to constant variable  --
     constant bilan e`lon qilingan o`zgaruvchini qiymatini o`zgartira olmaysan degan TypeError beradi.*/
}
// console.log(s);


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
// console.log(a);     // false chunki 12 13dan katta emas

//5. Undefined
/* Undefined xuddi null qiymatiga o`xshaydi. Lekin farqli. U odatda topilmagan yoki biror
o`zgaruvchi e`lon qilib unga qiymat berilmaganda uning qiymati undefined bo`ladi. */
let und
// console.log(und); // undefined
let und1 = undefined
// console.log(und1); // undefined

//6. Symbol
/* Symbol data tiplari odatda objectlar uchun takrorlanmas kalitlar(keys) yasab berish uchun ishlatiladi */
let sym1 = Symbol('foo')
let symObj = Object(sym1)
// console.log(typeof (sym1));      // symbol
// console.log(typeof (symObj));    //  Object



/******************* Scope ******************** */
/* Scope asosiy 2 turga bo`linadi. Global va local scope. Scope deganda ma`lum 1 kod
bloki tushuniladi.
    
    function(){},
     for(){}, 
     if(){}, 
     while(){}  
     
    1. Global scope butun boshli JS file hisoblanadi
    2. Local scope(block scope) - ma`lum bir funksiya, loop, if scope tushuniladi.
    
    Qoida:
    1. Ota scope hech qachon bola scopeda e`lon qilingan o`zgaruvchiga ulana olmaydi
    2. Bola scope agar biror o`zgaruvchi  o`zida e`lon qilinmagan bo`lsa, uni ota scopedan oladi
    3. Bola scope ota scopedagi o`zgaruvchini re-assignment qila oladi.
    4. Aka-uka scopelar hech qachon to`g`ridan to`g`ri bir biridagi o`zgaruvchini ololmaydi.
    */

/******************************************* */

let meva = 'olcha'
{
    {
        meva = 'shaftoli'
    }
}
// console.log(meva);   // shaftoli
/******************************************* */
let meva1 = 'olma'
{
    {
        let meva2 = 'anor'
    }
    {
        let meva2 = 'ananas'

    }
    // console.log(meva2); // meva2 topilmadi deb ReferenceError beradi
}


/*********************************************************** */
/**************** JavaScript Arithmetic Operators (+,-,/,*,**,%) ********************** */
/*
(+) 
    1. Raqamlarni matematik qo`shadi.
    2. Stringni konkatinatsiya qiladi. 'a'+1 = a1 yonma-yon qo`shish. 
        qiymatlardan biri yoki ikkisi ham string bo`lsa konkatinatsiya qiladi. 
    3. Primitive data type larni raqamga o`giradi
    console.log(+true) // 1
    console.log(+'')    // false
    console.log(+'a')    // Nan

(+) dan boshqa matematik operatorlar 2ta qiymat orasida matematik hisob-kitob qilayotganda,
    agar ularni raqamga o`girish imkoni bo`lsa, avval ularni raqamga o`girib, keyin ularni matematik hisoblaydi, 
    yo`qsa Nan qiymat beradi.
    */
// console.log(true - false);      // 1
// console.log('jkl' - false);     // Nan
// console.log('' - false);        // 0
// console.log('' - true);       // -1

/**************************JavaScript Assignment Operators */
/**************************Modify and sign operators**************** */
//    += -= *= /= %=
let m = 20;
m += 5;

// console.log(m);     //25
m %= 2
// console.log(m);     // 1    - m ning qiymatini 2ga modi olindi natija 1 chiqdi

let str = "salom ";
let str1 = 'Baxor';
str += str1;
// console.log(str);       // Salom Baxor

/****************************************************** */
/**************** JavaScript Incrementing and Decrementing Operators ******************* */
/*
    Pre-increment (oldindan o`sish)     ||          ++x   ||  x ni  1 marta oshiradi, keyin x ni qaytaradi
    Post-increment (keyingi o`sish)     ||          x++   ||  x ni qaytaradi, keyin esa x 1 marta oshiradi
    Pre-decrement (oldindan kamayish)   ||          --x   ||  x ni  1 marta kamaytirib, keyin esa x ni qaytaradi
    Post-dectement (kamaytirish)        ||          x--   ||  x ni qaytaradi, keyin esa x 1 marta kamaytiradi

*/

let inc = 5
// console.log(inc++); //5 //
// console.log(inc);   //6

let x = '41';
// console.log(x--);   // 41
// console.log(x);     // 40

/****************************************************** */
/****************** Mantiqiy operator ********************/
/*
    &&      AND(VA)     x && y
    ||      Or(yoki)    x || y
    !       Not(emas)   !x
*/


/****************** JavaScript Comparison Operators (Taqqoslash operatorlari) **********/

/*
    ==      - teng(qiymati teng)
    ===     - teng(qiymati va data type teng)
    >       - katta
    >=      - katta yoki teng
    <       - kichik
    <=      - kichik yoki teng
    !=      - teng emas(qiymat)
    !==      - teng emas(qiymati va data type)
 
 */
let X = '125'
let Y = 125
// console.log(X == Y);  // true - qiymatlar teng.
// console.log(X === Y);  // false - qiymati va data type teng emas.
// console.log(X !== Y);  // true - qiymati va data type teng. chunki biz inkor operatorini ishlatdik



/***************************************************************************************** */
/*************************** if shart operatori ******************/
let num = 25;
let numb1 = '25'
/*  if(shart){

    }
    else{

    }
*/
// shart operatoridan foydalanib sonlarning qaysi biri kichikligini tekshirib olishimiz mumkin.
if (num > numb1) {
    // console.log('num katta emas');
} else if (num < numb1) {
    // console.log('numb1 katta emas');

} else {
    // console.log('num va numb1 teng');

}
/***************** Switch  ******************* */
/*  switch ham if else bilan deyarli bir xil ishlaydi. Farqi shundaki. switch operatori satrma-satr bajaradi 
    va JS rost deb hisoblagan case bandini topgach, u nafaqat ushbu case bandiga mos keladigan kodni bajaradi,
     balki barcha keyingi case bandlarini oxirigacha bajaradi. uni oldini olish uchun togri deb topilgan caseda berilgan shartni 
     bajarishi va bajarib bo`lgandan keyin 
     shartni tugatishi ya`ni switchni ish holatini to`xtatishi uchun break qo`yilishi shart. 
 */
let S = 41
let D = '41'
switch (S == D) {
    case true:
    // console.log("true qaytdimi");
    // break
    case false:
    // console.log('tiplari teng emas');
    // break
    default:
    // console.log(true);
    // break

}

/************* ternary operator *************** */
/* uchlik operatori deyiladi. bunda tekshirishi kerak bo`lgan shart, to`gri va noto`g`ri qiymatlar beriladi. ?: belgisi bilan boshqa 
    operatorlardan ajralib turadi */
let ter = 15 == '15' ? 'qiymatlar teng' : 'qiymatlar teng emas'
// console.log(ter);   // qiymatlar teng


/**************************************** */
/************ for sikl operatori ***********/

/* for(initialization; condition; increment/decrement){}
    - initialization - for loopining ichida ishlatmoqchi bo`lgan variable(o`zgaruvchi) ni e`lon qilib 
    olishimiz mumkin, let i =0
    - condition - shart - for loopining qachon to`xtashi haqida shart kiritamiz. Qachonki shart false 
    bo`lsagina for loopi to`xtaydi. i<10;
    - increment/decrement - initializationga kiritilgan sonning oshishi yoki kamayishi ni kiritishimiz mumkin i++/i--;
*/
let f = 'salom';
let arr = []
// i qachonki f.length-1 ga teng bo`lgunigacha oshib boradi
for (let i = 0; i <= f.length - 1; i++) {
    arr.push(f[i]);
}
// console.log(arr);   //  ['s','a','l','o','m']

/*for .. of    -   javascriptda array va stringni itiratsiya qilish uchun ishlatiladi. 
                for of regular for(initialization; condition; increment/decrement)
                qilib bo`lmaydi. for of - doim array va stringning 1-elementidan oxirgi 
                elementigacha ayalanadi va har bir elementini to`g`ridan-to`g`ri
                oladi*/

let letter = ['aziz', 'laziz', 'salim'];
for (let el of letter) {
    // console.log(el);// aziz laziz salim
}

/*for ..in      -   javascriptda for in array, string, objni itiratsiya qiladi.  
                for ..in da regular for(initialization; condition; increment/decrement)
                qilib bo`lmaydi. for ..in array va string bilan ishlatilganda har 
                1 elementning indexini olib beradi. Object bilan ishlatilganda 
                objectning property(key) ini olib beradi.*/
let fin = ['salim', 'malim']
for (let el in fin) {
    // console.log(el);        // 0 1
    // console.log(fin[el]);
    /* fin[el] fin ning el inchi indexdagi qiymatini bilishimiz mumkin. 
        sababi el da for in bilan aylanganimiz uchun indexni olib beradi. 
        arrayimiz 2 uzunlikda. ya`ni el = 0-index va el = 1--index. fin[el] shu indexdagi qiymatini olib beradi.
    */
}

/************ while *********/
/* While - qachonki biror shart asosida ma`lum 1 kodlar blokini qayta ishga tushirish uchun ishlatiladi. Agar shart
            true bo`lsa cheksiz ishlayveradi. Qachonki false qiymat olgunigacha. While avval shartni 
            tekshirib keyin kodni ishga tushiradi */
let whil = 0
while (whil < 8) {
    whil++
    // console.log(whil);  // 1 2 3 4 5 6 7 8
}
// console.log(whil);      //8

/* do..While    -  biror shart asosida ishlaydi. Qachonki shart false bo`lgunigacha ishlaydi. 
                    Shart boshlanishidan false bo`lsa kod bir marta ishlaydi. 
*/
let result = 0;
let i = 0;

do {

    i = i + 1;
    result = result + i;

} while (i < 2);
// console.log(i);  //2


// console.log(result);
// expected result: "3"


/******     Array ********************* */
/*  Array - bir o`zgaruvchi nomi ostida bir nechta qiymatlarni saqlash imkonini beradi. 
            Arrayga index orqali bog`lanish mumkin. o`z ichida constructive va primitive 
            data typelarni saqlay oladigan container.*/

let colors = ['red', 'yellow', 'blue', 'dark']
for (let item of colors) {
    // console.log(item); // red yellow blue dark
}

for (let item in colors) {
    // console.log(item);           // 0 1 2 3
    //console.log(colors[item]);    //red yellow blue dark
}

/****************** Array methods ******************/

/* array.push('')        - bu method arrayning oxiridan element qo`shadi*/
colors.push('green')
// console.log(colors);    //   [ 'red', 'yellow', 'blue', 'dark', 'green' ] 

/* array.pop()        - bu method arrayning  oxirgi elementini o`chirib yuboradi */
colors.pop()
// console.log(colors);       // [ 'red', 'yellow', 'blue', 'dark' ] 

/* array.unshift('white) - bu method arrayning 0-indexidan element qo`shadi*/
colors.unshift('white')
// console.log(colors);      // [ 'white', 'red', 'yellow', 'blue', 'dark' ] 

/* array.shift()        - bu method arrayning 0-indexda turgan ya`ni arrayning birinchi elementini o`chirib yuboradi */
colors.shift()
// console.log(colors);

// delete               - arraydagi elementni o`chirish uchun arrayni chaqirib unga element indexini beramiz colors[2]
delete colors[2]
// console.log(colors);


/* array.splice(boshlanish, o`shirish, kiritilmoqchi bo`lgan element vergul qo`yib yoziladi)*/
//console.log(colors);                  //      [  'red', 'yellow', <1 empty o`chirib yuborilgan item>, 'dark' ]
colors.splice(0, 2, 'brown', 'darkblue'); //    0-indexdan 2-indexgacha bo`lgan elementlarni o`chir 2-index kirmaydi. o`chirgandan keyin bir kirigan elementlarni qo`shib qo`yadi    
// console.log(colors);                 //      [ 'brown', 'darkblue', 'blue', 'dark' ]


/* array.slice(start, end)  slice methodi bizga yangi massiv hosil qilib beradi. 
        boshlanish va tugash indexlarini kiritamiz. 
        agar boshlanish index kiritmasak ham 0-indexdan boshlab o`qishni boshlaydi. 
        biz bergan chegaralar ichidagi ma`lumotni yangi massivda saqlab beradi.
        massivni biz oxiridan ham o`qishimiz mumkin. (-2) -2inchi elementidan boshlab nusxa ol. 
        massivning uzunligigacha deb ham chegara qo`yishimiz mumkin.*/

// console.log(colors);
let col = colors.slice(1, colors.length)
// console.log(col);         // ['darkblue', <1 bo`sh joy>, 'dark']
let ar1 = [1, 2, 4, 5, 6, 'salim', 'nodir', 'alex']
let sp = ar1.slice(-5, 6)    // -5 inchi elementidan o`qi 6-indexdagi elementigacha nusxa ol.  
// console.log(sp);            // [ 5, 6, 'salim']


/* array.concat(qo`shmoqchi bo`lgan arrayimizni kiritamiz)      - bu method array1 bilan array2 ni concatinatsiya 
                                                                qiladi yani bir butun arrayga aylantirib beradi */
let con = col.concat(sp)
// console.log(con);        // ['darkblue', <1 bo`sh joy>, 'dark', 5, 6, 'salim']


/* array.join()     -    massivdagi ma`lumotni stringga olib beradi join() qavs ichida qanaqadir 
                        belgi qo`yishimiz mumkin,  elementlar orasiga shu belgilarni qo`yib beradi, 
                        faqat kiritmoqchi bo`lgan belgimizni ham qavsni ichida stringga olib kiritishimiz kerak.
                        aks holda o`zi comma(,) vergul qo`yib chiqaradi.*/
// console.log(con);
let jo = con.join("-")
// console.log(typeof(jo));     // string
// console.log(jo);             // darkblue--dark-5-6-salim        // darkbluedan keyin 2ta - belgi keldi bo`sh joyni o`rniga ham - qo`yib beradi

/* array.fill(yangi element, 1,3)       - arraydagi elementlarni ushbu method orqali barchasini yoki belgilangan 
                                        indexdagilarini o`zgartirib yuborishimiz mumkin.  barchasini o`zgartirish uchun 
                                        fill ning ichiga yangi elementni o`zinigina kiritsak, barcha elementlarni o`rniga
                                        shu yangi elementimizni kiritib beradi. fill ga shart berish (yangi element, start, end) 
                                        start-bu boshlanish end - tugash yani  startdagi indexdan end ga kiritilgan indexgacha 
                                        bo`lgan elementlarni o`zgaritirib beradi. faqat startni o`zini ham berishimiz mumkin.*/

let animals = ['elephant', 'dog', 'cat', 'Monkey', '1mouse']
let fil = animals.fill('crocodile', 3)
// console.log(fil);           //['elephant', 'dog', 'cat', 'crocodile', 'crocodile']  - 3-indexdan boshlab qolgan indexdagi elementlarni ham crocodile ga o`zgartiradi tugash indexni kiritmaganimiz uchun


/* array.includes('')   -   ushbu method boolean true va false qaytaradi. unda kiritilgan element animals degan arrayning ichida bo`lsa true aks holda false qiymat qaytaradi. */
let includ = animals.includes('dog')    // animalsning ichiga 'dog' degan element bormi?
// console.log(includ);         // true

/* array.sort()     - sort methodi tartiblaydi. katta-kichik harflarni ascii table bo`yicha. raqamlarni ham. 
                    'Salom' va 'salom' bo`lsa birinchi bosh harf bilan yozilganini oladi. 
                    lekin 'Salom' va '1salom' bo`lsa birinchi boshida raqam kiritilgan 
                    stringni yozib davomidan 'Salom' ni qo`yib beradi */
let aral = ['salom', 'Salom', '1salomat']
// console.log(aral.sort());           //['1salomat', 'Salom', 'salom']

/* array.reverse()      -- bu method arrayning ichidagi elementlarning o`rnini o`zgartiradi. oxirgi element birinchi holatga,birinchi esa oxirgi holatga o`tadi */
let rev = ['12', 3, 4, 85, 'salim', 'saloh', 5, 7, 8]
// console.log(rev.reverse());          // [ 8, 7, 5, 'saloh', 'salim', 85, 4, 3, '12' ]


/* try{

}catch{

} finally{

}
            xatolarni oldini olish uchun try catch dan foydalaniladi. Qatiylikni tekshirish uchun finallyni ham qo`shishimiz mumkin.
            agar tryda xatolar bartaraf qilingan bo`lsa, yoki istisno bilan catch orqali bartaraf qilingan bo`lsa ham. finally
            orqali oxirgi tekshiruv amalga oshiriladi. hatolar ushlanganligi yoki istisno qilinganligidan qat`iy nazar bajariladi
*/
let result1 = 0;
try {
    result1 = add(10, 20);
} catch (e) {
    // console.log(e.message);   //add is not defined - add e`lon qilinmagan
} finally {
    // console.log({ result1 }); // {result1 : 0}
}

/* continue     - davom etish.  */
let a12 = 10
let sum = 0
for (let i = 0; i < a12; i++) {
    if (i % 2 == 0) {             /* i ning 2 ga modi olinganda qiymat 0 ga teng bo`lganlarini sum ga qo`shib tenglaymiz */
        sum += i             // 2 + 4 + 6 + 8
        continue
    }
    // console.log(i);     //  1 3 5 7 9
}
// console.log(sum);           // 20


/* function     -   ma`lum bir vazifani bajaradigan kodlar bloki funksiya deyiladi. funksiya ichidadi kod
                    qachonki funksiya chaqirilmagunigacha hech qachon ishga tushmaydi. funksiya o`zida 
                    argument qabul qiladi. funksiya ma`lum bir vazifani bajarib bo`lgach, oxirgi natijani
                    return keywoardi orqali chiqaradi. funksiya chaqirilganda undan qaytadigan qiymat, return keywoardi
                    orqali berilgan qiymatga teng. return qo`yilmasa undefined beradi.
                     
                    Agar objectning biror property(key) ida funksiya saqlansa u method deyiladi.
                    let son = {func:function(){}}
                    */

function mult(a, b) {
    return a * b
}
let summary = mult(2, 3)
// console.log('sum: ', summary);   // sum: 6

function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1
    } else {
        return "sonlar teng"
    }
    return 0
}
// console.log(compare(2, 5))       // 1

/* anonymus function        - (function(){})() - self inkoved -function. O`zini o`zi ishga tushiradigan funksiya. Uni chaqirish shart emas.
                            U faqat 1 marta ishga tushadi. Undan qaytadigan qiymatni o`zgaruvchiga olish mumkin. 
    
    funksiya turlari    -   function decloration     - function(){}
                            function expression      - let sum = function(){}
                            */



function middle(...nums) {
    let s = nums.length / 2 | 0
    if (nums.length % 2 == 0) {
        return [nums[s - 1], nums[s]]
    } else {
        return [nums[s]]

    }
}
// console.log(middle(10,20,30));       // [20]


let midd = function (...nums) {
    let mid = nums.length / 2 | 0
    let store = []
    if (!(nums.length % 2) && nums.length) {
        store.push(nums[mid - 1])
        store.push(nums[mid])
    } else {
        store.push(nums[mid])

    }
    return store
}
// console.log(midd(10,20,30));

function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}

let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 }
];
// console.log('Products sorted by name:');
products.sort(compareBy('name'));

// console.table(products);

// console.log('\nProducts sorted by price:');

products.sort(compareBy('price'));
// console.table(products); 


/************** Object ******************* */
/* object       - o`zining ichida primitive va constructive data type lar saqlay oladigan container.
                object o`zida propert(key) va value saqlaydi. uning valuelariga propertylari orqali bog`lanish mumkin.  */
let xx = { a: 25, b: 'salim' }
/* objectga ulanishning 2xil usuli bor:
                    1. dot notation
                    2. bracket notation
                     */
// 1.
// console.log(xx.a);      //  25
// 2
// console.log(xx['a']);   //  25
delete (xx.a)
// console.log(xx);        //   { b : 'salim' }
let obj = {
    name: "alex",
    fullname: "smith",
    age: 25,
    contact: "+1124784585",
    address: "USA"

}
let key = Object.keys(obj)
// console.log(key);    //  [ 'name', 'fullname', 'age', 'contact', 'address' ]

// objectning keyini va shu keyning valuelarini forEach orqali olish
Object.keys(obj).forEach(key => {
    let value = obj[key]
    // console.log(`${key}: ${value}`);
})

// objectning valuelarini bilib olish
let value = Object.values(obj)
// console.log(value);  // [ 'alex', 'smith', 25, '+1124784585', 'USA' ]

/* objectning key va valuelarini bilish. faqat bunda 1 massiv ichida har bir
 key va valueni 2ta element sifatida string holatida olib beradi*/
let entr = Object.entries(obj);
/*
    [
      [ 'name', 'alex' ],
      [ 'fullname', 'smith' ],
      [ 'age', 25 ],
      [ 'contact', '+1124784585' ],
      [ 'address', 'USA' ]
    ]
*/

let obj1 = {
    job: "backend developer",
    experience: "5 years",
    interest: "ping-pong"
}

/* Object.assign() methodi ikkita object ma`lumotlarini yangi objectga jamlab beradi */
let objSum = Object.assign(obj, obj1)
// console.log(objSum); 
/*
{
  name: 'alex',
  fullname: 'smith',
  age: 25,
  contact: '+1124784585',
  address: 'USA',
  job: 'backend developer',
  experience: '5 years',
  interest: 'ping-pong'
}
 */

/* in - ichida bor yo`qligini bilishimiz uchun kerak. bundan boolean natija qaytadi. true va false 
            objectning keyiga, arrayning indexlari bilan ishlaydi*/
const car = {
    make: "Honda",
    model: "Accord",
    year: 1998
}
// console.log('make' in car); // car ning ichida 'make' degan key mavjud bo`lsa true aks holda false chiqadi

let arra = ["red", 'blue', 'dark', 'brown']
// console.log('arra ning 0 index mavjudmi? : ',0 in arra);
// console.log(arra instanceof Array);
// console.log(arra instanceof Object);

let counter = {
    count: 0,
    next: function () {
        return ++this.count;
    },
}
// console.log(counter.next())
let brand = counter.next.bind(counter)
// console.log(brand());


function hello() {
    console.log('Hello', this);
}

const person = {
    name: "G'aybulla",
    age: 28,
    sayHello: hello,
    // sayHelloWindow: hello.bind(document),   
    /*bind uchun document kiritganimda Elenaning barcha ma`lumotlarini browser consolega chiqardi*/
    logInfo: function (job, phone) {
        // console.group(`${this.name} info:`)
        // console.log(`Name is ${this.name}`);
        // console.log(`Age is ${this.age}`);
        // console.log(`Job is ${job}`);
        // console.log(`Phone is ${phone}`);
        // console.groupEnd()
    }
}


let lena = {
    name: "Elena",
    age: 21
}
// person.logInfo.bind(lena, 'frontend-developer', '1245487')()
person.logInfo.call(lena, 'frontend-developer', '1245487')
// person.logInfo.apply(lena, ['frontend-developer', '1245487'])

/* bind, call, apply - bizga context olib berish uchun kerak. ular bir xil vazifani bajaradi.
farqi. chaqirilishida
person1.logInfo.bind(tom,'doctor')()
person1.logInfo.call(tom,'doctor')
person1.logInfo.apply(tom,['doctor'])


*/