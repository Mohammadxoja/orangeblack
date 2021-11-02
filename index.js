const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const q = document.querySelector('#q');
const a = document.querySelector('#ans');
const btna = document.querySelector('#btna')
let res, question = [], answer = [];

const data = [
    {
        q: "O‘chov birliklarining xalqaro sistemasida magnit maydon induksiyasi oqimining birligi qanday?  ",
        a: "tesla"
    },

    {
        q: "Magnit oqimining ta’rifini koʻrsating.",
        a: "S  yuzadan  o‘tayotgan  magnit  induksiya  oqimi  deb,  𝐵⃗   magnit  induksiya  vektorning yuzaga \n" +
            "ko‘paytmasiga aytiladi "
    },

    {
        q: "Rаsmdа 4 juft tоk o‘tish yo‘nаlishlаri tаsvirlаngаn. Qаysi hоldа ulаr o‘zаrо itаrishаdi?  ",
        a: "javob yogigi"
    },
    {
        q: " Agar ikkita parallel o‘tkazgichdan qarama-qarshi yo‘nalishda tok oqayotgan bo‘lsa, ularning o‘zaro \n" +
            "ta’siri qanday bo‘ladi?   ",
        a: " o‘tkazgichlar itarishadi"
    },
    {
        q: " Magnit maydon doimiysining kattaligi va birligi qaysi javobda togri keltirilgan?   ",
        a: " 4π·10–7 N/A2   "
    },
    {
        q: " \n" + "mm kg s\n" + "A\n" + "   qaysi kattalikning birligi?    ",
        a: " Induktivlik    "
    },
    {
        q: "Induktivlik formulasi qaysi qatorda to‘g‘ri ko‘rsatilgan? ",
        a: "s / l"
    },
    {
        q: "Kuchlanish birligi voltning o‘rniga yana qaysi birlikni ishlatsa bo'ladi? ",
        a: "Wb/s"
    },
    {
        q: "Agar ikkita parallel o‘tkazgichdan qarama-qarshi yo‘nalishda tok oqayotgan bo‘lsa ularning o‘zaro",
        a: "o‘tkazgichlar tortishadi  "
    },
    {
        q: "O‘zgarmas tok o‘tayotgan o‘tkazgich atrofida qanday maydon bo'ladi?   ",
        a: "magnit maydon"
    },
    {
        q: "Toʻgʻri chiziqli tokli oʻtkazgich magnit maydonining",
        a: "1"
    },
    {
        q: "Chizmada fazoning bir qismidagi magnit induksiya chiziqlari tasvirlangan.",
        a: "1"
    },
    {
        q: "Magnit maydonning tokli oʻtkazgichga ta’sir kuchini ifodalaydigan formulani koʻrsating. ",
        a: "F=BIlsinα"
    },
    {
        q: "Amper kuchi ifodasini toping.",
        a: "javob yoq"
    },
    {
        q: "Magnit oqimi qaysi formula bilan ifodalanadi",
        a: "Ф=BS cosα "
    },
    {
        q: "Induksion EYuK formulasini koʻrsating: ",
        a: "ℰind = ΔФ/Δt"
    },
    {
        q: "Quyidagi moddalardan qaysi biri paranetik boʻladi?",
        a: "volfram (μ= 1,000176)"
    },
    {
        q: "Magnit maydon oqimi ortadi, agar ... ",
        a: "magnit maydon induksiyasi va magnit maydon kesib oʻtuvchi yuza ortsa. "
    },
    {
        q: "Quydagi hollarning qaysi birida ramka yuzasidan o‘tuvchi magnit induksiya oqimi oʻzgarmaydi?  ",
        a: "bir jinsli magnit maydonda ilgarilanma harakat qilganida "
    },
    {
        q: "Solenoiddagi o‘ramlar soni 2,5 marta ortsa, undagi induksion EYK qanday o'zgaradi?",
        a: " 2,5 marta ortadi  "
    },
    {
        q: "Magnit maydoda induktivlik 9 marta ortib unda hosil bo‘lgan induksion EYuK 3 marta kamaysa \n" +
            "induksion tok qiymati qanday ozgargan bo‘ladi?  ",
        a: " 27 marta kamayadi   "
    },
    {
        q: "Galtak induktivligini ortirish uchun:  ",
        a: "1,2,4 "
    },
    {
        q: "Proton tezligi 4 marta kamayganda va magnit maydon induksiyasi 2 marta ortganda, magnit maydon tomonidan protonga ta’sir qiiuvchi Lorens kuchi qanday o‘zgaradi?",
        a: "2 marta ortadi "
    },
    {
        q: "Har xil moddalarda magnit maydon induksiyasi (В) vakummdagi magnit induksiyasi (B0) dan farq \n" +
            "qiladi.  B=μB0  .  Agar  μ1<1,  μ2>1  va  μ3»1 bo‘lsa, bu moddalar qanday moddalar deyiladi va bularga \n" +
            "quyidagilar misol boʻla oladi temir (μ=660) b) volfram (μ= l,000176) c) (μ=0,99999)? ",
        a: "diamagnit- mis, paramagnet - volfram, ferromagnit - temir  "
    },
    {
        q: "Magnit maydon oqimi ortadi, agar ... ",
        a: "2, 4"
    },
    {
        q: "15 A tok o‘tayotgan cheksiz uzun to‘g‘ri o‘tkazgichdan havoda 10 cm masofada joylashgan nuqtadagi magnit maydon induksiyasi topilsin. (𝜇0 =4𝜋∙10−7𝑁/𝐴2)",
        a: "30 μT "
    },
    {
        q: "Tokli to‘g‘ri o‘tkazgichdan kuzatilayotgan nuqtagacha bo‘lgan masofa 2 marta ortganda, magnit \n" +
            "maydon induksiyasi qanday o‘zgaradi?",
        a: "2 marta kamayadi"
    },
    {
        q: "Induksiyasi 0,01 T bo‘lgan bir jinsli magnit maydonga yuzi 1 cm2 bo'lgan to‘g‘ri to‘rtburchakli \n" +
            "ramka kiritildi. Agar ramka simlariaa 1 A tok oqsa, unga ta’sir qiluvchi kuchning maksimal momenti \n" +
            "qanday (μN∙m) bo‘ladi? ",
        a: "1"
    },
    {
        q: "Lorens kuchi harakatdagi zaryadli zarra tezligini qanday o‘zgartiradi?  ",
        a: "tezlik yo‘nalishini "
    },
    {
        q: " Magnit oqimning o‘zgarish tezligi 0,24 Wb/s bo‘lganda, g‘altakda 48 V elektr yurituvchi kuch \n" +
            "hosil bo‘lsa, g‘altakdagi o‘ramlar soni qanday? ",
        a: "200   "
    },
    {
        q: " Yuzi  10  cm2  bo‘lgan halqaga tik bo‘lgan magnit maydon induksiyasining o‘zgarish tezligi 5 T/s \n" +
            "bo‘lsa, halqada hosil bo‘layotgan induksiya EYiKi necha mV bo‘ladi?",
        a: "5   "
    },
    {
        q: "Rasmda g‘altakni kesib o'tayotgan magnit oqimning vaqtga bog‘lanish grafigi tasvirlangan. \n" +
            "Induksiya EYK ining vaqtga bog‘lanish grafigi qaysi rasmda  to‘g‘ri berilgan?",
        a: "4"
    },
    {
        q: "G‘altakdan 100 A tok o'tganda, unda 25 Wb magnit oqim vujudga kelsa, g‘altakning induktivligi \n" +
            "qanday (Н)? ",
        a: "0,25 "
    },
    {
        q: " Induktivligi  1,2∙10‒3  H  bo‘lgan  g‘altakda  magnit  oqim  6  Wb  bo‘lsa,  undan  necha  amper  tok \n" +
            "o‘tmoqda? ",
        a: "5∙103"
    },
    {
        q: "Induktivligi 0,012 H bo‘lgan g‘altakda 6 V o‘zinduksiya EYK hosil bo‘lsa, tok qanday (A/s) tezlik \n" +
            "bilan o‘zgarmoqda?",
        a: "5∙102"
    },
    {
        q: "Induktivligi 0,1 H bo‘lgan g‘altakdagi tok I = 2cos60t qonun bo‘yicha o‘zgaradi. G‘altakda hosil \n" +
            "bo‘ladigan o‘zinduksiya EYK ning maksimal qiymatini toping (V). ",
        a: "12"
    },
    {
        q: "G‘altakdan 4 A tok o'tganda, unda 2 mWb magnit oqim hosil bo‘ladi. G‘altak induktivligi qanday \n" +
            "(mH)? ",
        a: "0,5"
    },
    {
        q: "Induktivligi  1,2∙10‒3  H  bo‘lgan  g‘altakda  magnit  oqim  6  Wb  bo‘lsa,  undan  necha  amper  tok \n" +
            "o‘tmoqda?",
        a: "javob yoq"
    },
    {
        q: "Sim  ramka  bir  jinsli  magnit  maydonda  aylantirilganda,  ramkani  kesib  o‘tuvchi  magnit  oqim \n" +
            "Ф=0,1cos30t (Wb) qonuni bo‘yicha o‘zgaradi. Ramkada hosil bo‘ladigan induksiya EYKining \n" +
            "maksimal qiymati necha voltga teng bo‘ladi?",
        a: "3"
    },
    {
        q: "Konturda  hosil  bo‘luvchi  induksiya  EYK  50  V  bo‘lishi  uchun  konturni  kesib  o‘tuvchi  magnit \n" +
            "oqimning o‘zgarish tezligi qanday (Wb/s) bo‘lishi kerak? ",
        a: "50   "
    },
    {
        q: " Magnit maydon induksiyasi 0,50 T bo‘lgan o‘zaksiz g‘altakka magnit singdiruvchanligi  60 ga teng    \n" +
            "bo‘lgan ferromagnit kiritildi. G‘altak ichidamagnit ma don induksiyasi qanchaga o‘zgaradi? ",
        a: "29,5 "
    },
    {
        q: "G‘altakdagi tok 0,2 s davomida noldan 3 A gacha tekis o‘zgarganda 1,5 V o‘zinduksiya EYuK hosil \n" +
            " bo‘lsa, g‘altakning induktivligi qanchaga teng? ",
        a: "0,1 "
    },
    {
        q: "O‘tkazgich halqa orqali o‘tgan magnit oqimi 0,2 s davomida 5 mWb ga o‘zgargan. Halqa 0,25 Ω \n" +
            " elektr  qarshiligiga ega bo‘lsa, halqada qanday induksion tok yuzaga keladi? ",
        a: "0,1 "
    },
    {
        q: "Prоtоn induksiyasi 40 mT bo‘lgаn bir jinsli mаgnit mаydоngа kuch chiziqlаrigа tik hоldа 2 · 107 m/s \n" +
            "tеzlik bilаn uchib kirgаndа u qаndаy rаdiusli аylаnа chizаdi (mp=1,67·10–27 kg)? Ptoton zaryadi",
        a: "5,2 cm  "
    },
    {
        q: "Mаgnit mаydоngа jоylаshtirilgаn yuzаsi 0,05 m2 bo‘lgаn tоkli rаmkаdаn 2 А tоk o‘tmоqdа. Аgаr \n" +
            " rаmkаni аylаntiruvchi mаksimаl kuch mоmеnti 40 mN·m bo‘lsа, rаmkа jоylаshgаn mаydоnning induks\n" +
            "iyasi nimаgа tеng?",
        a: "0,4 T"
    },
    {
        q: "O‘tkazgich halqa orqali o‘tgan magnit oqimi 0,2 s davomida 5 mWb ga o‘zgargan. Halqa 0,25 Ω  \n" +
            "elektr qarshiligiga ega bo‘lsa, halqada qanday induksion tok yuzaga keladi (mA) ? ",
        a: "6,25"
    },
    {
        q: "Rаdiusi 2 cm bo‘lgаn g‘altakdan 3 А tоk оqmоqdа. G‘altak ichiga mаgnit singdiruvchаnligi  20 \n" +
            " bo‘lgаn fеrrоmаgnit o‘zаgi kiritilsа, g‘аltаk ichidаgi mаgnit mаydоn induksiyasi qаndаy bo‘lаdi (mT) \n" +
            "? G‘altakdagi o‘ramlar soni 1500 ga teng.",
        a: "141,2"
    },
    {
        q: "Orasidagi masofa 1,6 m bo‘lgan qo‘sh (ikki) simli o‘zgarmas elektr toki uzatish liniyasi simlarining \n" +
            " har bir metr uzunligiga to‘g‘ri keluvchi o‘zaro ta’sir kuchini (N) toping. O‘tkazgichlardan  o‘tayotgan \n" +
            " tok kuchining qiymatini 40 A ga teng deb oling. ",
        a: "2∙104 "
    },
    {
        q: " Uzunligi 30 cm bo‘lgan o‘tkazgichdan 2 A tok o‘tmoqda. O‘tkazgich induksiyasi 1,5 T bo‘lgan bir jinsli magnit maydonning induksiya chiziqlariga 30° burchak ostida joylashgan. O‘tkazgich Amper kuchi yo‘nalishida 4 cm ga ko‘chganda qanday ish (J) bajariladi? ",
        a: "javob yoq"
    },
    {
        q: "Bir jinsli magnit maydоnga tik uchib kirgan elеktrоnning aylanish davri 20·10-12 s bo‘lsa, magnit maydоn  induksiyasini aniqlang (T). ",
        a: "1,8"
    },


];

// if(input.value.trim() === data[1].q.trim()){
//     console.log(data[1].a);
// }

// for(let i = 0; i < data.length; i++) {
//    if(input.value.trim() === data[i].q.trim()) {
//        console.log(data[i])
//    }else {
//        console.log('false');
//    }
// }

// function search(data, question) {
//    for(let i = 0; i <= data.length - 1; i++) {
//        if(question.trim() === data[i].q.trim()) {
//            return data[i].a;
//            // console.log(data[i]); break;
//        }else {
//            return 'false';
//            // console.log('false');
//        }
//    }
// }

// res = search(data, input.value);
// console.log(res);

btn.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0; i <= data.length - 1; i++) {
       if(input.value.trim() === data[i].q.trim()) {
           console.log(data[i]);
           res = data[i]; break;
       }else {
           res = 'false';
       }
    }

    q.innerHTML = res.q;
    a.innerHTML = res.a;
});

btna.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0; i <= data.length - 1; i++) {
        if(input.value.trim() === data[i].a.trim()) {
            res = data[i]; break;
        }else {
            res = 'false';
        }
    }

    q.innerHTML = res.q + " " + "wu javob togri";
})

