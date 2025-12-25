import { Round, Category, Question, DEFAULT_POINTS } from '@/types/game';

// ========================================
// ЗДЕСЬ ТЫ МОЖЕШЬ ЗАПОЛНИТЬ СВОИ ВОПРОСЫ!
// ========================================

// РАУНД 1
const round1Categories: Category[] = [
  {
    id: 'cat-1-1',
    name: 'Каламбуры', // ← Название категории
    questions: [
      {
        id: 'q-1-1-1',
        question: 'Каламбур 100',
        answer: 'Ответ на каламбур 100',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round1/kalambury/100/каламбур 100 вопрос.jpeg',
        answerImage: '/images/round1/kalambury/100/каламбур 100 ответ.jpeg'
      },
      {
        id: 'q-1-1-2',
        question: 'Каламбур 200',
        answer: 'Ответ на каламбур 200',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round1/kalambury/200/каламбуры 200 вопрос.jpeg',
        answerImage: '/images/round1/kalambury/200/каламбур 200 ответ.jpeg'
      },
      {
        id: 'q-1-1-3',
        question: 'Каламбур 300',
        answer: 'Ответ на каламбур 300',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round1/kalambury/300/каламбуры 300 вопрос.jpeg',
        answerImage: '/images/round1/kalambury/300/каламбуры 300 ответ.jpeg'
      },
      {
        id: 'q-1-1-4',
        question: 'Каламбур 400',
        answer: 'Ответ на каламбур 400',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round1/kalambury/400/каламбуры 400 вопрос .jpeg',
        answerImage: '/images/round1/kalambury/400/каламбуры 400 ответ.jpeg'
      },
    ],
  },
  {
    id: 'cat-1-2',
    name: 'Ivanzolo2004 или альтушка', // ← Название категории
    questions: [
      {
        id: 'q-1-2-1',
        question: 'Иван золо 100',
        answer: 'Ответ иван золо 100',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round1/ivanzolo/100/иван золо 100 вопрос.jpeg',
        answerImage: '/images/round1/ivanzolo/100/иван золо 100 ответ.jpeg'
      },
      {
        id: 'q-1-2-2',
        question: 'Иван золо 200',
        answer: 'Ответ иван золо 200',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round1/ivanzolo/200/иван золо 200 вопрос.jpeg',
        answerImage: '/images/round1/ivanzolo/200/иван золо 200 ответ.avif'
      },
      {
        id: 'q-1-2-3',
        question: 'БУСТЕР',
        answer: 'Бустер!',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round1/Buster.png',
        isBuster: true
      },
      {
        id: 'q-1-2-4',
        question: 'Иван золо 400',
        answer: 'Ответ иван золо 400',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round1/ivanzolo/400/иван золо 400 вопрос.jpeg',
        answerImage: '/images/round1/ivanzolo/400/иван золо 400 ответ.jpeg'
      },
    ],
  },
  {
    id: 'cat-1-3',
    name: 'Мемный фон', // ← Название категории
    questions: [
      {
        id: 'q-1-3-1',
        question: 'Угадай мем',
        answer: 'Afghan War',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round1/memes/100/Afghan War Search Result.png',
        answerVideo: '/images/round1/memes/100/5266291172_1_tiktok_685bdb3132e855_99483035.mp4'
      },
      {
        id: 'q-1-3-2',
        question: 'Угадай мем',
        answer: 'Fabric',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round1/memes/200/Fabric search result.png',
        answerVideo: '/images/round1/memes/200/7072147031_1_tiktok_685c75eaba0207_78789667.mp4'
      },
      {
        id: 'q-1-3-3',
        question: 'Угадай мем',
        answer: 'Добкин 2005',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round1/memes/300/Добкин 2005.png',
        answerVideo: '/images/round1/memes/300/371411361_1_tiktok_69282719092671_28921800 2.mov'
      },
      {
        id: 'q-1-3-4',
        question: 'Угадай мем',
        answer: 'Мем 400',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round1/memes/400/Screenshot 2025-12-24 at 20.22.08.png',
        answerVideo: '/images/round1/memes/400/5229237927_1_tiktok_6861162ce27bb4_20131366.mp4'
      },
    ],
  },
  {
    id: 'cat-1-4',
    name: 'Цитаты политиков', // ← Название категории
    questions: [
      {
        id: 'q-1-4-1',
        question: 'Женщинам лесбиянство я прощаю. Но голубизну мужикам — никогда в жизни.',
        answer: 'Лукашенко',
        points: 100,
        isPlayed: false
      },
      {
        id: 'q-1-4-2',
        question: 'А сегодня в завтрашний день не все могут смотреть. Вернее, смотреть могут не только лишь все, мало кто может это делать.',
        answer: 'Кличко',
        points: 200,
        isPlayed: false
      },
      {
        id: 'q-1-4-3',
        question: 'У вас скучное лицо. Ищите козявки у себя, посмотрите на себя в зеркало!',
        answer: 'Геннадий Кернес',
        points: 300,
        isPlayed: false
      },
      {
        id: 'q-1-4-4',
        question: 'ПОДЛОСТЬ! ГАДОСТЬ! ПРЕСТУПНИКИ!',
        answer: 'Жириновский',
        points: 400,
        isPlayed: false
      },
    ],
  },
  {
    id: 'cat-1-5',
    name: 'Новогодние фильмы', // ← Название категории
    questions: [
      {
        id: 'q-1-5-1',
        question: 'Угадай фильм',
        answer: 'Один дома (Home Alone)',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round1/films/100/Home Alone 1990.jpg'
      },
      {
        id: 'q-1-5-2',
        question: 'Угадай фильм',
        answer: 'Ирония судьбы',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round1/films/200/Ironiya Sudby 1975.jpg'
      },
      {
        id: 'q-1-5-3',
        question: 'Угадай фильм',
        answer: 'Джентльмены удачи',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round1/films/300/Dzhentlmeny_min.jpg'
      },
      {
        id: 'q-1-5-4',
        question: 'Угадай фильм',
        answer: 'Реальная любовь (Love Actually)',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round1/films/400/Love Actually 2003.jpg'
      },
    ],
  },
];

