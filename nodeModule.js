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
/*fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.log(err);
  }
  // console.log("Asynxron o`qish: " + data.toString());
})
*/
/* -------------------------------------------- */
// Synchronous read
// let data = fs.readFileSync('input.txt')
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

/****************************************************************************** */
/* -------------- crypto ------------------------- */
const crypto = require('crypto')
const secret = "salim"
const hash = crypto.createHmac('sha256', secret)
  .update('i love you')
  .digest('hex')
// console.log(hash);

const { getHashes } = require('crypto')
// console.log(getHashes()); // hashlash turlari -----------
/*
[
  'RSA-MD4',
  'RSA-MD5',
  'RSA-MDC2',
  'RSA-RIPEMD160',
  'RSA-SHA1',
  'RSA-SHA1-2',
  'RSA-SHA224',
  'RSA-SHA256',
  'RSA-SHA3-224',
  'RSA-SHA3-256',
  'RSA-SHA3-384',
  'RSA-SHA3-512',
  'RSA-SHA384',
  'RSA-SHA512',
  'RSA-SHA512/224',
  'RSA-SHA512/256',
  'RSA-SM3',
  'blake2b512',
  'blake2s256',
  'id-rsassa-pkcs1-v1_5-with-sha3-224',
  'id-rsassa-pkcs1-v1_5-with-sha3-256',
  'id-rsassa-pkcs1-v1_5-with-sha3-384',
  'id-rsassa-pkcs1-v1_5-with-sha3-512',
  'md4',
  'md4WithRSAEncryption',
  'md5',
  'md5-sha1',
  'md5WithRSAEncryption',
  'mdc2',
  'mdc2WithRSA',
  'ripemd',
  'ripemd160',
  'ripemd160WithRSA',
  'rmd160',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha3-224',
  'sha3-256',
  'sha3-384',
  'sha3-512',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512-224',
  'sha512-224WithRSAEncryption',
  'sha512-256',
  'sha512-256WithRSAEncryption',
  'sha512WithRSAEncryption',
  'shake128',
  'shake256',
  'sm3',
  'sm3WithRSAEncryption',
  'ssl3-md5',
  'ssl3-sha1',
  'whirlpool'
]
*/

const { Buffer } = require('buffer')
const { hkdf, hkdfSync } = require('crypto')

/******** hkdf  asynchronous **************/
/* hksf asychronous da hkdfSycn dan farqli 6- argumentida callback funksiya qabul qiladi. 
         sha512 64bayt uzunlikdagi hashni hosil qiladi. ArrayBuffer holatida keladi
         Buffer.from(derivedKey) buffer holatidan toStringga hex orqali o`tkazib olinadi.
         5-argument sifatida berilgan 64 qiymat ham sha512 ning 64 baytlik hash uzunlik chegarasini belgilaydi.
            */
hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) => {
  if (err) throw err
  // console.log(Buffer.from(derivedKey).toString('hex'));
})

/******** hkdfSync  synchronous **************/
const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64)
// console.log(Buffer.from(derivedKey).toString('hex'));

/**************************************** */
/* encryt - decrypt */

const sec = "Hello world"; // shifrlash uchun kalit so`z
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048    // xeshning xavfsiz xesh uzunligi uchun
})

// encryption function  - shifrlash funksiyasi
//sha256 dan foydalanib 
const encryptMe = crypto.publicEncrypt({
  key: publicKey,
  padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  oaepHash: "sha256"
}, Buffer.from(sec)); // shifrlashni avval ikkilik fayliga aylantirib
// console.log("Hash: ",encryptMe.toString('base64'));

// decrypt - shifrni ochish

const decryptData = crypto.privateDecrypt({
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  oaepHash: "sha256"
}, encryptMe)

// console.log("\nDecrypt data: ", decryptData.toString());
/****************************************************** */


/* process */
let { arch, argv } = require('process')
// console.log('this process architecture is ', arch);
argv.forEach((val, index) => {
  // console.log(`${index}: ${val}`);
})
/**
  0: /usr/bin/node
  1: /media/fayzullayev/613532c5-8a62-4643-be39-1fb78f04378c/fozil exam/nodeModule.js
 */

