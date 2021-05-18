export class Step {
    questionId: number;
    label: string;
    questionType: string;
    questionIsMultiple: boolean;
    priority: number;
    index: number;
  }

export interface ISurvey {
    id: number,
    days: string,
    date: string
}

export interface IDriverSurvey {
    surveyDriverId: number;
    driverEmployeId: number;
    startDate: string;
    endDate: string;
    label: string;
    hasGrief: boolean;
    questions: IQuestion[];
}

export interface IQuestion {
    id: number;
    label: string;
    multipleanswer: boolean;
    priority: number;
    questionType: string;
}

export interface IDate extends IQuestion {
  id: number;
  label: string;
  priority: number;
  questionType: string;
  date?: Date;
}

export interface IChoice extends IQuestion {
    id: number;
    label: string;
    multipleanswer: boolean;
    priority: number;
    questionType: string;
    selectedAnswers: number[];
    displayedAnswers: Answer[];
}

export interface INestedChoice extends IQuestion {
    id: number;
    label: string;
    multipleanswer: boolean;
    priority: number;
    questionType: string;
    selectedAnswers: number[];
    displayedAnswers: NestedAnswer[];
}


export interface DateType {
  id: number;
  label: string;
  priority: number;
  questionType: string;
}

export interface Answer {
    id: number;
    label: string;
    priority: number;
    questionType: string;
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
