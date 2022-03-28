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

/* OS -operatsion tizim bo`yicha yani bizdagi OZU, Xotira, VideoCard, 
        OT haqida ishlab turgan kompyuterimizning barcha harakteristikasini beradi */
let os = require('os')
// console.log(os.hostname());     // kompyuterimiz nomi - fayzullayev-HP
// console.log(os.freemem());          // 2610647040 xotiradagi bo`sh tizimni butun sonda baytlarda miqdorini qaytaradi 
// console.log(os.homedir());       // /home/fayzullayev
// console.log(os.cpus());             // microprosessor nomini uning ishlash holatlarini ko`rish mumkin
/**
 * [
     {
        model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx',
        speed: 1630,
        times: {
          user: 3765180,
          nice: 111180,
          sys: 447620,
          idle: 21768440,
          irq: 0
       }
     },
     {
       model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx',
       speed: 1700,
       times: { user: 3457830, nice: 80520, sys: 284420, idle: 21409820, irq: 0 }
     }
    ]
  
 */
// console.log(os.arch());     // o`rnatilgan tizimimiz qaysi razryaddaligini ko`rsatadi x64
// console.log(os.version());      // #42~20.04.1-Ubuntu SMP Tue Mar 15 15:44:28 UTC 2022 o`rnatilgan OT nomini versiyalarini ko`rsatadi 
// console.log(os.endianness());       // LE
// console.log(os.getPriority());      // 0
// console.log(os.networkInterfaces()); Qaysi tarmoqda ishlayabmiz. IP adresslarimiz tarmoq bo`yicha barcha ma`lumotlar
/**
 {
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    }
  ],
  wlo1: [
    {
      address: '192.168.1.42',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '28:cd:c4:05:b6:fb',
      internal: false,
      cidr: '192.168.1.42/24'
    },
    {
      address: 'fe80::befa:2ff1:c351:bf18',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '28:cd:c4:05:b6:fb',
      internal: false,
      cidr: 'fe80::befa:2ff1:c351:bf18/64',
      scopeid: 3
    }
  ]
}
 */
// console.log(os.platform());         // linux - Qaysi platformada ishlab turgani
// console.log(os.release());              // 5.13.0-37-generic