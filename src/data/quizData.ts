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
        question: 'Иван золо 300',
        answer: 'Ответ иван золо 300',
        points: 300,
        isPlayed: false,
        questionImage: '/images/round1/ivanzolo/300/иван золо 300 вопрос.jpeg',
        answerImage: '/images/round1/ivanzolo/300/иван золо 300 ответ.webp'
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
      { id: 'q-1-3-1', question: 'Ваш вопрос 1', answer: 'Ваш ответ', points: 100, isPlayed: false },
      { id: 'q-1-3-2', question: 'Ваш вопрос 2', answer: 'Ваш ответ', points: 200, isPlayed: false },
      { id: 'q-1-3-3', question: 'Ваш вопрос 3', answer: 'Ваш ответ', points: 300, isPlayed: false },
      { id: 'q-1-3-4', question: 'Ваш вопрос 4', answer: 'Ваш ответ', points: 400, isPlayed: false },
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
    name: 'История', // ← Название категории
    questions: [
      { id: 'q-2-1-1', question: 'Кто придумал образ современного Санта Клауса в красном костюме?', answer: 'Coca-Cola / Хэддон Сандблом', points: 100, isPlayed: false },
      { id: 'q-2-1-2', question: 'В каком веке появились первые ёлочные украшения?', answer: '16 век / XVI', points: 200, isPlayed: false },
      { id: 'q-2-1-3', question: 'Какой праздник отмечали славяне до принятия Нового года?', answer: 'Коляда', points: 300, isPlayed: false },
      { id: 'q-2-1-4', question: 'Когда в СССР запретили ёлку?', answer: '1929', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-2-2',
    name: 'География', // ← Название категории
    questions: [
      { id: 'q-2-2-1', question: 'Где находится резиденция Деда Мороза в России?', answer: 'Великий Устюг', points: 100, isPlayed: false },
      { id: 'q-2-2-2', question: 'В какой стране Новый год наступает раньше всех?', answer: 'Кирибати / Самоа', points: 200, isPlayed: false },
      { id: 'q-2-2-3', question: 'На какой площади в Москве бьют куранты?', answer: 'Красная площадь', points: 300, isPlayed: false },
      { id: 'q-2-2-4', question: 'В каком городе находится Рокфеллеровская ёлка?', answer: 'Нью-Йорк', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-2-3',
    name: 'Сказки', // ← Название категории
    questions: [
      { id: 'q-2-3-1', question: 'Кто написал сказку "Щелкунчик"?', answer: 'Гофман', points: 100, isPlayed: false },
      { id: 'q-2-3-2', question: 'Как зовут оленя Санты с красным носом?', answer: 'Рудольф', points: 200, isPlayed: false },
      { id: 'q-2-3-3', question: 'Кто украл Рождество в книге Доктора Сьюза?', answer: 'Гринч', points: 300, isPlayed: false },
      { id: 'q-2-3-4', question: 'Сколько оленей в упряжке Санты (без Рудольфа)?', answer: '8', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-2-4',
    name: 'Символы', // ← Название категории
    questions: [
      { id: 'q-2-4-1', question: 'Какое растение вешают над дверью для поцелуя?', answer: 'Омела', points: 100, isPlayed: false },
      { id: 'q-2-4-2', question: 'Какой цветок называют "рождественской звездой"?', answer: 'Пуансеттия', points: 200, isPlayed: false },
      { id: 'q-2-4-3', question: 'Что символизирует вечнозелёная ёлка?', answer: 'Вечная жизнь / Бессмертие', points: 300, isPlayed: false },
      { id: 'q-2-4-4', question: 'Какое животное — символ 2025 года по китайскому календарю?', answer: 'Змея', points: 400, isPlayed: false },
    ],
  },
  {
    id: 'cat-2-5',
    name: 'Разное', // ← Название категории
    questions: [
      { id: 'q-2-5-1', question: 'Как называется период между Рождеством и Крещением?', answer: 'Святки', points: 100, isPlayed: false },
      { id: 'q-2-5-2', question: 'Сколько боёв курантов звучит в полночь?', answer: '12', points: 200, isPlayed: false },
      { id: 'q-2-5-3', question: 'Какой газ используют для надувания шариков, чтобы они летали?', answer: 'Гелий', points: 300, isPlayed: false },
      { id: 'q-2-5-4', question: 'Как называется традиция дарить подарки тайно?', answer: 'Тайный Санта / Secret Santa', points: 400, isPlayed: false },
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
