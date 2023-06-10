/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmailMessage = /* GraphQL */ `
  query GetEmailMessage($id: ID!) {
    getEmailMessage(id: $id) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const listEmailMessages = /* GraphQL */ `
  query ListEmailMessages(
    $filter: ModelEmailMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
