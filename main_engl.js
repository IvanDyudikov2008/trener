let words = [
    ["быть", "be was were been","1class","letters1","be, was/were, been — быть"],
    ["рожать, переносить", "bear bore born","1class","letters1","bear, bore, born — рожать, переносить"],
    ["бить", "beat beat beaten","1class","letters1","beat, beat, beaten — бить"],
    ["становиться", "become became become","1class","letters1","become, became, become — становиться"],
    ["начинать", "begin began begun","1class","letters1","begin, began, begun — начинать"],
    ["кусать", "bite bit bitten","1class","letters1","bite, bit, bitten — кусать"],
    ["дуть", "blow blew blown","1class","letters1","blow, blew, blown — дуть"],
    ["ломать", "break broke broken","1class","letters1","break, broke, broken — ломать"],
    ["приносить", "bring brought brought","1class","letters1","bring, brought, brought — приносить"],
    ["строить", "build built built","1class","letters1","build, built, built — строить"],
    ["жечь, гореть", "burn burnt burnt","1class","letters1","burn, burnt, burnt — жечь, гореть"],
    ["взрываться", "burst burst burst","1class","letters1","burst, burst, burst — взрываться"],
    ["покупать", "buy bought bought","1class","letters1","buy, bought, bought — покупать"],
    ["мочь, уметь", "can could could","1class","letters2","can, could, been able to — мочь, уметь"],
    ["ловить", "catch caught caught","1class","letters2","catch, caught, caught — ловить"],
    ["выбирать", "choose chose chosen","1class","letters2","choose, chose, chosen — выбирать"],
    ["приходить", "come came come","1class","letters2","come, came, come — приходить"],
    ["стоить", "cost cost cost","1class","letters2","cost, cost, cost — стоить"],
    ["резать", "cut cut cut","1class","letters2","cut, cut, cut — резать"],
    ["иметь дело", "deal dealt dealt","1class","letters3","deal, dealt, dealt — иметь дело"],
    ["копать", "dig dug dug","1class","letters3","dig, dug, dug — копать"],
    ["делать", "do did done","1class","letters3","do, did, done — делать"],
    ["рисовать", "draw drew drawn","1class","letters3","draw, drew, drawn — рисовать"],
    ["мечтать, видеть сны", "dream dreamt dreamt","1class","letters3","dream, dreamt, dreamt — мечтать, видеть сны"],
    ["пить", "drink drank drunk","1class","letters3","drink, drank, drunk — пить"],
    ["водить автомобиль", "drive drove driven","1class","letters3","drive, drove, driven — водить автомобиль"],
    ["кушать", "eat ate eaten","1class","letters4","eat, ate, eaten — кушать"],
    ["падать", "fall fell fallen","1class","letters5","fall, fell, fallen — падать"],
    ["кормить", "feed fed fed","1class","letters5","feed, fed, fed — кормить"],
    ["чувствовать", "feel felt felt","1class","letters5","feel, felt, felt — чувствовать"],
    ["бороться", "fight fought fought","1class","letters5","fight, fought, fought — бороться"],
    ["находить", "find found found","1class","letters5","find, found, found — находить"],
    ["летать", "fly flew flown","1class","letters5","fly, flew, flown — летать"],
    ["запрещать", "forbid forbade forbidden","1class","letters5","forbid, forbade, forbidden — запрещать"],
    ["забывать", "forget forgot forgotten","1class","letters5","forget, forgot, forgotten — забывать"],
    ["прощать", "forgive forgave forgiven","1class","letters5","forgive, forgave, forgiven — прощать"],
    ["замерзать", "freeze froze frozen","1class","letters5","freeze, froze, frozen — замерзать"],
    ["получать", "get got got","1class","letters6","get, got, got — получать"],
    ["давать", "give gave given","1class","letters6","give, gave, given — давать"],
    ["идти", "go went gone","1class","letters6","go, went, gone — идти"],
    ["расти, выращивать", "grow grew grown","1class","letters6","grow, grew, grown — расти, выращивать"],
    ["вешать", "hang hung hung","1class","letters7","hang, hung, hung — вешать"],
    ["иметь", "have had had","1class","letters7","have, had, had — иметь"],
    ["слышать", "hear heard heard","1class","letters7","hear, heard, heard — слышать"],
    ["прятать", "hide hid hidden","1class","letters7","hide, hid, hidden — прятать"],
    ["ударять", "hit hit hit","1class","letters7","hit, hit, hit — ударять"],
    ["держать", "hold held held","1class","letters7","hold, held, held — держать"],
    ["причинять боль", "hurt hurt hurt","1class","letters7","hurt, hurt, hurt — причинять боль"],
    ["держать, хранить", "keep kept kept","1class","letters8","keep, kept, kept — держать, хранить"],
    ["знать", "know knew known","1class","letters8","know, knew, known — знать"],
    ["вести, руководить, вести", "lead led led","1class","letters9","lead, led, led — вести, руководить, вести"],
    ["учиться, узнавать", "learn learnt learnt","1class","letters9","learn, learnt, learnt — учиться, узнавать"],
    ["покидать, оставлять", "leave left left","1class","letters9","leave, left, left — покидать, оставлять"],
    ["давать взаймы", "lend lent lent","1class","letters9","lend, lent, lent — давать взаймы"],
    ["позволять", "let let let","1class","letters9","let, let, let — позволять"],
    ["зажигать, освещать", "light lit lit","1class","letters9","light, lit, lit — зажигать, освещать"],
    ["терять", "lose lost lost","1class","letters9","lose, lost, lost — терять"],
    ["делать, делать, создавать", "make made made","1class","letters10","make, made, made — делать, делать, создавать"],
    ["значить", "mean meant meant","1class","letters10","mean, meant, meant — значить"],
    ["встречать, знакомиться", "meet met met","1class","letters10","meet, met, met — встречать, знакомиться"],
    ["платить", "pay paid paid","1class","letters11","pay, paid, paid — платить"],
    ["класть, ставить", "put put put","1class","letters11","put, put, put — класть, ставить"],
    ["читать", "read read read","1class","letters12","read, read, read — читать"],
    ["ездить верхом", "ride rode ridden","1class","letters12","ride, rode, ridden — ездить верхом"],
    ["звонить", "ring rang rung","1class","letters12","ring, rang, rung — звонить"],
    ["подниматься, восходить", "rise rose risen","1class","letters12","rise, rose, risen — подниматься, восходить"],
    ["бежать", "run ran run","1class","letters12","run, ran, run — бежать"],
    ["сказать", "say said said","1class","letters13","say, said, said — сказать"],
    ["видеть", "see saw seen","1class","letters13","see, saw, seen — видеть"],
    ["продавать", "sell sold sold","1class","letters13","sell, sold, sold — продавать"],
    ["посылать", "send sent sent","1class","letters13","send, sent, sent — посылать"],
    ["устанавливать", "set set set","1class","letters13","set, set, set — устанавливать"],
    ["шить", "sew sewed sewn","1class","letters13","sew, sewed, sewn — шить"],
    ["трясти", "shake shook shaken","1class","letters13","shake, shook, shaken — трясти"],
    ["светить, сиять", "shine shone shone","1class","letters13","shine, shone, shone — светить, сиять"],
    ["стрелять", "shoot shot shot","1class","letters13","shoot, shot, shot — стрелять"],
    ["показывать", "show showed shown","1class","letters13","show, showed, shown — показывать"],
    ["закрывать", "shut shut shut","1class","letters13","shut, shut, shut — закрывать"],
    ["петь", "sing sang sung ","1class","letters13","sing, sang, sung — петь"],
    ["сидеть, садиться", "sit sat sat","1class","letters13","sit, sat, sat — сидеть, садиться"],
    ["спать", "sleep slept slept","1class","letters13","sleep, slept, slept — спать"],
    ["пахнуть, нюхать", "smell smelt smelt","1class","letters13","smell, smelt, smelt — пахнуть, нюхать"],
    ["говорить, разговаривать", "speak spoke spoken","1class","letters13","speak, spoke, spoken — говорить, разговаривать"],
    ["произносить или писать по буквам", "spell spelt spelt","1class","letters13","spell, spelt, spelt — произносить или писать по буквам"],
    ["тратить, расходовать, проводить (время)", "spend spent spent","1class","letters13","spend, spent, spent — тратить, расходовать, проводить (время)"],
    ["стоять", "stand stood stood","1class","letters13","stand, stood, stood — стоять"],
    ["воровать, красть", "steal stole stolen","1class","letters13","steal, stole, stolen — воровать, красть"],
    ["приклеивать", "stick stuck stuck","1class","letters13","stick, stuck, stuck — приклеивать"],
    ["жалить, ужалить", "sting stung stung","1class","letters13","sting, stung, stung — жалить, ужалить"],
    ["клясться", "swear swore sworn","1class","letters13","swear, swore, sworn — клясться"],
    ["мести, подметать", "sweep swept swept","1class","letters13","sweep, swept, swept — мести, подметать"],
    ["плавать", "swim swam swum","1class","letters13","swim, swam, swum — плавать"],
    ["брать, взять", "take took taken","1class","letters14","take, took, taken — брать, взять"],
    ["учить, обучать", "teach taught taught","1class","letters14","teach, taught, taught — учить, обучать"],
    ["рвать, разрывать", "tear tore torn","1class","letters14","tear, tore, torn — рвать, разрывать"],
    ["рассказывать", "tell told told","1class","letters14","tell, told, told — рассказывать"],
    ["думать", "think thought thought","1class","letters14","think, thought, thought — думать"],
    ["бросать, кидать", "throw threw thrown","1class","letters14","throw, threw, thrown — бросать, кидать"],
    ["понимать", "understand understood understood","1class","letters15","understand, understood, understood — понимать"],
    ["просыпаться, будить", "wake woke woken","1class","letters16","wake, woke, woken — просыпаться, будить"],
    ["носить (одежду)", "wear wore worn","1class","letters16","wear, wore, worn — носить (одежду)"],
    ["победить, выиграть", "win won won","1class","letters16","win, won, won — победить, выиграть"],
    ["писать", "write wrote written","1class","letters16","write, wrote, written — писать"],
];
let list_class = [
    ["all", "Все классы"],
    ["1class", "1 класс"],
];