// console.log(process.argv[1]);   // js faylimizni joyini olib beradi

// console.log(process.channel);    // Agar IPC kanali mavjud bo`lmasa bu undefined qaytaradi.

let { chdir, cwd } = require('process')
try {
  chdir('/tmp')
  // console.log('new directory: ', cwd());
} catch (error) {
  console.error('chdir :', error);
}
// console.log(process.config);  // configuratsiya parametrlarini qaytaradi
// console.log(process.env);  // foydalanuvchi muhitini o`z ichiga olgan objectni qaytaradi
// console.log(process.execPath);  // node.js faylining  haqiqiy joyini olib beradi // /usr/bin/node

// console.log(process.memoryUsage());
/*
heapTotal va heapUsed v8 xotirasidan foydalanishni miqdori. External v8 tomonidan boshqariladigan
  js objectlari bilan bog`langan C++ objectlarining xotiradan foydalanishini bildiradi.
  rss - rezident to`plam hajmi - asosiy xotira qurilmasidan egallagan joy. 
  u yigindi, kod segmenti va stekni o`z ichiga oladi
{
  rss: 34340864,
  heapTotal: 5406720,
  heapUsed: 4853192,
  external: 479006,
  arrayBuffers: 28867
}
*/

/* process.nextTick() - o`zidan keyingi brlgi chiqib bo`lgandan keyingina qayta ishlaydigan funksiya */
// console.log('start');
process.nextTick(() => {
  // console.log('nextTick callback');
});
// console.log('scheduled');
/*
start
scheduled
nextTick callback
 */


// console.log(process.pid);   //jarayonning PID kodini qaytaradi, bu kod unical emas
// console.log(process.platform);    // linux

/**************************************************** */
/* http - module - http module orqali server yaratib olishimiz va unga callbackda 2ta argument berishimiz kerak.
                  (request,response) 
                  request - serverga kelayotgan so`rov. request.url - ya`ni userdan serverga kelayotgan so`rov manzili
                  response - serverdan foydalanuvchiga qaytadigan javob
                  */
const http = require('http');
/*const options = {
  host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
  const ip = req.socket.localAddress; // req.socket.localAddress orqali kompyuterimizdagi IP adressni olishimiz mumkin
  const port = req.socket.localPort;  // Port raqamimizni olishimiz mumkin
  // console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // consume response object
});
*/

let userss = [
  {
    name: "Alex",
    lastname: "Smith"
  },
  {
    name: "John",
    lastname: "Doll"
  }
]
let port = 2000
const server1 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write('Hello world!\n"/users" root');
    res.end()
  }
  if (req.url === '/users' && req.method === "GET") {
    res.write(JSON.stringify(userss), 'utf-8')
    res.end()

  }
  if (req.url === "/key") {
    res.write(path.join(__dirname, 'keyword.js'))
  }
});
// server1.listen(port,()=>{
//   console.log(`http://localhost:${port}`);
// }); // server quyidagi portda ishga tushadi

/***************************************************** */

/*
let rl = require('readline')
const rline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

rline.question('ism: ', (ism) => {
  rline.question('Familiya: ', (familiya) => {
    rline.question("yosh: ", (yosh) => {
      console.log(`\nFamiliya: ${familiya}\nIsm: ${ism}\nYosh: ${yosh}`);
      rline.close()
    })
  })
})
*/
// console.log(process.stdin);

/*
cluster asosan filelar bilan ma`lumot alamashish uchun ota-bola ya`ni keyingi fayllar bilan aloqa qilish.
      ishlab turgan portlarni tekshirish, bandligini yoki online ekanligini tekshirib turuvchi module hisoblanadi.
      asosan child_prosess ning child.fork() funksiyasidan foydalanib ishlaydi.
      4ta methodi mavjud.
      spawn, exec, execfile, fork
      synxron yoki asynxron ishlatish mumkin.
       */

const cluster = require('cluster');
if (cluster.isMaster) {
  console.log('I am master');
  cluster.fork();
  cluster.fork();
}
else if (cluster.isWorker) {
  console.log(`I am worker #${cluster.worker.id}`);
}
 