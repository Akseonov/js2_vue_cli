const jwt = require('jsonwebtoken');

function _search(arr, name) {
  return arr.find(item => item.username === name);
}

module.exports = {
  add(users, user, passwordHash) {
    if (_search(users, user.username)) {
      return false;
    } else {
      user.id = users.length + 1;
      user['cart'] = {
        "total": 0,
        "count": 0,
        "contents": [],
      };
      user.password = passwordHash;
      users.push(user);
      return users;
    }
  },
  //
  // check(token, res) {
  //   if (!token) {
  //     return res.status(401).send({ auth: false, message: 'No token provided.' });
  //   }
  //   jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
  //     if (err) {
  //       return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  //     }
  //     return res.status(200).send({ auth: true, decoded });
  //   });
  // },
  //
  // decode(token) {
  //   jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
  //     if (err) {
  //       return false;
  //     }
  //     return decoded;
  //   });
  // }
};