let list_letters = [
    ["all", "Все буквы"],
    ["letters1", "b"],
    ["letters2", "c"],
    ["letters3", "d"],
    ["letters4", "e"],
    ["letters5", "f"],
    ["letters6", "g"],
    ["letters7", "h"],
    ["letters8", "k"],
    ["letters9", "l"],
    ["letters10", "m"],
    ["letters11", "p"],
    ["letters12", "r"],
    ["letters13", "s"],
    ["letters14", "t"],
    ["letters15", "u"],
    ["letters16", "w"],
];

let starttimer = document.getElementById("starttimer");

const filter_words = (word) => {
    if(engl_opt_class == "all") {
        if((engl_opt_letter[0] == "all") || (engl_opt_letter.includes(word[3]))){
            return word;
        }
    } else {
        if ((word[2] == engl_opt_class) && 
            ((engl_opt_letter[0] == "all") || (engl_opt_letter.includes(word[3])))) {
                return word;
        }
    }
};

function filterByLetter(word){
    // 0 - class
    // 1 - letter
    // console.log(word,this[0],this[1]);
    if(this[0] == "all") {
        if(this[1] == word[3]){
            return word;
        }
    } else {
        if ((word[2] == this[0]) && (this[1] == word[3])) {
                return word;
        }
    }
};
const filterByClass = (word) => {
    if((rus_lesson_class == "all") && (word[3] == rus_lesson_letter)){
        return word;
    } else {
        if ((word[2] == rus_lesson_class) && (word[3] == rus_lesson_letter)){
            return word;
        }  
    }
};
let select = document.getElementById("lesson_classes");
let cards = document.querySelectorAll(".cards-list .card")
cards.forEach( (el) => {
    el.classList.add('show');
}
);
let rus_lesson_class = "all";
let rus_lesson_letter;

