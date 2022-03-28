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
