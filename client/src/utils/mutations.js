import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $pasword
    ) {
      token
      user {
        _id
      }
    }
  }
`;