// РАУНД 2 (очки x2)
const round2Categories: Category[] = [
  {
    id: 'cat-2-1',
    name: 'Жидковский или Женщина', // ← Название категории
    questions: [
      {
        id: 'q-2-1-1',
        question: 'Жидковский или Женщина?',
        answer: 'Ответ',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round2/zhidkovsky/100/answer.jpeg',
        answerImage: '/images/round2/zhidkovsky/100/question.jpeg'
      },
      {
        id: 'q-2-1-2',
        question: 'Жидковский или Женщина?',
        answer: 'Ответ',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round2/zhidkovsky/200/answer.jpeg',
        answerImage: '/images/round2/zhidkovsky/200/question.jpeg'
      },
      {
        id: 'q-2-1-3',
        question: 'Жидковский или Женщина?',
        answer: 'Ответ',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round2/zhidkovsky/300/answer.jpeg',
        answerImage: '/images/round2/zhidkovsky/300/question.jpeg'
      },
      {
        id: 'q-2-1-4',
        question: 'Жидковский или Женщина?',
        answer: 'Ответ',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round2/zhidkovsky/400/answer.jpeg',
        answerImage: '/images/round2/zhidkovsky/400/question.jpeg'
      },
    ],
  },
  {
    id: 'cat-2-2',
    name: 'Скрытое', // ← Название категории
    questions: [
      {
        id: 'q-2-2-1',
        question: 'Угадай мем',
        answer: 'Ответ',
        points: 100,
        isPlayed: false,
        questionImage: '/images/round2/memes/100/answer.jpeg',
        answerImage: '/images/round2/memes/100/question.png'
      },
      {
        id: 'q-2-2-2',
        question: 'Угадай мем',
        answer: 'Ответ',
        points: 200,
        isPlayed: false,
        questionImage: '/images/round2/memes/200/answer.jpeg',
        answerImage: '/images/round2/memes/200/question.jpeg'
      },
      {
        id: 'q-2-2-3',
        question: 'Угадай мем',
        answer: 'Ответ',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round2/memes/300/answer.jpeg',
        answerImage: '/images/round2/memes/300/question.png'
      },
      {
        id: 'q-2-2-4',
        question: 'Угадай мем',
        answer: 'Ответ',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round2/memes/400/answer.jpeg',
        answerImage: '/images/round2/memes/400/question.png'
      },
    ],
  },
  {
    id: 'cat-2-3',
    name: 'Новости', // ← Название категории
    questions: [
      {
        id: 'q-2-3-1',
        question: 'С 1 января владельцы иностранных веб-ресурсов должны будут сертифицировать их для работы в РФ. Иначе - автоматическая блокировка',
        answer: 'ЛОЖЬ',
        points: 100,
        isPlayed: false
      },
      {
        id: 'q-2-3-2',
        question: 'В Бразилии женщина попыталась взять кредит, привезя в банк мёртвого дядю в инвалидном кресле и выдавая его за живого',
        answer: 'ПРАВДА',
        points: 200,
        isPlayed: false
      },
      {
        id: 'q-2-3-3',
        question: 'Вместо балета Чайковского - мюзикл: в Большом театре представят совместное творение Басты и Егора Крида',
        answer: 'ЛОЖЬ',
        points: 300,
        isPlayed: false
      },
      {
        id: 'q-2-3-4',
        question: 'БУСТЕР',
        answer: 'Бустер!',
        points: 400,
        isPlayed: false,
        questionImage: '/images/round2/buster/3D Golden Number 500.png',
        isBuster: true
      },
    ],
  },
  {
    id: 'cat-2-4',
    name: 'Тренды в ТТ', // ← Название категории
    questions: [
      {
        id: 'q-2-4-1',
        question: 'Коронавирус-тренд: в 2020 году некоторые люди намеренно облизывали дверные ручки, автомобили и даже туалетные сиденья, надеясь заразиться COVID-19.',
        answer: 'ПРАВДА',
        points: 100,
        isPlayed: false
      },
      {
        id: 'q-2-4-2',
        question: 'Тренд на «изменение цвета глаз»: тиктокеры смешивали бытовую химию (включая белизну, бензин и средства от вредителей) и подносили ёмкость к глазу, рассчитывая, что испарения смогут изменить цвет радужки.',
        answer: 'ПРАВДА',
        points: 200,
        isPlayed: false
      },
      {
        id: 'q-2-4-3',
        question: 'Тренд «стань магнитом»: подростки глотали магниты разных размеров, надеясь обрести способность притягивать металлические предметы.',
        answer: 'ЛОЖЬ',
        points: 300,
        isPlayed: false
      },
      {
        id: 'q-2-4-4',
        question: 'Эксгибиционистский тренд: некоторые участники считали забавным появляться в общественных местах со «случайно» неприкрытыми интимными частями тела.',
        answer: 'ЛОЖЬ',
        points: 400,
        isPlayed: false
      },
    ],
  },
  {
    id: 'cat-2-5',
    name: 'Музыкалити', // ← Название категории
    questions: [
      {
        id: 'q-2-5-1',
        question: 'Послушайте фрагмент',
        answer: 'Ответ',
        points: 100,
        isPlayed: false,
        questionAudio: '/images/round2/музыкалити/200/вопрос/v0f044gc0000csurkpfog65q3e7tb61g.mov',
        answerAudio: '/images/round2/музыкалити/200/ответ/v09044g40000cm43f4vog65sja18gta0.mov'
      },
      {
        id: 'q-2-5-2',
        question: 'Послушайте фрагмент',
        answer: 'Ответ',
        points: 200,
        isPlayed: false,
        questionAudio: '/images/round2/музыкалити/400/вопрос/v14044g50000d4khvv7og65oj93o0kqg.mov',
        answerAudio: '/images/round2/музыкалити/400/ответ/v14044g50000d47hapnog65s659jgfrg.mp4'
      },
      {
        id: 'q-2-5-3',
        question: 'Послушайте фрагмент',
        answer: 'Ответ',
        points: 300,
        isPlayed: false,
        questionAudio: '/images/round2/музыкалити/600/вопрос/v1c044g50000d4u1o87og65uvghb1elg.mp4',
        answerAudio: '/images/round2/музыкалити/600/ответ/v24044gl0000d55sv9nog65otmt5a430.mp4'
      },
      {
        id: 'q-2-5-4',
        question: 'Послушайте фрагмент',
        answer: 'Ответ',
        points: 400,
        isPlayed: false,
        questionAudio: '/images/round2/музыкалити/800/вопрос/v14044g50000ctjfb7fog65t1j8j2g6g.mp4',
        answerAudio: '/images/round2/музыкалити/800/ответ/v09044g40000clr5shnog65p29e908d0.mov'
      },
    ],
  },
];

