import { GeneralResponse } from './general-response.model';

export interface ExamLevel {
  _id?: string;
  userId: number;
  level: string;
  words: [string];
  date?: string;
  correctWords: [string];
  pass: boolean;
}

export interface ExamLevelData {
  allExamLevels: ExamLevel[];
  examById: ExamLevel[];
  createExam: ExamLevel;
  updateExam: ExamLevel;
  deleteExam: ExamLevel;
}
export interface ExamLevelResponse extends GeneralResponse {
  data: ExamLevelData;
}

export  interface WeekQuiz {
  _id?: string;
  idQuiz: number;
  words: [string];
  date?: string;
  active?: boolean;
}

export interface WeekQuizData {
  allWeekQuiz: WeekQuiz[];
  weekQuizById: WeekQuiz[];
  createWeekQuiz: WeekQuiz;
  updateWeekQuiz: WeekQuiz;
  deleteWeekQuiz: WeekQuiz;
}

export interface WeekQuizResponse extends GeneralResponse{
  data: WeekQuizData;
}

export interface UserQuiz {
  _id?: string;
  userId: number;
  idQuiz: number;
  words: [string];
  date?: string;
  correctWords: [string];
  score: number;
}

export interface UserQuizData {
  allUserQuiz: UserQuiz[];
  userQuizByIdQuiz: UserQuiz[];
  userQuizByUserID: UserQuiz[];
  createUserQuiz: UserQuiz;
  deleteUserQuiz: UserQuiz;
}

export interface UserQuizResponse extends GeneralResponse{
  data: UserQuizData;
}
