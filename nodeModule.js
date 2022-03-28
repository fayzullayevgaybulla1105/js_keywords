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
