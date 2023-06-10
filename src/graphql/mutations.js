/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmailMessage = /* GraphQL */ `
  mutation CreateEmailMessage(
    $input: CreateEmailMessageInput!
    $condition: ModelEmailMessageConditionInput
  ) {
    createEmailMessage(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailMessage = /* GraphQL */ `
  mutation UpdateEmailMessage(
    $input: UpdateEmailMessageInput!
    $condition: ModelEmailMessageConditionInput
  ) {
    updateEmailMessage(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailMessage = /* GraphQL */ `
  mutation DeleteEmailMessage(
    $input: DeleteEmailMessageInput!
    $condition: ModelEmailMessageConditionInput
  ) {
    deleteEmailMessage(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