// РАУНД 3 (очки x3)
const round3Categories: Category[] = [
  {
    id: 'cat-3-1',
    name: 'Мировые традиции', // ← Название категории
    questions: [
      { id: 'q-3-1-1', question: 'В какой стране бросают старую мебель в окно на Новый год?', answer: 'Италия', points: 100, isPlayed: false },
      { id: 'q-3-1-2', question: 'В какой стране на Новый год принято бить посуду о дома друзей?', answer: 'Дания', points: 200, isPlayed: false },
      { id: 'q-3-1-3', question: 'В какой стране звонят в колокола 108 раз на Новый год?', answer: 'Япония', points: 300, isPlayed: false },
      { id: 'q-3-1-4', question: 'В какой стране едят лапшу соба на Новый год для долголетия?', answer: 'Япония', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-3-2',
    name: 'Кино и мультфильмы', // ← Название категории
    questions: [
      { id: 'q-3-2-1', question: 'Какой актёр озвучивал Джека Скеллингтона в "Кошмаре перед Рождеством"?', answer: 'Дэнни Эльфман', points: 100, isPlayed: false },
      { id: 'q-3-2-2', question: 'Как называется город, где живёт Гринч?', answer: 'Ктоград / Whoville', points: 200, isPlayed: false },
      { id: 'q-3-2-3', question: 'Сколько лет провёл в тюрьме главный герой "Карнавальной ночи"?', answer: 'Не сидел (это комедия)', points: 300, isPlayed: false },
      { id: 'q-3-2-4', question: 'Какой город показывают в начале фильма "Реальная любовь"?', answer: 'Лондон', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-3-3',
    name: 'Рекорды', // ← Название категории
    questions: [
      { id: 'q-3-3-1', question: 'Какая страна установила рекорд самого большого снеговика?', answer: 'США (Мэн)', points: 100, isPlayed: false },
      { id: 'q-3-3-2', question: 'Сколько метров в высоту была самая высокая ёлка в мире?', answer: '67 метров', points: 200, isPlayed: false },
      { id: 'q-3-3-3', question: 'Сколько людей одновременно пели "Jingle Bells" для рекорда?', answer: 'Более 10000', points: 300, isPlayed: false },
      { id: 'q-3-3-4', question: 'В каком городе зажгли самую большую рождественскую гирлянду?', answer: 'Канберра, Австралия', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-3-4',
    name: 'Литература', // ← Название категории
    questions: [
      { id: 'q-3-4-1', question: 'Кто написал "Рождественскую песнь в прозе"?', answer: 'Чарльз Диккенс', points: 100, isPlayed: false },
      { id: 'q-3-4-2', question: 'Как звали скрягу из "Рождественской песни"?', answer: 'Эбенизер Скрудж', points: 200, isPlayed: false },
      { id: 'q-3-4-3', question: 'Кто написал стихотворение "Мороз-воевода"?', answer: 'Некрасов', points: 300, isPlayed: false },
      { id: 'q-3-4-4', question: 'В какой сказке девочка встречает 12 месяцев?', answer: 'Двенадцать месяцев', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-3-5',
    name: 'Знаменитости', // ← Название категории
    questions: [
      { id: 'q-3-5-1', question: 'Какая певица исполнила "All I Want for Christmas Is You"?', answer: 'Mariah Carey', points: 100, isPlayed: false },
      { id: 'q-3-5-2', question: 'Кто сыграл Деда Мороза в "Санта Клаусе"?', answer: 'Тим Аллен', points: 200, isPlayed: false },
      { id: 'q-3-5-3', question: 'Какой актёр сыграл 6 ролей в мультфильме "Полярный экспресс"?', answer: 'Том Хэнкс', points: 300, isPlayed: false },
      { id: 'q-3-5-4', question: 'Кто режиссёр фильма "Кошмар перед Рождеством"?', answer: 'Тим Бёртон', points: 400, isPlayed: false },
    ],
  },
];

// Финальный вопрос
export const FINAL_QUESTION = {
  category: 'Загадка',
  question: 'Какое слово можно составить из букв: Р, О, Д, Г, Н, О, В, Ы, Й, И ?',
  answer: 'НОВОГОДНИЙ',
};

// Экспортируем готовые раунды
export const QUIZ_ROUNDS: Round[] = [
  {
    id: 'round-1',
    name: 'Раунд 1',
    categories: round1Categories,
    pointMultiplier: 1,
  },
  {
    id: 'round-2',
    name: 'Раунд 2',
    categories: round2Categories,
    pointMultiplier: 2,
  },
  {
    id: 'round-3',
    name: 'Раунд 3',
    categories: round3Categories,
    pointMultiplier: 3,
  },
];