if(select != null) {
    let cardsList = document.getElementById("cards-list");
    function showLesson(value) {
        if(cardsList == null) return false;
        cardsList.innerHTML = '';
        for(let c = 0;c < list_class.length;c++) {
            if((value == "all") || (value == list_class[c][0])){
                rus_lesson_class = list_class[c][0];
                for(j = 1;j < list_letters.length; j++){
                    rus_lesson_letter = list_letters[j][0];
                    let lessons = words.filter(filterByClass);

                    for(let x = 0; x < lessons.length; x++) {
                        isFirst = true
                        for(var y = 0; y < lessons.length; y++) {
                            if(lessons[x][4] === lessons[y][4]) {
                                if (!isFirst) {
                                    lessons.splice(y, 1);
                                }
                                isFirst = false;
                            }
                        }
                    }

                    let item_letter = document.createElement("li");
                    item_letter.classList.add("card");
                    item_letter.classList.add("show");
                    let header_letter = document.createElement("h2");
                    header_letter.innerHTML = list_letters[j][1].toUpperCase();
                    item_letter.append(header_letter);
        
                    for(i = 0; i< lessons.length;i++) {
                        let div = document.createElement("div");
                        div.innerHTML = div.innerHTML + lessons[i][4];
                        item_letter.append(div);
                    }
                    if(lessons.length != 0) {
                        cardsList.append(item_letter);
                    }
                }
                if(value == "all"){
                    break;}
            }
        }
    }
    select.addEventListener("change", (event) => {
        event.preventDefault();
        showLesson(event.target.value)
    });
    showLesson("all")
}



