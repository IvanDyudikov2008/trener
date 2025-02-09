let words = [
    ["1*1", "1","1class","letters1","1*1=1"],
    ["1*2", "2","1class","letters1","1*2=2"],
    ["1*3", "3","1class","letters1","1*3=3"],
    ["1*4", "4","1class","letters1","1*4=4"],
    ["1*5", "5","1class","letters1","1*5=5"],
    ["1*6", "6","1class","letters1","1*6=6"],
    ["1*7", "7","1class","letters1","1*7=7"],
    ["1*8", "8","1class","letters1","1*8=8"],
    ["1*9", "9","1class","letters1","1*9=9"],
    ["1*10", "10","1class","letters1","1*10=10"],
    ["2*1", "2","1class","letters2","2*1=2"],
    ["2*2", "4","1class","letters2","2*2=4"],
    ["2*3", "6","1class","letters2","2*3=6"],
    ["2*4", "8","1class","letters2","2*4=8"],
    ["2*5", "10","1class","letters2","2*5=10"],
    ["2*6", "12","1class","letters2","2*6=12"],
    ["2*7", "14","1class","letters2","2*7=14"],
    ["2*8", "16","1class","letters2","2*8=16"],
    ["2*9", "18","1class","letters2","2*9=18"],
    ["2*10", "20","1class","letters2","2*10=20"],
    ["3*1", "3","1class","letters3","3*1=3"],
    ["3*2", "6","1class","letters3","3*2=6"],
    ["3*3", "9","1class","letters3","3*3=9"],
    ["3*4", "12","1class","letters3","3*4=12"],
    ["3*5", "15","1class","letters3","3*5=15"],
    ["3*6", "18","1class","letters3","3*6=18"],
    ["3*7", "21","1class","letters3","3*7=21"],
    ["3*8", "24","1class","letters3","3*8=24"],
    ["3*9", "27","1class","letters3","3*9=27"],
    ["3*10", "30","1class","letters3","3*10=30"],
    ["4*1", "4","1class","letters4","4*1=4"],
    ["4*2", "8","1class","letters4","4*2=8"],
    ["4*3", "12","1class","letters4","4*3=12"],
    ["4*4", "16","1class","letters4","4*4=16"],
    ["4*5", "20","1class","letters4","4*5=20"],
    ["4*6", "24","1class","letters4","4*6=24"],
    ["4*7", "28","1class","letters4","4*7=28"],
    ["4*8", "32","1class","letters4","4*8=32"],
    ["4*9", "36","1class","letters4","4*9=36"],
    ["4*10", "40","1class","letters4","4*10=40"],
    ["5*1", "5","1class","letters5","5*1=5"],
    ["5*2", "10","1class","letters5","5*2=10"],
    ["5*3", "15","1class","letters5","5*3=15"],
    ["5*4", "20","1class","letters5","5*4=20"],
    ["5*5", "25","1class","letters5","5*5=25"],
    ["5*6", "30","1class","letters5","5*6=30"],
    ["5*7", "35","1class","letters5","5*7=35"],
    ["5*8", "40","1class","letters5","5*8=40"],
    ["5*9", "45","1class","letters5","5*9=45"],
    ["5*10", "50","1class","letters5","5*10=50"],
    ["6*1", "6","1class","letters6","6*1=6"],
    ["6*2", "12","1class","letters6","6*2=12"],
    ["6*3", "18","1class","letters6","6*3=18"],
    ["6*4", "24","1class","letters6","6*4=24"],
    ["6*5", "30","1class","letters6","6*5=30"],
    ["6*6", "36","1class","letters6","6*6=36"],
    ["6*7", "42","1class","letters6","6*7=42"],
    ["6*8", "48","1class","letters6","6*8=48"],
    ["6*9", "54","1class","letters6","6*9=54"],
    ["6*10", "60","1class","letters6","6*10=60"],
    ["7*1", "7","1class","letters7","7*1=7"],
    ["7*2", "14","1class","letters7","7*2=14"],
    ["7*3", "21","1class","letters7","7*3=21"],
    ["7*4", "28","1class","letters7","7*4=28"],
    ["7*5", "35","1class","letters7","7*5=35"],
    ["7*6", "42","1class","letters7","7*6=42"],
    ["7*7", "49","1class","letters7","7*7=49"],
    ["7*8", "56","1class","letters7","7*8=56"],
    ["7*9", "63","1class","letters7","7*9=63"],
    ["7*10", "70","1class","letters7","7*10=70"],
    ["8*1", "8","1class","letters8","8*1=8"],
    ["8*2", "16","1class","letters8","8*2=16"],
    ["8*3", "24","1class","letters8","8*3=24"],
    ["8*4", "32","1class","letters8","8*4=32"],
    ["8*5", "40","1class","letters8","8*5=40"],
    ["8*6", "48","1class","letters8","8*6=48"],
    ["8*7", "56","1class","letters8","8*7=56"],
    ["8*8", "64","1class","letters8","8*8=64"],
    ["8*9", "72","1class","letters8","8*9=72"],
    ["8*10", "80","1class","letters8","8*10=80"],
    ["9*1", "9","1class","letters9","9*1=9"],
    ["9*2", "18","1class","letters9","9*2=18"],
    ["9*3", "27","1class","letters9","9*3=27"],
    ["9*4", "36","1class","letters9","9*4=36"],
    ["9*5", "45","1class","letters9","9*5=45"],
    ["9*6", "54","1class","letters9","9*6=54"],
    ["9*7", "64","1class","letters9","9*7=64"],
    ["9*8", "72","1class","letters9","9*8=72"],
    ["9*9", "81","1class","letters9","9*9=81"],
    ["9*10", "90","1class","letters9","9*10=90"],
    ["1*10", "10","1class","letters10","1*10=10"],
    ["10*2", "20","1class","letters10","10*2=20"],
    ["10*3", "30","1class","letters10","10*3=30"],
    ["10*4", "40","1class","letters10","10*4=40"],
    ["10*5", "50","1class","letters10","10*5=50"],
    ["10*6", "60","1class","letters10","10*6=60"],
    ["10*7", "70","1class","letters10","10*7=70"],
    ["10*8", "80","1class","letters10","10*8=80"],
    ["10*9", "90","1class","letters10","10*9=90"],
    ["10*10", "100","1class","letters10","10*10=100"],


];
let list_class = [
    ["all", "Все классы"],
    ["1class", "1 класс"],
];

