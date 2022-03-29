import { gql } from "@apollo/client";

// Query list of product categories
export const CATEGORIES = gql`
    query Categories {
        categories {
            _id
            name
        }
    }
`;

// Can query products by its ID, name or category ID
// Entering no parameters can fetch all products
export const PRODUCTS = gql`
query Products($id: ID, $name: String, $category: ID ) {
  products(_id: $id, name: $name, category: $category,) {
    _id
    name
    description
    image
    price
    quantity
    category {
      _id
      name
    }
  }
}
`;

// Query all products
export const ALL_PRODUCTS = gql`
    query Products {
        products {
        _id
        name
        description
        image
        price
        quantity
        category {
            _id
            name
            }
        }
    }
`;

// Query All orders
export const ALL_ORDERS = gql`
query {
    orders {
      _id
      purchaseDate
      products {
        name
        description
        image
        price
        quantity
        category {
          _id
          name
        }
      }
    }
  }
`;

// Query an order by its ID
export const ORDER = gql`
query findOrder($id: ID!) {
  findOrder(_id: $id) {
    _id
    purchaseDate
    products {
      name
      description
      image
      price
      quantity
      category {
        _id
        name
      }
    }
  }
}
`;

// Query a user by his ID
export const USER = gql`
query findUser ($_id: ID!) {
  findUser( _id: $_id) {
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