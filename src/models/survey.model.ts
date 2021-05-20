export class Step {
  questionId: number;
  label: string;
  questionType: QuestionType;
  requiredSequence: number;
  index: number;
}


/*graphql*/


/*response driverSurveysSearch*/
export interface DriverSurveysResponse {
  driverSurveysSearch: IDriverSurvey[];
}

/*response driverSurvey*/
export interface DriverSurveyResponse {
  driverSurvey: IDriverSurvey;
}

export interface IDriverSurvey {
  surveyDriverId: number
  driverEmployeId: number
  startDate: String
  endDate: String
  labelDate: String
  labelDay: String
  hasGrief: Boolean,
  questions: IQuestion[];
}


export interface IQuestion {
  id: number;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
}

export interface IDevelopment extends IQuestion {
  id: number;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  questionDataType: QuestionDataType;
  selectedChoice: string;
}

export interface IChoice extends IQuestion {
  id: number;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  mulipleAnswer: boolean
  selectedChoices: number[]
  displayedChoices: [Answer]
}

export interface INestedChoice extends IQuestion {
  id: number;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  selectedChoices: number[];
  displayedChoices: NestedAnswer[];
  allSelected: boolean;
}

export interface Answer {
  id: number;
  label: string;
  priority: number;
}

export interface NestedAnswer {
  idGroup: number;
  label: string;
  answers: Answer[];
  showGroupOnly: boolean;
}

export class DriverSurveyChoices {
  surveyDriverId: number;
  questionPriority: QuestionPriority[];
  answers: number[];
}

export class QuestionPriority {
  id: number;
  priority: number;
  label: string;
}

export enum QuestionType {
  DEVELOPMENT = "DEVELOPMENT",
  CHOICE = "CHOICE",
  NESTEDCHOICE = "NESTEDCHOICE"
}

export enum QuestionDataType {
  DATE,
  STRING,
  NUMBER,
  BOOLEAN,
}