let list_letters = [
    ["all", "Все множители"],
    ["letters1", "1*"],
    ["letters2", "2*"],
    ["letters3", "3*"],
    ["letters4", "4*"],
    ["letters5", "5*"],
    ["letters6", "6*"],
    ["letters7", "7*"],
    ["letters8", "8*"],
    ["letters9", "9*"],
    ["letters10", "10*"],
];

let starttimer = document.getElementById("starttimer");

const filter_words = (word) => {
    if(math_opt_class == "all") {
        if((math_opt_letter[0] == "all") || (math_opt_letter.includes(word[3]))){
            return word;
        }
    } else {
        if ((word[2] == math_opt_class) && 
            ((math_opt_letter[0] == "all") || (math_opt_letter.includes(word[3])))) {
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

let math_opt_class;
let math_opt_letter = [];
math_opt_class = localStorage.getItem("math_opt_class");
let math_opt_letter_src = localStorage.getItem("math_opt_letter");
if (math_opt_letter_src != null) {
    math_opt_letter = JSON.parse(math_opt_letter_src);
}

if (math_opt_class == null) { math_opt_class = "all"; }
if (math_opt_letter == null) { math_opt_letter = ["all"]; }

if(starttimer != null) {
let math_opt_timer_src = localStorage.getItem("math_opt_timer");
if(math_opt_timer_src == "Y")
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
    select_class.value = math_opt_class;
}

let select_letters = document.getElementById('letters');
if(select_letters != null) {
    for(let i=0;i<list_letters.length;i++){
        let l = words.filter(filterByLetter, [math_opt_class, list_letters[i][0]]);
        // console.log(l,[math_opt_class, list_letters[i][0]]);
        if(i==0 || l.length>0) {
            let opt = document.createElement("option");
            opt.innerHTML = list_letters[i][1];
            opt.value = list_letters[i][0];
            for(let j=0;j<math_opt_letter.length;j++){
                if(list_letters[i][0] == math_opt_letter[j]){
                    opt.selected = true;
                    break;
                }
            }
            select_letters.append(opt);
        }
    }
    // select_letters.value = math_opt_letter;
}


let math_result = [];
let math_result_src = localStorage.getItem("math_result");
if (math_result_src != null) {
    math_result = JSON.parse(math_result_src);
}
//console.log('math_result',math_result);


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

    for (let i = math_result.length-1; i >=0 ; i--) {
        let tr = document.createElement("tr");
        tr.classList.add("result-table_cell");

        for (let j = 0; j < math_result[i].length; j++) {
            let td = document.createElement("td");
            td.classList.add("result-table_cell");
            if(j == 3) {
                td.innerHTML = list_class.filter((classi) => classi[0] == math_result[i][j])[0][1];
            } else {  
                if(j == 4) {
                    td.innerHTML = '';
                    console.log('list_letters',list_letters);
                    for(let l = 0;l< math_result[i][j].length;l++){
                        td.innerHTML = td.innerHTML + list_letters.filter((letter) => letter[0] == math_result[i][j][l])[0][1];
                        // td.innerHTML = td.innerHTML + math_result[i][j];
                        if(l < math_result[i][j].length-1) td.innerHTML =td.innerHTML + ", ";
                    }
                } else               
                    td.innerHTML = math_result[i][j]; 
            }   
            tr.append(td);
        }
        table.append(tr);
    }
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan","5");
    if(math_result.length != 0) {
        let bnt_reset = document.createElement("button");
        bnt_reset.innerHTML = "Сброс результатов";
        bnt_reset.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("math_result", JSON.stringify([]));
            math_result = [];
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
        let math_result_cur = [];
        resultTable.append(show(headers, answers, math_result_cur));
        math_result.push(math_result_cur);
        resultTable.append(show_result());
        console.log("math_result_cur",math_result_cur);
        console.log("math_result",math_result);
        localStorage.setItem('math_result', JSON.stringify(math_result));
        
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

