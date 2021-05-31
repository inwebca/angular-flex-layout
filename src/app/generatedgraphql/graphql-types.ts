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

export interface DriverSurveyChoices {
  surveyDriverId: Scalars['Int'];
  questionPriority?: Maybe<Array<Maybe<QuestionPriority>>>;
  selectedDevelopmentChoice?: Maybe<Array<Maybe<SelectedDevelopmentChoice>>>;
  selectedChoices?: Maybe<Array<Maybe<Scalars['Int']>>>;
}

export interface DriverSurveySearchCriteria {
  managerEmployeId?: Maybe<Scalars['Int']>;
  driverEmployeId?: Maybe<Scalars['Int']>;
  surveyId?: Maybe<Scalars['Int']>;
  surveyStatus?: Maybe<SurveyStatus>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
}

export interface Drop {
  __typename?: 'Drop';
  number: Scalars['Int'];
  appointmentTime: Scalars['String'];
  clientAddress: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Save a specific survey */
  driverSurvey?: Maybe<DriverSurvey>;
}


export interface MutationDriverSurveyArgs {
  surveyChoices: DriverSurveyChoices;
  languageId: Scalars['Int'];
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
  /** Get survey state */
  driverSurveyState?: Maybe<SurveyState>;
  /** Get a list of surveys */
  driverSurveysSearch?: Maybe<Array<Maybe<DriverSurvey>>>;
  /** Get a specific survey */
  driverSurvey?: Maybe<DriverSurvey>;
  /** Get the trips surveys based on survey choices */
  tripsSurveys?: Maybe<Array<Maybe<TripsSurveys>>>;
  /** Get a list of suggested trips */
  suggestedTrips?: Maybe<Array<Maybe<Trip>>>;
  /** Get the trips details */
  tripDetails?: Maybe<TripDetails>;
}


export interface QueryDriverSurveyStateArgs {
  driverEmployeId: Scalars['Int'];
}


export interface QueryDriverSurveysSearchArgs {
  criteria: DriverSurveySearchCriteria;
  languageId: Scalars['Int'];
}


export interface QueryDriverSurveyArgs {
  surveyDriverId: Scalars['Int'];
  languageId: Scalars['Int'];
}


export interface QueryTripsSurveysArgs {
  driverEmployeId: Scalars['Int'];
  surveyId: Scalars['Int'];
  languageId: Scalars['Int'];
}


export interface QuerySuggestedTripsArgs {
  driverEmployeId: Scalars['Int'];
  surveyId: Scalars['Int'];
  languageId: Scalars['Int'];
}


export interface QueryTripDetailsArgs {
  tripId: Scalars['Int'];
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

export interface QuestionPriority {
  id: Scalars['Int'];
  priority: Scalars['Int'];
}

export enum QuestionType {
  Development = 'DEVELOPMENT',
  Choice = 'CHOICE',
  Nestedchoice = 'NESTEDCHOICE'
}

export interface SelectedDevelopmentChoice {
  id: Scalars['Int'];
  selectedChoice: Scalars['String'];
}

export interface SurveyState {
  __typename?: 'SurveyState';
  state?: Maybe<SurveyStates>;
}

export enum SurveyStates {
  Survey = 'SURVEY',
  Trips = 'TRIPS'
}

export enum SurveyStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  EngineProcessed = 'ENGINE_PROCESSED',
  Attributed = 'ATTRIBUTED',
  Canceled = 'CANCELED'
}

export interface Trip {
  __typename?: 'Trip';
  id: Scalars['Int'];
  destination: Scalars['String'];
  deptHour: Scalars['String'];
  milage: Scalars['Int'];
  firstRdv: Scalars['String'];
  type: Scalars['String'];
}

export interface TripDetails {
  __typename?: 'TripDetails';
  tripId: Scalars['Int'];
  departureDay: Scalars['String'];
  hasDangerousGoods?: Maybe<Scalars['Boolean']>;
  drops?: Maybe<Array<Maybe<Drop>>>;
}

export interface TripsSurveys {
  __typename?: 'TripsSurveys';
  surveyId: Scalars['Int'];
  labelDay: Scalars['String'];
  title?: Maybe<Scalars['String']>;
}

