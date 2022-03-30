const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {

  // function for our authenticated routes
  authMiddleware: function({ req }) {
    // Allows token to be sent via req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Separate "Bearer" from "<tokenvalue>" so only the token is left
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    // If no token, return req object as is
    if (!token) {
        return req;
    }

    try {
        // Decode and attach user data to req object
        // This is where we check whether the request has a valid token
        // verifies whetehr the secret on the request matches the secret set in jwt.verify()
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log('Invalid token');
    }

    // Return updated req object
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
