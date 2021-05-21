export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export interface Choice extends Question {
  __typename?: 'Choice';
  id: Scalars['Int'];
  title: Scalars['String'];
  label: Scalars['String'];
  requiredSequence?: Maybe<Scalars['Int']>;
  questionType: QuestionType;
  multipleAnswer: Scalars['Boolean'];
  selectedChoices?: Maybe<Array<Maybe<Scalars['Int']>>>;
  displayedChoices?: Maybe<Array<DisplayedChoice>>;
}

export interface Development extends Question {
  __typename?: 'Development';
  id: Scalars['Int'];
  title: Scalars['String'];
  label: Scalars['String'];
  requiredSequence?: Maybe<Scalars['Int']>;
  questionType: QuestionType;
  questionDataType: QuestionDataType;
  selectedChoice?: Maybe<Scalars['String']>;
}

export interface DisplayedChoice {
  __typename?: 'DisplayedChoice';
  id: Scalars['Int'];
  label: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
}

export interface DriverSurvey {
  __typename?: 'DriverSurvey';
  surveyDriverId: Scalars['Int'];
  driverEmployeeId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  labelDate?: Maybe<Scalars['String']>;
  labelDay?: Maybe<Scalars['String']>;
  hasGrief?: Maybe<Scalars['Boolean']>;
  questions?: Maybe<Array<Question>>;
}

export interface NestedChoice extends Question {
  __typename?: 'NestedChoice';
  id: Scalars['Int'];
  title: Scalars['String'];
  label: Scalars['String'];
  requiredSequence?: Maybe<Scalars['Int']>;
  questionType: QuestionType;
  allSelected: Scalars['Boolean'];
  selectedChoices?: Maybe<Array<Maybe<Scalars['Int']>>>;
  displayedChoices?: Maybe<Array<NestedDisplayedChoice>>;
}

export interface NestedDisplayedChoice {
  __typename?: 'NestedDisplayedChoice';
  idGroup: Scalars['Int'];
  label: Scalars['String'];
  choices?: Maybe<Array<DisplayedChoice>>;
  showGroupOnly?: Maybe<Scalars['Boolean']>;
}

export interface Query {
  __typename?: 'Query';
  driverSurveysSearch?: Maybe<Array<Maybe<DriverSurvey>>>;
  driverSurvey?: Maybe<DriverSurvey>;
}


export interface QueryDriverSurveyArgs {
  surveyDriverId: Scalars['Int'];
  languageId: Scalars['Int'];
}

export interface Question {
  id: Scalars['Int'];
  title: Scalars['String'];
  label: Scalars['String'];
  requiredSequence?: Maybe<Scalars['Int']>;
  questionType: QuestionType;
}

export enum QuestionDataType {
  Date = 'DATE',
  String = 'STRING',
  Number = 'NUMBER',
  Boolean = 'BOOLEAN'
}

export enum QuestionType {
  Development = 'DEVELOPMENT',
  Choice = 'CHOICE',
  Nestedchoice = 'NESTEDCHOICE'
}

