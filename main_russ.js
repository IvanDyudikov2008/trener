localStorage.setItem("russ_opt_class", JSON.stringify(""));
localStorage.setItem("russ_opt_letter",JSON.stringify(["all"]));
localStorage.setItem("russ_opt_timer", JSON.stringify("N"));
localStorage.setItem("russ_result", JSON.stringify([]));

let words = [
    ["вес…л…", "ео","1class","letters3","весело"],
    ["в…р…бей", "оо","1class","letters3","воробей"],
    ["в…рона", "о","1class","letters3","ворона"],
    ["дев…чка", "о","1class","letters5","дежурный"],
    ["д…журный", "е","1class","letters5","девочка"],
    ["д…ревня", "е","1class","letters5","деревня"],
    ["за…ц", "я","1class","letters9","заяц"],
    ["к…р…нда…", "ааа","1class","letters12","карандаш"],
    ["клас…", "сс","1class","letters12","класс"],
    ["к…рова", "о","1class","letters12","корова"],
    ["л…сица", "е","1class","letters13","лисица"],
    ["мальч…к", "и","1class","letters14","мальчик"],
    ["м…ш…на", "аи","1class","letters14","машина"],
    ["м…две…ь", "ед","1class","letters14","медведь"],
    ["м…к…ко", "оо","1class","letters14","молок"],
    ["п…льто", "п","1class","letters17","пальто"],
    ["п…нал", "е","1class","letters17","пенал"],
    ["п…тух", "е","1class","letters17","петух"],
    ["р…бота", "а","1class","letters18","работа"],
    ["р…бята", "е","1class","letters18","ребята"],
    ["ру……кий", "сс","1class","letters18","русский"],
    ["с…бака", "о","1class","letters19","собака"],
    ["с…р…ка", "оо","1class","letters19","сорока"],
    ["т…тра…ь", "ед","1class","letters20","тетрадь"],
    ["уч…ник", "е","1class","letters21","ученик"],
    ["уч…ница", "е","1class","letters21","ученица"],
    ["уч…тель", "и","1class","letters21","учитель"],
    ["учит…льница", "е","1class","letters21","учительница"],
    ["х…р…шо", "оо","1class","letters23","хорошо"],
    ["…зык", "я","1class","letters30","язык"],

    ["…лф…вит", "аа","2class","letters1","алфавит"],
    ["…прел…", "аь","2class","letters1","апрель"],
    ["б…рёза", "е","2class","letters2","берёза"],
    ["быстр…", "о","2class","letters2","быстро"],
    ["вдру…", "г","2class","letters3","вдруг"],
    ["вес…л…", "ео","2class","letters3","весело"],
    ["вет…р", "е","2class","letters3","ветер"],
    ["в…р…бей", "оо","2class","letters3","воробей"],
    ["гор…д", "о","2class","letters4","город"],
    ["дев…чка", "о","2class","letters5","девочка"],
    ["д…журный", "е","2class","letters5","дежурный"],
    ["д…кабр…", "еь","2class","letters5","декабрь"],
    ["дер…вня", "е","2class","letters5","деревня"],
    ["д…рога", "о","2class","letters5","дорога"],
    ["д… св…дан…я", "оии","2class","letters5","до свидания"],
    ["ж…лтый", "ё","2class","letters8","жёлтый"],
    ["з…вод", "а","2class","letters9","завод"],
    ["за…ц", "я","2class","letters9","заяц"],
    ["здра…ствуй", "в","2class","letters9","здравствуй"],
    ["здра…ствуйте", "в","2class","letters9","здравствуйте"],
    ["з…мл…ника", "ея","2class","letters9","земляника"],
    ["…зв…ните", "ии","2class","letters10","извините"],
    ["ин…й", "е","2class","letters10","иней"],
    ["к…пуста", "а","2class","letters12","капуста"],
    ["к…ртина", "а","2class","letters12","карандаш"],
    ["к…р…ндаш", "аа","2class","letters12","картина"],
    ["клас…", "с","2class","letters12","класс"],
    ["к…ньки", "о","2class","letters12","коньки"],
    ["к…рова", "о","2class","letters12","корова"],
    ["лис…ца", "и","2class","letters13","лисица"],
    ["л…пата", "о","2class","letters13","лопата"],
    ["л…гушка", "я","2class","letters13","лягушка"],
    ["м…газин", "а","2class","letters14","магазин"],
    ["м…лина", "а","2class","letters14","малина"],
    ["м…ш…на", "аи","2class","letters14","машина"],
    ["меб…ль", "е","2class","letters14","мебель"],
    ["м…дведь", "е","2class","letters14","медведь"],
    ["мес…ц", "я","2class","letters14","месяц"],
    ["м…тель", "е","2class","letters14","метель"],
    ["м…тро", "е","2class","letters14","метро"],
    ["м…л…ко", "оо","2class","letters14","молоко"],
    ["м…л…ток", "оо","2class","letters14","молоток"],
    ["м…рков…", "оь","2class","letters14","морковь"],
    ["м…роз", "о","2class","letters14","мороз"],
    ["М…сква", "о","2class","letters14","Москва"],
    ["н…род", "а","2class","letters15","народ"],
    ["н…ябрь", "о","2class","letters15","ноябрь"],
    ["…бед", "о","2class","letters16","обед"],
    ["…безьяна", "о","2class","letters16","обезьяна"],
    ["обл…ко", "а","2class","letters16","облако"],
    ["…дежда", "о","2class","letters16","одежда"],
    ["…ктябрь", "о","2class","letters16","октябрь"],
    ["…сина", "о","2class","letters16","осина"],
    ["…тец", "о","2class","letters16","отец"],
    ["п…льто", "а","2class","letters17","пальто"],
    ["п…нал", "е","2class","letters17","пенал"],
    ["пл…ток", "а","2class","letters17","платок"],
    ["п…суда", "о","2class","letters17","посуда"],
    ["пр…щай", "о","2class","letters17","прощай"],
    ["р…бота", "а","2class","letters18","работа"],
    ["р…бочий", "а","2class","letters18","рабочий"],
    ["р…бята", "е","2class","letters18","ребята"],
    ["р…сунок", "и","2class","letters18","рисунок"],
    ["род…на", "и","2class","letters18","родина"],
    ["Р…с…ия", "ос","2class","letters18","Россия"],
    ["рус…кий", "с","2class","letters18","русский"],
    ["с…п…ги", "ао","2class","letters19","сапоги"],
    ["сах…р", "а","2class","letters19","сахар"],
    ["с…нтябрь", "е","2class","letters19","сентябрь"],
    ["скор…", "о","2class","letters19","скоро"],
    ["сн…гирь", "е","2class","letters19","снегирь"],
    ["с…рока", "о","2class","letters19","сорока"],
    ["сп…сибо", "а","2class","letters19","спасибо"],
    ["ст…кан", "а","2class","letters19","стакан"],
    ["суб…ота", "б","2class","letters19","суббота"],
    ["т…релка", "а","2class","letters20","тарелка"],
    ["т…трад", "е","2class","letters20","тетрадь"],
    ["т…варищ", "о","2class","letters20","товарищ"],
    ["т…пор", "о","2class","letters20","топор"],
    ["ул…ца", "и","2class","letters21","улица"],
    ["ур…жай", "о","2class","letters21","урожай"],
    ["уч…ник", "е","2class","letters21","ученик"],
    ["уч…ница", "е","2class","letters21","ученица"],
    ["учит…ль", "е","2class","letters21","учитель"],
    ["учит…льница", "е","2class","letters21","учительница"],
    ["ф…мил…я", "аи","2class","letters22","фамилия"],
    ["ф…враль", "е","2class","letters22","февраль"],
    ["х…р…шо", "оо","2class","letters23","хорошо"],
    ["ш…л", "ё","2class","letters26","шёл"],
    ["щ…вель", "а","2class","letters27","щавель"],
    ["ябл…к…", "оо","2class","letters30","яблоко"],
    ["ябл…ня", "о","2class","letters30","яблоня"],
    ["…г…да", "яо","2class","letters30","ягода"],
    ["…зык", "я","2class","letters30","язык"],
    ["…нварь", "я","2class","letters30","январь"],



    ["…к…уратн…", "ак","3class","letters1","аккуратно"],
    ["…лф…вит", "аа","3class","letters1","алфавит"],
    ["…льбом", "а","3class","letters1","альбом"],
    ["…прель", "а","3class","letters1","апрель"],
    ["бер…г", "е","3class","letters2","берег"],
    ["б…рёза", "е","3class","letters2","берёза"],
    ["быстр…", "о","3class","letters2","быстро"],
    ["вдру…", "г","3class","letters3","вдруг"],
    ["вес…л…", "ео","3class","letters3","весело"],
    ["вет…р", "е","3class","letters3","ветер"],
    ["вмест…", "е","3class","letters3","вместе"],
    ["в…кру…", "ог","3class","letters3","вокруг"],
    ["в…р…бей", "оо","3class","letters3","воробей"],
    ["в…р…на", "оо","3class","letters3","ворона"],
    ["вос…мь", "е","3class","letters3","восемь"],
    ["в…скр…сен…е", "оеь","3class","letters3","воскресенье"],
    ["в…сток", "о","3class","letters3","восток"],
    ["вторн…к", "и","3class","letters3","вторник"],
    ["гв…здика", "о","3class","letters4","гвоздика"],
    ["г…рой", "е","3class","letters4","герой"],
    ["г…р…д", "оо","3class","letters4","город"],
    ["г…рох", "о","3class","letters4","горох"],
    ["дев…чка", "о","3class","letters5","девочка"],
    ["д…журный", "е","3class","letters5","дежурный"],
    ["д…кабрь", "е","3class","letters5","декабрь"],
    ["д…ре…ня", "ев","3class","letters5","деревня"],
    ["д…рога", "о","3class","letters5","дорога"],
    ["д… св…дан…я", "оии","3class","letters5","до свидания"],
    ["ж…лать", "е","3class","letters8","желать"],
    ["ж…лтый", "ё","3class","letters8","жёлтый"],
    ["ж…вотн…е", "ио","3class","letters8","животное"],
    ["з…вод", "а","3class","letters9","завод"],
    ["за…тр…к", "ва","3class","letters9","завтрак"],
    ["з…ря", "а","3class","letters9","заря"],
    ["з…яц", "а","3class","letters9","заяц"],
    ["…дра…ствуй", "зв","3class","letters9","здравствуй"],
    ["…дра…ствуйте", "зв","3class","letters9","здравствуйте"],
    ["з…мл…ника", "ея","3class","letters9","земляника"],
    ["…зв…нить", "ии","3class","letters10","извините"],
    ["ин…й", "е","3class","letters10","иней"],
    ["…нт…ресный", "ие","3class","letters10","интересный"],
    ["к…пуста", "а","3class","letters12","капуста"],
    ["к…р…ндаш", "аа","3class","letters12","карандаш"],
    ["к…ртина", "а","3class","letters12","картина"],
    ["к…ртоф…ль", "ае","3class","letters12","картофель"],
    ["кв…ртира", "а","3class","letters12","квартира"],
    ["к…л…грам…", "иом","3class","letters12","килограмм"],
    ["клас…", "с","3class","letters12","класс"],
    ["к…л……ктив", "оле","3class","letters12","коллектив"],
    ["к…л…екция", "ол","3class","letters12","коллекция"],
    ["комн…та", "а","3class","letters12","комната"],
    ["к…мп…ют…р", "оье","3class","letters12","компьютер"],
    ["к…ньки", "о","3class","letters12","коньки"],
    ["к…рова", "о","3class","letters21","корова"],
    ["…расная …лощ…дь", "Кпо","3class","letters12","Красная площадь"],
    ["…ремль", "К","3class","letters12","Кремль"],
    ["кр…вать", "о","3class","letters12","кровать"],
    ["лаг…рь", "е","3class","letters13","лагерь"],
    ["лес…ница", "т","3class","letters13","лестница"],
    ["л…сица", "и","3class","letters13","лисица"],
    ["л…пата", "о","3class","letters13","лопата"],
    ["л…гушка", "я","3class","letters13","лягушка"],
    ["м…г…зин", "аа","3class","letters14","магазин"],
    ["м…лина", "а","3class","letters14","малина"],
    ["м…ш…на", "аи","3class","letters14","машина"],
    ["меб…ль", "е","3class","letters14","мебель"],
    ["м…дведь", "е","3class","letters14","медведь"],
    ["мес…ц", "я","3class","letters14","месяц"],
    ["м…тель", "е","3class","letters14","метель"],
    ["м…тр…", "ео","3class","letters14","метро"],
    ["м…л…ко", "оо","3class","letters14","молоко"],
    ["м…л…ток", "оо","3class","letters14","молоток"],
    ["м…рковь", "о","3class","letters14","морковь"],
    ["м…роз", "о","3class","letters14","мороз"],
    ["……сква", "Мо","3class","letters14","Москва"],
    ["н…род", "а","3class","letters15","народ"],
    ["н…ябрь", "о","3class","letters15","ноябрь"],
    ["…бед", "о","3class","letters16","обед"],
    ["…б…з…яна", "оеь","3class","letters16","обезьяна"],
    ["обл…ко", "а","3class","letters16","облако"],
    ["…вёс", "о","3class","letters16","овёс"],
    ["ов…щ", "о","3class","letters16","овощи"],
    ["…г…род", "оо","3class","letters16","огород"],
    ["…гурец", "о","3class","letters16","огурец"],
    ["…де…да", "ож","3class","letters16","одежда"],
    ["…дна…ды", "ож","3class","letters16","однажды"],
    ["…дуванчик", "о","3class","letters16","одуванчик"],
    ["ок…л…", "оо","3class","letters16","около"],
    ["…ктя…рь", "об","3class","letters16","октябрь"],
    ["…рех", "о","3class","letters16","орех"],
    ["…сина", "о","3class","letters16","осина"],
    ["п…льто", "а","3class","letters17","пальто"],
    ["п…нал", "е","3class","letters17","пенал"],
    ["п…сок", "е","3class","letters17","песок"],
    ["п…трушка", "е","3class","letters17","петрушка"],
    ["п…ро…", "иг","3class","letters17","пирог"],
    ["пл…ток", "а","3class","letters17","платок"],
    ["п…года", "о","3class","letters17","погода"],
    ["п…м…дор", "ои","3class","letters17","помидор"],
    ["п…н…дельник", "ое","3class","letters17","понедельник"],
    ["п…роша", "о","3class","letters17","пороша"],
    ["п…суда", "о","3class","letters17","посуда"],
    ["п…том", "о","3class","letters17","потом"],
    ["п…эт", "о","3class","letters17","поэт"],
    ["праз…ник", "д","3class","letters17","праздник"],
    ["пр…ветл…во", "ии","3class","letters17","приветливо"],
    ["пш…ница", "е","3class","letters17","пшеница"],
    ["пятн…ца", "и","3class","letters17","пятница"],
    ["пр…щ…й", "оа","3class","letters17","прощай"],
    ["р…бота", "а","3class","letters18","работа"],
    ["р…бочий", "а","3class","letters18","рабочий"],
    ["р…кета", "а","3class","letters18","ракета"],
    ["р…стен…е", "аи","3class","letters18","растение"],
    ["р…бята", "е","3class","letters18","ребята"],
    ["р…сун…к", "ио","3class","letters18","рисунок"],
    ["род…на", "и","3class","letters18","родина"],
    ["р…ма…ка", "ош","3class","letters18","ромашка"],
    ["……с…ия", "Рос","3class","letters18","Россия"],
    ["рус…кий", "с","3class","letters18","русский"],
    ["р…бина", "я","3class","letters18","рябина"],
    ["с…м…лёт", "ао","3class","letters19","самолёт"],
    ["с…п…ги", "ао","3class","letters19","сапоги"],
    ["сах…р", "а","3class","letters19","сахар"],
    ["сев…р", "е","3class","letters19","север"],
    ["с…нтябр", "е","3class","letters19","сентябрь"],
    ["с…рень", "и","3class","letters19","сирень"],
    ["скор…", "о","3class","letters19","скоро"],
    ["сн…гирь", "е","3class","letters19","снегирь"],
    ["с…бака", "о","3class","letters19","собака"],
    ["с…лдат", "о","3class","letters19","солдат"],
    ["с…лома", "о","3class","letters19","солома"],
    ["с…рока", "о","3class","letters19","сорока"],
    ["сп…сиб…", "ао","3class","letters19","спасибо"],
    ["ср…да", "е","3class","letters19","среда"],
    ["ст…кан", "а","3class","letters19","стакан"],
    ["ст…лица", "о","3class","letters19","столица"],
    ["суб…ота", "о","3class","letters19","суббота"],
    ["т…релка", "а","3class","letters20","тарелка"],
    ["т…традь", "е","3class","letters20","тетрадь"],
    ["т…варищ", "о","3class","letters20","товарищ"],
    ["т…пор", "о","3class","letters20","топор"],
    ["тракт…р", "о","3class","letters20","трактор"],
    ["тр…мвай", "а","3class","letters20","трамвай"],
    ["уж…н", "е","3class","letters21","ужин"],
    ["ул…ца", "и","3class","letters21","улица"],
    ["ур…жай", "о","3class","letters21","урожай"],
    ["уч…ник", "е","3class","letters21","ученик"],
    ["уч…ница", "е","3class","letters21","ученица"],
    ["учит…л…", "еь","3class","letters21","учитель"],
    ["учит…л…ница", "еь","3class","letters21","учительница"],
    ["ф…мил…я", "аи","3class","letters22","фамилия"],
    ["ф…врал…", "еь","3class","letters22","февраль"],
    ["х…р…шо", "оо","3class","letters23","хорошо"],
    ["ч…тверг", "е","3class","letters25","четверг"],
    ["ч…тыре", "е","3class","letters25","четыре"],
    ["ч…рный", "ё","3class","letters25","чёрный"],
    ["чу…ство", "в","3class","letters25","чувство"],
    ["ш…л", "ё","3class","letters26","шёл"],
    ["ш…с…е", "ос","3class","letters26","шоссе"],
    ["щ…вел…", "аь","3class","letters27","щавель"],
    ["ябл…ко", "о","3class","letters30","яблоко"],
    ["ябл…ня", "о","3class","letters30","яблоня"],
    ["яг…да", "о","3class","letters30","ягода"],
    ["…зык", "я","3class","letters30","язык"],
    ["…нварь", "я","3class","letters30","январь"],
    ["…овый год", "Н","3class","letters15","Новый год"],
    ["… …овым годом", "СН","3class","letters19","С Новым годом"],
    ["… …нём рождения", "СД","3class","letters19","С Днём рождения"],
    ["…ень …наний", "ДЗ","3class","letters5","День Знаний"],
    ["…ень 8 …арта", "ДМ","3class","letters5","День 8 Марта"],
    ["…ень …обеды", "ДП","3class","letters5","День Победы"],



    ["…втом…биль", "ао","4class","letters1","автомобиль"],
    ["…гр…ном", "ао","4class","letters1","агроном"],
    ["адр…с", "е","4class","letters1","адрес"],
    ["…л…ея", "ал","4class","letters1","аллея"],
    ["…п…етит", "ап","4class","letters1","аппетит"],
    ["б…га…", "аж","4class","letters2","багаж"],
    ["б…седа", "е","4class","letters2","беседа"],
    ["б…сед…вать", "ео","4class","letters2","беседовать"],
    ["б…бл……тека", "иио","4class","letters2","библиотека"],
    ["б…бл……текарь", "иио","4class","letters2","библиотекарь"],
    ["б…лет", "и","4class","letters2","билет"],
    ["б…га……тво", "отс","4class","letters2","богатство"],
    ["б…тинки", "о","4class","letters2","ботинки"],
    ["в…гон", "а","4class","letters3","вагон"],
    ["в……де", "ез","4class","letters3","везде"],
    ["в…л…с…пед", "еои","4class","letters3","велосипед"],
    ["в……зал", "ок","4class","letters3","вокзал"],
    ["вп…р…ди", "ее","4class","letters3","впереди"],
    ["вп…рё…", "ит","4class","letters3","вперёд"],
    ["вч…ра", "е","4class","letters3","вчера"],
    ["г…зета", "а","4class","letters4","газета"],
    ["г…реть", "а","4class","letters4","гореть"],
    ["г…р…зонт", "ае","4class","letters4","горизонт"],
    ["грам…", "м","4class","letters4","грамм"],
    ["два…цать", "ц","4class","letters5","двадцать"],
    ["дв…на…цать", "ед","4class","letters5","двенадцать"],
    ["д…рект…р", "ео","4class","letters5","директор"],
    ["…щё", "е","4class","letters6","ещё"],
    ["ж…лез…", "ео","4class","letters8","железо"],
    ["за…тр…", "во","4class","letters9","завтра"],
    ["…дес…", "зь","4class","letters9","здесь"],
    ["инж…нер", "е","4class","letters10","инженер"],
    ["инж…неры", "е","4class","letters10","инженеры"],
    ["к…л…ндарь", "ае","4class","letters12","календарь"],
    ["к…стрюля", "а","4class","letters12","кастрюля"],
    ["к…л…грам…", "иом","4class","letters12","килограмм"],
    ["к…л…метр", "ио","4class","letters12","километр"],
    ["к…м…ндир", "оа","4class","letters12","командир"],
    ["к…мбайн", "о","4class","letters12","комбайн"],
    ["к…мбайнер", "о","4class","letters12","комбайнер"],
    ["к…мбайнёр", "о","4class","letters12","комбайнёр"],
    ["к…рабль", "о","4class","letters12","корабль"],
    ["к…смический", "о","4class","letters12","космический"],
    ["косм…с", "о","4class","letters12","космос"],
    ["к…стюм", "о","4class","letters12","костюм"],
    ["к…стёр", "о","4class","letters12","костёр"],
    ["лучш…", "е","4class","letters13","лучше"],
    ["медл…н……", "ено","4class","letters14","медленно"],
    ["м…тал…", "ел","4class","letters14","металл"],
    ["м…тал…ич…ский", "еле","4class","letters14","металлический"],
    ["н…за…", "ат","4class","letters15","назад"],
    ["…дин……дцать", "она","4class","letters16","одиннадцать"],
    ["п…с……жир", "аса","4class","letters17","пассажир"],
    ["п…с……жирский", "аса","4class","letters17","пассажирский"],
    ["п……заж", "ей","4class","letters17","пейзаж"],
    ["п…беда", "о","4class","letters17","победа"],
    ["п…жалу…ста", "ой","4class","letters17","пожалуйста"],
    ["п…ртрет", "о","4class","letters17","портрет"],
    ["пр…вит…льств…", "аеа","4class","letters17","правительство"],
    ["предс…дат…ль", "ее","4class","letters17","председатель"],
    ["пр…красн…", "еа","4class","letters17","прекрасно"],
    ["пр…красный", "е","4class","letters17","прекрасный"],
    ["пут…шеств…нник", "ее","4class","letters17","путешественник"],
    ["пут…шествие", "е","4class","letters17","путешествие"],
    ["рас…т…яние", "со","4class","letters18","расстояние"],
    ["с…лют", "а","4class","letters19","салют"],
    ["св…ркать", "е","4class","letters19","сверкать"],
    ["…верху", "с","4class","letters19","сверху"],
    ["свит…р", "е","4class","letters19","свитер"],
    ["св…бода", "о","4class","letters19","свобода"],
    ["с…годня", "е","4class","letters19","сегодня"],
    ["с…йчас", "е","4class","letters19","сейчас"],
    ["с…м…на", "ее","4class","letters19","семена"],
    ["се…лка", "я","4class","letters19","сеялка"],
    ["…низу", "с","4class","letters19","снизу"],
    ["т…релка", "о","4class","letters20","тарелка"],
    ["т…л…п…р…дача", "ееее","4class","letters20","телепередача"],
    ["т…л…фон", "ее","4class","letters20","телефон"],
    ["т…перь", "е","4class","letters20","теперь"],
    ["хлеб…роб", "а","4class","letters23","хлебороб"],
    ["х…зяйств…", "оо","4class","letters23","хозяйство"],
    ["х…зя…н", "ои","4class","letters23","хозяин"],
    ["ч…л…век", "ео","4class","letters25","человек"],
    ["ш…стна…цать", "ед","4class","letters26","шестнадцать"],
    ["ш…фёр", "о","4class","letters26","шофёр"],
    ["…кскурсия", "э","4class","letters28","экскурсия"],
    ["…л…ктрич…ский", "эее","4class","letters28","электрический"],
    ["…л…ктрич…ство", "эее","4class","letters28","электричество"],
];
let list_class = [
    ["all", "Все классы"],
    ["1class", "1 класс"],
    ["2class", "2 класс"],
    ["3class", "3 класс"],
    ["4class", "4 класс"],
];