let data = words;
let id;
let query_quest = [];

let engl_opt_class;
let engl_opt_letter = [];
engl_opt_class = localStorage.getItem("engl_opt_class");
let engl_opt_letter_src = localStorage.getItem("engl_opt_letter");
if (engl_opt_letter_src != null) {
    engl_opt_letter = JSON.parse(engl_opt_letter_src);
}

if (engl_opt_class == null) { engl_opt_class = "all"; }
if (engl_opt_letter == null) { engl_opt_letter = ["all"]; }

if(starttimer != null) {
let engl_opt_timer_src = localStorage.getItem("engl_opt_timer");
if(engl_opt_timer_src == "Y")
    {starttimer.checked = true;}
else
    {starttimer.checked = false;}
}

let select_class = document.getElementById('classes');
if(select_class != null){
    for(let i=0;i<list_class.length;i++) {
        let opt = document.createElement("option");
        opt.innerHTML = list_class[i][1];
        opt.value = list_class[i][0];

        select_class.append(opt);
    }
    select_class.value = engl_opt_class;
}

let select_letters = document.getElementById('letters');
if(select_letters != null) {
    for(let i=0;i<list_letters.length;i++){
        let l = words.filter(filterByLetter, [engl_opt_class, list_letters[i][0]]);
        // console.log(l,[engl_opt_class, list_letters[i][0]]);
        if(i==0 || l.length>0) {
            let opt = document.createElement("option");
            opt.innerHTML = list_letters[i][1];
            opt.value = list_letters[i][0];
            for(let j=0;j<engl_opt_letter.length;j++){
                if(list_letters[i][0] == engl_opt_letter[j]){
                    opt.selected = true;
                    break;
                }
            }
            select_letters.append(opt);
        }
    }
    // select_letters.value = engl_opt_letter;
}


let engl_result = [];
let engl_result_src = localStorage.getItem("engl_result");
if (engl_result_src != null) {
    engl_result = JSON.parse(engl_result_src);
}
//console.log('engl_result',engl_result);


