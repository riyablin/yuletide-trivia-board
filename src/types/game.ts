export interface Question {
  id: string;
  question: string;
  answer: string;
  points: number;
  isPlayed: boolean;
  questionImage?: string; // Путь к картинке-вопросу
  answerImage?: string;   // Путь к картинке-ответу
}

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

export interface Round {
  id: string;
  name: string;
  categories: Category[];
  pointMultiplier: number;
}

export interface Team {
  id: string;
  name: string;
  score: number;
  color: string;
}

export interface GameState {
  teams: Team[];
  rounds: Round[];
  currentRound: number;
  currentQuestion: Question | null;
  currentCategory: Category | null;
  showAnswer: boolean;
  gamePhase: 'setup' | 'editor' | 'playing' | 'final' | 'results';
  finalWagers: Record<string, number>;
  finalAnswers: Record<string, { answer: string; correct: boolean | null }>;
}

export const TEAM_COLORS = [
  'hsl(0, 75%, 50%)',      // Red
  'hsl(210, 100%, 50%)',   // Blue
  'hsl(45, 90%, 55%)',     // Gold
  'hsl(280, 70%, 50%)',    // Purple
  'hsl(150, 70%, 40%)',    // Green
  'hsl(30, 90%, 55%)',     // Orange
];

export const DEFAULT_POINTS = [100, 200, 300, 400, 500];

export const createEmptyCategory = (index: number): Category => ({
  id: `cat-${Date.now()}-${index}`,
  name: `Категория ${index + 1}`,
  questions: DEFAULT_POINTS.map((points, i) => ({
    id: `q-${Date.now()}-${index}-${i}`,
    question: '',
    answer: '',
    points,
    isPlayed: false,
  })),
});

export const createEmptyRound = (roundNum: number, multiplier: number): Round => ({
  id: `round-${roundNum}`,
  name: `Раунд ${roundNum}`,
  categories: Array.from({ length: 5 }, (_, i) => createEmptyCategory(i)),
  pointMultiplier: multiplier,
});