let list_letters = [
    ["all", "Все буквы"],
    ["letters1", "а"],
    ["letters2", "б"],
    ["letters3", "в"],
    ["letters4", "г"],
    ["letters5", "д"],
    ["letters6", "е"],
    ["letters7", "ё"],
    ["letters8", "ж"],
    ["letters9", "з"],
    ["letters10", "и"],
    ["letters11", "й"],
    ["letters12", "к"],
    ["letters13", "л"],
    ["letters14", "м"],
    ["letters15", "н"],
    ["letters16", "о"],
    ["letters17", "п"],
    ["letters18", "р"],
    ["letters19", "с"],
    ["letters20", "т"],
    ["letters21", "у"],
    ["letters22", "ф"],
    ["letters23", "х"],
    ["letters24", "ц"],
    ["letters25", "ч"],
    ["letters26", "ш"],
    ["letters27", "щ"],
    ["letters28", "э"],
    ["letters29", "ю"],
    ["letters30", "я"],
];

let starttimer = document.getElementById("starttimer");

const filter_words = (word) => {
    if(rus_opt_class == "all") {
        if((rus_opt_letter[0] == "all") || (rus_opt_letter.includes(word[3]))){
            return word;
        }
    } else {
        if ((word[2] == rus_opt_class) && 
            ((rus_opt_letter[0] == "all") || (rus_opt_letter.includes(word[3])))) {
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

let rus_opt_class;
let rus_opt_letter = [];
rus_opt_class = localStorage.getItem("rus_opt_class");
let rus_opt_letter_src = localStorage.getItem("rus_opt_letter");
if (rus_opt_letter_src != null) {
    rus_opt_letter = JSON.parse(rus_opt_letter_src);
}

if (rus_opt_class == null) { rus_opt_class = "all"; }
if (rus_opt_letter == null) { rus_opt_letter = ["all"]; }


if(starttimer != null) {
    let rus_opt_timer_src = localStorage.getItem("rus_opt_timer");
if(rus_opt_timer_src == "Y")
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
    select_class.value = rus_opt_class;
}

let select_letters = document.getElementById('letters');
if(select_letters != null) {
    for(let i=0;i<list_letters.length;i++) {
        let l = words.filter(filterByLetter, [rus_opt_class, list_letters[i][0]]);
        // console.log(l,[rus_opt_class, list_letters[i][0]]);
        if(i==0 || l.length>0) {
            let opt = document.createElement("option");
            opt.innerHTML = list_letters[i][1];
            opt.value = list_letters[i][0];
            for(let j=0;j<rus_opt_letter.length;j++){
                if(list_letters[i][0] == rus_opt_letter[j]){
                    opt.selected = true;
                    break;
                }
            }
            select_letters.append(opt);
        }
    }
    // select_letters.value = rus_opt_letter;
}


let rus_result = [];
let rus_result_src = localStorage.getItem("rus_result");
if (rus_result_src != null) {
    rus_result = JSON.parse(rus_result_src);
}
//console.log('rus_result',rus_result);



function show_result() {
    let headers2 = [
        "Дата тестирования",
        "Правильных ответов",
        "Всего вопросов",
        "Вопросы класса",
        "Вопросы на множитель",
        "Время тестирования"
    ];
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

    for (let i = rus_result.length-1; i >=0 ; i--) {
        let tr = document.createElement("tr");
        tr.classList.add("result-table_cell");

        for (let j = 0; j < rus_result[i].length; j++) {
            let td = document.createElement("td");
            td.classList.add("result-table_cell");
            if(j == 3) {
                td.innerHTML = list_class.filter((classi) => classi[0] == rus_result[i][j])[0][1];
            } else {  
                if(j == 4) {
                    td.innerHTML = '';
                    console.log('list_letters',list_letters);
                    for(let l = 0;l< rus_result[i][j].length;l++){
                        td.innerHTML = td.innerHTML + list_letters.filter((letter) => letter[0] == rus_result[i][j][l])[0][1];
                        // td.innerHTML = td.innerHTML + rus_result[i][j];
                        if(l < rus_result[i][j].length-1) td.innerHTML =td.innerHTML + ", ";
                    }
                } else               
                    td.innerHTML = rus_result[i][j]; 
            }   
            tr.append(td);
        }
        table.append(tr);
    }
    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan","5");
    if(rus_result.length != 0) {
        let bnt_reset = document.createElement("button");
        bnt_reset.innerHTML = "Сброс результатов";
        bnt_reset.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("rus_result", JSON.stringify([]));
            rus_result = [];
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
        let rus_result_cur = [];
        resultTable.append(show(headers, answers, rus_result_cur));
        rus_result.push(rus_result_cur);
        resultTable.append(show_result());
        console.log("rus_result_cur",rus_result_cur);
        console.log("rus_result",rus_result);
        localStorage.setItem('rus_result', JSON.stringify(rus_result));
        
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

