import { Round, Category, Question, DEFAULT_POINTS } from '@/types/game';

// ========================================
// ЗДЕСЬ ТЫ МОЖЕШЬ ЗАПОЛНИТЬ СВОИ ВОПРОСЫ!
// ========================================

// РАУНД 1
const round1Categories: Category[] = [
  {
    id: 'cat-1-1',
    name: 'Новый Год', // ← Название категории
    questions: [
      { id: 'q-1-1-1', question: 'В какой стране Новый год празднуют по лунному календарю?', answer: 'Китай', points: 100, isPlayed: false },
      { id: 'q-1-1-2', question: 'Какое дерево традиционно наряжают на Новый год?', answer: 'Ёлка', points: 200, isPlayed: false },
      { id: 'q-1-1-3', question: 'Как зовут внучку Деда Мороза?', answer: 'Снегурочка', points: 300, isPlayed: false },
      { id: 'q-1-1-4', question: 'В каком году Пётр I перенёс празднование Нового года на 1 января?', answer: '1700', points: 400, isPlayed: false },
      { id: 'q-1-1-5', question: 'Какой напиток традиционно пьют под бой курантов?', answer: 'Шампанское', points: 500, isPlayed: false },
    ],
  },
  {
    id: 'cat-1-2',
    name: 'Фильмы', // ← Название категории
    questions: [
      { id: 'q-1-2-1', question: 'Какой фильм показывают каждый Новый год в России?', answer: 'Ирония судьбы', points: 100, isPlayed: false },
      { id: 'q-1-2-2', question: 'В каком городе происходит действие фильма "Один дома"?', answer: 'Чикаго', points: 200, isPlayed: false },
      { id: 'q-1-2-3', question: 'Кто играет главную роль в фильме "Гринч"?', answer: 'Джим Керри', points: 300, isPlayed: false },
      { id: 'q-1-2-4', question: 'Назовите режиссёра фильма "Ирония судьбы"', answer: 'Эльдар Рязанов', points: 400, isPlayed: false },
      { id: 'q-1-2-5', question: 'В каком году вышел фильм "Один дома"?', answer: '1990', points: 500, isPlayed: false },
    ],
  },
  {
    id: 'cat-1-3',
    name: 'Музыка', // ← Название категории
    questions: [
      { id: 'q-1-3-1', question: 'Кто исполняет песню "В лесу родилась ёлочка"?', answer: 'Детский хор / народная', points: 100, isPlayed: false },
      { id: 'q-1-3-2', question: 'Какой праздничный хит исполняет Mariah Carey?', answer: 'All I Want for Christmas Is You', points: 200, isPlayed: false },
      { id: 'q-1-3-3', question: 'Кто написал музыку к балету "Щелкунчик"?', answer: 'Чайковский', points: 300, isPlayed: false },
      { id: 'q-1-3-4', question: 'В каком году была написана песня "Jingle Bells"?', answer: '1857', points: 400, isPlayed: false },
      { id: 'q-1-3-5', question: 'Какая группа исполняет песню "Last Christmas"?', answer: 'Wham!', points: 500, isPlayed: false },
    ],
  },
  {
    id: 'cat-1-4',
    name: 'Традиции', // ← Название категории
    questions: [
      { id: 'q-1-4-1', question: 'Что кладут под ёлку для Деда Мороза?', answer: 'Подарки / Угощение', points: 100, isPlayed: false },
      { id: 'q-1-4-2', question: 'В какой стране на Новый год едят 12 виноградин?', answer: 'Испания', points: 200, isPlayed: false },
      { id: 'q-1-4-3', question: 'Что принято сжигать на Новый год в Эквадоре?', answer: 'Чучело старого года', points: 300, isPlayed: false },
      { id: 'q-1-4-4', question: 'В какой стране Санта Клаус живёт в Лапландии?', answer: 'Финляндия', points: 400, isPlayed: false },
      { id: 'q-1-4-5', question: 'Какого цвета должно быть бельё на Новый год в Италии?', answer: 'Красного', points: 500, isPlayed: false },
    ],
  },
  {
    id: 'cat-1-5',
    name: 'Еда', // ← Название категории
    questions: [
      { id: 'q-1-5-1', question: 'Какой салат — главный на новогоднем столе в России?', answer: 'Оливье', points: 100, isPlayed: false },
      { id: 'q-1-5-2', question: 'Из чего делают имбирные пряники?', answer: 'Мука, мёд, имбирь', points: 200, isPlayed: false },
      { id: 'q-1-5-3', question: 'Какой напиток варят из вина со специями?', answer: 'Глинтвейн', points: 300, isPlayed: false },
      { id: 'q-1-5-4', question: 'Как называется рождественский торт в Италии?', answer: 'Панеттоне', points: 400, isPlayed: false },
      { id: 'q-1-5-5', question: 'Какую рыбу традиционно едят на Рождество в Польше?', answer: 'Карп', points: 500, isPlayed: false },
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
      { id: 'q-2-1-5', question: 'В каком году ёлку вернули в СССР как "новогоднюю"?', answer: '1935', points: 500, isPlayed: false },
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
      { id: 'q-2-2-5', question: 'Какой австралийский город первым встречает Новый год фейерверком?', answer: 'Сидней', points: 500, isPlayed: false },
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
      { id: 'q-2-3-5', question: 'Как зовут снеговика из мультфильма "Холодное сердце"?', answer: 'Олаф', points: 500, isPlayed: false },
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
      { id: 'q-2-4-5', question: 'Сколько лучей у Вифлеемской звезды?', answer: '8', points: 500, isPlayed: false },
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
      { id: 'q-2-5-5', question: 'Сколько дней длятся новогодние каникулы в России (официально)?', answer: '8-10 дней', points: 500, isPlayed: false },
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
];
