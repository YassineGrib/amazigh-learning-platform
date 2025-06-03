// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  progress: UserProgress;
}

export interface UserProgress {
  id: string;
  userId: string;
  currentLevel: ProficiencyLevel;
  totalLessonsCompleted: number;
  totalQuizzesCompleted: number;
  totalVocabularyLearned: number;
  streakDays: number;
  lastActiveDate: Date;
  dialectPreference?: AmazighDialect;
}

// Language Learning Types
export enum ProficiencyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED'
}

export enum AmazighDialect {
  KABYLE = 'KABYLE',
  CHAOUI = 'CHAOUI',
  MOZABITE = 'MOZABITE',
  TARIFIT = 'TARIFIT',
  TASHELHIT = 'TASHELHIT'
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  level: ProficiencyLevel;
  dialect: AmazighDialect;
  order: number;
  duration: number; // in minutes
  audioUrl?: string;
  videoUrl?: string;
  isCompleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  audioUrl?: string;
  imageUrl?: string;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
  TRUE_FALSE = 'TRUE_FALSE',
  AUDIO_RECOGNITION = 'AUDIO_RECOGNITION',
  TRANSLATION = 'TRANSLATION'
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  answers: QuizAnswer[];
  score: number;
  completedAt: Date;
  timeSpent: number; // in seconds
}

export interface QuizAnswer {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

// Vocabulary and Flashcard Types
export interface VocabularyWord {
  id: string;
  amazighWord: string;
  translation: string;
  pronunciation?: string;
  audioUrl?: string;
  imageUrl?: string;
  category: VocabularyCategory;
  dialect: AmazighDialect;
  difficulty: ProficiencyLevel;
  createdAt: Date;
  updatedAt: Date;
}

export enum VocabularyCategory {
  FAMILY = 'FAMILY',
  FOOD = 'FOOD',
  WORK = 'WORK',
  TRAVEL = 'TRAVEL',
  GREETINGS = 'GREETINGS',
  NUMBERS = 'NUMBERS',
  COLORS = 'COLORS',
  ANIMALS = 'ANIMALS',
  NATURE = 'NATURE',
  DAILY_LIFE = 'DAILY_LIFE'
}

export interface Flashcard {
  id: string;
  userId: string;
  vocabularyWordId: string;
  vocabularyWord: VocabularyWord;
  repetitionCount: number;
  easeFactor: number;
  interval: number;
  nextReviewDate: Date;
  lastReviewedAt?: Date;
  isLearned: boolean;
}

// AI Chatbot Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTranslated?: boolean;
  originalLanguage?: string;
  corrections?: GrammarCorrection[];
}

export interface GrammarCorrection {
  original: string;
  corrected: string;
  explanation: string;
  position: {
    start: number;
    end: number;
  };
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  topic?: string;
  dialect: AmazighDialect;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Component Props Types
export interface LessonCardProps {
  lesson: Lesson;
  onStart: (lessonId: string) => void;
  isLocked?: boolean;
}

export interface QuizCardProps {
  quiz: Quiz;
  onStart: (quizId: string) => void;
  bestScore?: number;
}

export interface FlashcardProps {
  flashcard: Flashcard;
  onAnswer: (difficulty: 'easy' | 'medium' | 'hard') => void;
  showAnswer: boolean;
  onFlip: () => void;
}

// Store Types (for Zustand)
export interface AppState {
  user: User | null;
  currentLesson: Lesson | null;
  currentQuiz: Quiz | null;
  chatSessions: ChatSession[];
  flashcards: Flashcard[];
  isLoading: boolean;
  error: string | null;
}

export interface AppActions {
  setUser: (user: User | null) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  setCurrentQuiz: (quiz: Quiz | null) => void;
  addChatSession: (session: ChatSession) => void;
  updateChatSession: (sessionId: string, updates: Partial<ChatSession>) => void;
  setFlashcards: (flashcards: Flashcard[]) => void;
  updateFlashcard: (flashcardId: string, updates: Partial<Flashcard>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
