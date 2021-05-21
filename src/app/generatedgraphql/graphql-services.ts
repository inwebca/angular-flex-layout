import * as Types from './graphql-types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
export type GetDriverSurveyQueryVariables = Types.Exact<{
  surveyDriverId: Types.Scalars['Int'];
  languageId: Types.Scalars['Int'];
}>;


export type GetDriverSurveyQuery = (
  { __typename?: 'Query' }
  & { driverSurvey?: Types.Maybe<(
    { __typename?: 'DriverSurvey' }
    & Pick<Types.DriverSurvey, 'surveyDriverId'>
    & { questions?: Types.Maybe<Array<(
      { __typename?: 'Choice' }
      & Pick<Types.Choice, 'multipleAnswer' | 'selectedChoices' | 'id' | 'title' | 'label' | 'requiredSequence' | 'questionType'>
      & { displayedChoices?: Types.Maybe<Array<(
        { __typename?: 'DisplayedChoice' }
        & Pick<Types.DisplayedChoice, 'id' | 'label' | 'priority'>
      )>> }
    ) | (
      { __typename?: 'Development' }
      & Pick<Types.Development, 'questionDataType' | 'selectedChoice' | 'id' | 'title' | 'label' | 'requiredSequence' | 'questionType'>
    ) | (
      { __typename?: 'NestedChoice' }
      & Pick<Types.NestedChoice, 'allSelected' | 'selectedChoices' | 'id' | 'title' | 'label' | 'requiredSequence' | 'questionType'>
      & { displayedChoices?: Types.Maybe<Array<(
        { __typename?: 'NestedDisplayedChoice' }
        & Pick<Types.NestedDisplayedChoice, 'idGroup' | 'label' | 'showGroupOnly'>
        & { choices?: Types.Maybe<Array<(
          { __typename?: 'DisplayedChoice' }
          & Pick<Types.DisplayedChoice, 'id' | 'label' | 'priority'>
        )>> }
      )>> }
    )>> }
  )> }
);

export type GetDriverSurveysQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDriverSurveysQuery = (
  { __typename?: 'Query' }
  & { driverSurveysSearch?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'DriverSurvey' }
    & Pick<Types.DriverSurvey, 'surveyDriverId' | 'labelDate' | 'labelDay'>
  )>>> }
);

export const GetDriverSurveyDocument = gql`
    query GetDriverSurvey($surveyDriverId: Int!, $languageId: Int!) {
  driverSurvey(surveyDriverId: $surveyDriverId, languageId: $languageId) {
    surveyDriverId
    questions {
      id
      title
      label
      requiredSequence
      questionType
      ... on Development {
        questionDataType
        selectedChoice
      }
      ... on Choice {
        multipleAnswer
        selectedChoices
        displayedChoices {
          id
          label
          priority
        }
      }
      ... on NestedChoice {
        allSelected
        selectedChoices
        displayedChoices {
          idGroup
          label
          showGroupOnly
          choices {
            id
            label
            priority
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDriverSurveyGQL extends Apollo.Query<GetDriverSurveyQuery, GetDriverSurveyQueryVariables> {
    document = GetDriverSurveyDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDriverSurveysDocument = gql`
    query GetDriverSurveys {
  driverSurveysSearch {
    surveyDriverId
    labelDate
    labelDay
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDriverSurveysGQL extends Apollo.Query<GetDriverSurveysQuery, GetDriverSurveysQueryVariables> {
    document = GetDriverSurveysDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V>
    extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

  interface QueryOptionsAlone<V>
    extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

  interface MutationOptionsAlone<T, V>
    extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

  interface SubscriptionOptionsAlone<V>
    extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class GriGraphqlService {
    constructor(
      private getDriverSurveyGql: GetDriverSurveyGQL,
      private getDriverSurveysGql: GetDriverSurveysGQL
    ) {}

    getDriverSurvey(variables: GetDriverSurveyQueryVariables, options?: QueryOptionsAlone<GetDriverSurveyQueryVariables>) {
      return this.getDriverSurveyGql.fetch(variables, options)
    }

    getDriverSurveyWatch(variables: GetDriverSurveyQueryVariables, options?: WatchQueryOptionsAlone<GetDriverSurveyQueryVariables>) {
      return this.getDriverSurveyGql.watch(variables, options)
    }

    getDriverSurveys(variables?: GetDriverSurveysQueryVariables, options?: QueryOptionsAlone<GetDriverSurveysQueryVariables>) {
      return this.getDriverSurveysGql.fetch(variables, options)
    }

    getDriverSurveysWatch(variables?: GetDriverSurveysQueryVariables, options?: WatchQueryOptionsAlone<GetDriverSurveysQueryVariables>) {
      return this.getDriverSurveysGql.watch(variables, options)
    }
  }
