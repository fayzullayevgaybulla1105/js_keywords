// console.log(__dirname);     //file turgan manzilni olib beradi
// console.log(process.cwd()); // node qaysi folderda ishga tushgan bo`lsa shu folderni manzilini olib beradi

/********************* Node Module ******************** */
/* modul     - o`zlarining bog`langan funksionalligi asosida tashqi ilovaga bilan o`zaro ta`sir qiluvchi kod bloklaridir. funksiyalardir
                qandaydir bir jarayonni osonlashtirish uchun modullardan foydalanamiz.
                fs module buning asosiy ustunligi fayllar bilan ishlaydi. o`qish, yozish, yangi file ochish 

modullar 3 turga bo`linadi
1. Core modules // asosiy
            - require bilan chaqirib biror o`zgaruvchiga tenglab, qolgan funksiyalaridan ya`ni uning ichki ishchi funksiyalaridan
            foydalanish imkoni

2. local Modules
            - nomi bilan aytib turibti. mahalliy. js fayllariga funksiyalar yozib ularni export qilib shu faylni boshqa bir faylga 
            require qilib bog`lanib shu js fayli funksiyalaridan foydalanish. ya`ni u ham module hisoblanadi
            faqatgina biz uni qo`shni faylga yaratib ishlatayabmiz. 
            
3.  3-tomon modules
            - npm paketlari asosida o`zimizga global yoki loyiha papkasida o`rnatilishi.
            express, mongoose, react, angular hokazo
                */
// fs - file system - fayllar bilan ishlovchi module(o`chirish, yozish, o`qish, yaratish)
/*
fayllar bilan ishlash sinxron yoki asinxron holatlarda ishlash mumkin. 
            Sinxron - bloklangan funksiya deyish mumkin. Ya`ni har bir operatsiya tugashini
                    kutadi. shundan keyingina keyingi amalni bajaradi. keyingi buyruqni bajarilishini bloklaydi,
                    ya`ni so`rov bajarilmagunicha, buyruq bajarilmaydi.
            
            Asinxron - bloklanmagan funksiya. Hech qachon har bir operatsiya tugashini kutmaydi. Operatsiyalarni birinchi
                    bosqichda bajaradi. Har bir operatsiya natijasi natija mavjud bo'lgandan keyin qayta ishlanadi, ya'ni 
                    har bir buyruq oldingi buyruq bajarilgandan so'ng tez orada 
                    bajariladi. Oldingi buyruq fonda ishlaydi va ma'lumotlarni qayta
                     ishlashni tugatgandan so'ng natijani yuklaydi.
*/
let fs = require('fs');
// const path = require('path/posix');
/* -------------------------------------------- */
// Asychronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    // console.log("Asynxron o`qish: " + data.toString());
})

/* -------------------------------------------- */
// Synchronous read
let data = fs.readFileSync('input.txt')
// console.log("Synchronous read: " + data.toString());


/********************************************** */
// fs.open()
// Asynchronous  - Opening File
// console.log("Opening file!");
/*fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    // console.log("File open successfully");
})
*/
/************************************************* */
// fs.writeFile

// console.log("writing into existing file");
let data1 = "Geek For Geeks"
/*fs.writeFile('input.txt', data1, (err) => {
    if (err) {
        return console.error(err);
    }
    // console.log('Data written successfully');
    // console.log("Let's read newly written data");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            console.error(err);
        }
        // console.log("Asynchronous read: " + data.toString());
    })
})*/

/********************************************** */
// fs.rename('ozgarishi kk bo`lgan fayl nomi.formati', 'yangi nom.format kiritilishi kerak', (function){})  - file nomini o`zgartirish
/*fs.rename('new.txt', 'input.txt',(err)=>{
    if(err){
        return console.error(err);
    }
    // console.log("File rename");
})
*/
/**************** path**************** */
let path = require('path')

// console.log( path.extname('nodeModule.js'))     // .js

/*
console.log(path.format({
    root:"/",
    name:"nodeModule",
    ext:".js"

}));            // /nodeModule.js
*/
// console.log(path.join(__dirname, 'nodeModule.js')); ///media/fayzullayev/613532c5-8a62-4643-be39-1fb78f04378c/fozil exam/nodeModule.js
// console.log(path.join(process.cwd(), 'nodeModule.js'));
//console.log(path.basename('/media/fayzullayev/613532c5-8a62-4643-be39-1fb78f04378c/fozil exam/nodeModule.js'));     //nodeModule.js - base nomini olib beradi
// console.log(path.dirname('/media/fayzullayev/613532c5-8a62-4643-be39-1fb78f04378c/fozil exam/nodeModule.js')); 
/*/media/fayzullayev/613532c5-8a62-4643-be39-1fb78f04378c/fozil exam -- filemiz joylashgan papkagacha manzilni chiqarib berar ekan */