let headers2 = [
    "Дата тестирования",
    "Правильных ответов",
    "Все вопросов",
    "Вопросы класса",
    "Вопросы на букву",
    "Время тестирования"
];
function show_result() {
    let table = document.createElement("table");
    table.classList.add("result-table");
    table.setAttribute("id", "tbl");
    table.setAttribute("cellpadding", "0");
    table.setAttribute("cellspacing", "0");
    
    let tr = document.createElement("tr");
    for (let i = 0; i < headers2.length; i++) {
        let td = document.createElement("th");
        td.classList.add("result-table_cell");
        td.innerHTML = headers2[i];
        tr.append(td);
    }
    table.append(tr);

    for (let i = engl_result.length-1; i >=0 ; i--) {
        let tr = document.createElement("tr");
        tr.classList.add("result-table_cell");

        for (let j = 0; j < engl_result[i].length; j++) {
            let td = document.createElement("td");
            td.classList.add("result-table_cell");
            if(j == 3) {
                td.innerHTML = list_class.filter((classi) => classi[0] == engl_result[i][j])[0][1];
            } else {  
                if(j == 4) {
                    td.innerHTML = '';
                    console.log('list_letters',list_letters);
                    for(let l = 0;l< engl_result[i][j].length;l++){
                        td.innerHTML = td.innerHTML + list_letters.filter((letter) => letter[0] == engl_result[i][j][l])[0][1];
                        // td.innerHTML = td.innerHTML + engl_result[i][j];
                        if(l < engl_result[i][j].length-1) td.innerHTML =td.innerHTML + ", ";
                    }
                } else               
                    td.innerHTML = engl_result[i][j]; 
            }   
            tr.append(td);
        }
        table.append(tr);
    }
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan","5");
    if(engl_result.length != 0) {
        let bnt_reset = document.createElement("button");
        bnt_reset.innerHTML = "Сброс результатов";
        bnt_reset.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("engl_result", JSON.stringify([]));
            engl_result = [];
            let resultTable = document.getElementById("result-table");
            resultTable.innerHTML ='';
            resultTable.append(show_result());
        });
        td.append(bnt_reset);

    }else {
        td.innerHTML = "Результатов еще нет";
    }
    tr.append(td);
    table.append(tr);

    return table;
}

//таймер
let stopwatch = document.getElementById("stopwatch");
if(stopwatch != null){

    //объявляем переменные
    var base = 60;
    var clocktimer, dateObj, dm, ds, ms;
    var readout = '';
    var m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;

    //функция для очистки поля
    function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    init = 0;
    readout = '00:00';
    
    stopwatch.value = readout;
    }

    //функция для старта секундомера



    function StartTIME() {
        var cdateObj = new Date();
        var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
        if (t > 999) {
            s++;
        }
        if (s >= (m * base)) {
            ts = 0;
            m++;

        } else {
            ts = parseInt((ms / 100) + s);
            if (ts >= base) {
            ts = ts - ((m - 1) * base);
            }
        }
        if (m > (h * base)) {

            

        // остановка теста
        form.style.display = "none";
        StartStop();
        
        resultTable.innerHTML ='';
        let engl_result_cur = [];
        resultTable.append(show(headers, answers, engl_result_cur));
        engl_result.push(engl_result_cur);
        resultTable.append(show_result());
        console.log("engl_result_cur",engl_result_cur);
        console.log("engl_result",engl_result);
        localStorage.setItem('engl_result', JSON.stringify(engl_result));
        
        state = "result";
        render_forms();





        } else {
            tm = parseInt((ms / 100) + m);
            if (tm >= base) {
            tm = tm - ((h - 1) * base);
            }
        }

        if (ts > 0) {
            ds = ts;
            if (ts < 10) {
            ds = '0' + ts;
            }
        } else {
            ds = '00';
        }
        dm = tm - 1;
        if (dm > 0) {
            if (dm < 10) {
            dm = '0' + dm;
            }
        } else {
            dm = '00';
        }

        readout = dm + ':' + ds;
        stopwatch.value = readout;
        clocktimer = setTimeout("StartTIME()", 1);
    }

    //Функция запуска и остановки
    function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else {
        clearTimeout(clocktimer);
        init = 0;
    }
    }
}
