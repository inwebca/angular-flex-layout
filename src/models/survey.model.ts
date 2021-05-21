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
  surveyDriverId: number;
  driverEmployeeId: number;
  startDate: string;
  endDate: string;
  labelDate: string;
  labelDay: string;
  hasGrief: boolean;
  questions: IQuestion[];
}


export interface IQuestion {
  id: number;
  title: string;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
}

export interface IDevelopment extends IQuestion {
  id: number;
  title: string;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  questionDataType: QuestionDataType;
  selectedChoice: string;
}

export interface IChoice extends IQuestion {
  id: number;
  title: string;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  multipleAnswer: boolean;
  selectedChoices: number[];
  displayedChoices: DisplayedChoice[];
}

export interface INestedChoice extends IQuestion {
  id: number;
  title: string;
  label: string;
  requiredSequence: number;
  questionType: QuestionType;
  allSelected: boolean;
  selectedChoices: number[];
  displayedChoices: NestedDisplayedChoice[];
}

export interface DisplayedChoice {
  id: number;
  label: string;
  priority: number;
}

export interface NestedDisplayedChoice {
  idGroup: number;
  label: string;
  choices: DisplayedChoice[];
  showGroupOnly: boolean;
}

export class DriverSurveyChoices {
  surveyDriverId: number;
  questionPriority: QuestionPriority[];
  answers: number[];
  developmentAnswers: DevelopmentAnswer[];
}

export class QuestionPriority {
  id: number;
  requiredSequence: number;
  label: string;
}

export class DevelopmentAnswer {
  id: number;
  selectedChoice: string;
}

export enum QuestionType {
  DEVELOPMENT = 'DEVELOPMENT',
  CHOICE = 'CHOICE',
  NESTEDCHOICE = 'NESTEDCHOICE'
}

export enum QuestionDataType {
  DATE = 'DATE',
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
}
