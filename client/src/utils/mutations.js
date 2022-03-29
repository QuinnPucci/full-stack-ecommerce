import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($billingFirstName: String!, $billingLastName: String!, $username: String!, $email: String!, $password: String! ) {
    addUser(
      billingFirstName: $billingFirstName
      billingLastName: $billingLastName
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
        billingFirstName
        billingLastName
        email
        username
      }
    }
  }
`;

// Used by the user to delete his own account. The user's ID is automatically fetched by the resolver function
export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      _id
    }
  }
`;

// Update a user. The user's ID is automatically detected by the resolver function.
// Note: As of now, passwords updated by this function don't get encrypted by bcrypt
export const UPDATE_USER = gql`
  mutation updateUser(
    $email: String, 
    $billingFirstName: String,
    $billingLastName: String,
    $shippingAddress: String,
    $shippingCity: String,
    $shippingProvince: String,
    $shippingPostalCode: String,
    $password: String
    ) {
    updateUser (
      email: $email,
      billingFirstName: $billingFirstName,
      billingLastName: $billingLastName,
      shippingAddress: $shippingAddress,
      shippingCity: $shippingCity,
      shippingProvince: $shippingProvince,
      shippingPostalCode: $shippingPostalCode,
      password: $password
      ) {
      _id
      username
      email
      billingFirstName
      billingLastName
      shippingAddress
      shippingCity
      shippingProvince
      shippingPostalCode
    }
  }
`;

// Place/Add an order
export const ADD_ORDER = gql`
mutation AddOrder($products: [ProductInput]!) {
  addOrder(products: $products) {
    _id
    purchaseDate
    products {
      _id
      name
    }
  }
}
`;

// Remove a product
export const REMOVE_PRODUCT = gql`
mutation RemoveProduct($id: ID!) {
  removeProduct(_id: $id) {
    _id
  }
}
`;
