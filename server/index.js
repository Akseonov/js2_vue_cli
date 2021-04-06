const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const writer = require('./utils/writer.js');
const cart = require('./services/cart.js');
const catalog = require('./services/catalog');
const account = require('./services/account.js');

const server = express();
server.use(express.json());

const saltRounds = 10;

const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever',
  algorithms: ['HS256'],
  credentialsRequired: false,
});

// Когда проект полностью готов
// server.use('/', express.static('server/public'));

server.post('/register', (req, res) => {
  fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
    if (!err) {
      let newUser = account.add(JSON.parse(data), req.body, bcrypt.hashSync(req.body.password, saltRounds));
      if (newUser) {
        writer('./server/db/users.json', newUser)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      } else {
        res.sendStatus(500);
      }
    }
  });
});

server.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error on the server.');
    }
    const user = JSON.parse(data).find(user => user.username === username);
    if (!user) {
      return res.status(404).send('User not found.');
    }
    let passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        token: null,
        err: 'Password is incorrect' });
    }
    let token = jwt.sign(
      { id: user.id, username: user.username },
      'keyboard cat 4 ever',
      { expiresIn: /*129600*/ 60 }
    );
    res.json({
      auth: true,
      token,
      err: null,
      user: {
        id: user.id,
        username: user.username,
      }
    });
  });
});

server.get('/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      if (req.query.filter) {
        const filterCatalog = catalog.filterItems(JSON.parse(data), req.query.filter);
        const elseCatalog = catalog.giveItem(filterCatalog, req.query.count, req.query.page);
        res.json(elseCatalog);
      } else {
        const newCatalog = catalog.giveItem(JSON.parse(data), req.query.count, req.query.page);
        res.json(newCatalog);
      }
    }
  });
});

server.get('/catalog/:id', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      const item = catalog.findItem(JSON.parse(data), req.params.id);
      res.json(item);
    }
  });
});

server.get('/catalog?inquiry', (req,res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      const items = catalog.filterItems(JSON.parse(data), req.query.inquiry);
      res.json(items);
    }
  })
});

server.get('/cart', jwtMW, (req, res) => {
  if (req.headers.authorization) {
    fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
      let user = JSON.parse(data).find(user => +user.id === 2);
      if (!err) {
        res.json(user.cart);
      }
    });
  } else {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
        res.json(JSON.parse(data));
      }
    });
  }
});

server.post('/cart', jwtMW, (req, res) => {
  if (req.headers.authorization) {
    fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
      if (!err) {
        let users = JSON.parse(data);
        let user = users.find(user => +user.id === 2);
        cart.add(user.cart, req.body);
        writer('./server/db/users.json', users)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  } else {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
        let newCart = cart.add(JSON.parse(data), req.body);
        writer('./server/db/cart.json', newCart)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  }

});

server.put('/cart/:id', jwtMW, (req, res) => {
  if (req.headers.authorization) {
    fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
      if (!err) {
        let users = JSON.parse(data);
        let user = users.find(user => +user.id === 2);
        cart.change(user.cart, req.params.id, req.body.amount);
        writer('./server/db/users.json', users)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  } else {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
        let newCart = cart.change(JSON.parse(data), req.params.id, req.body.amount);
        writer('./server/db/cart.json', newCart)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  }
});

server.delete('/cart/:id', jwtMW, (req, res) => {
  if (req.headers.authorization) {
    fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
      if (!err) {
        let users = JSON.parse(data);
        let user = users.find(user => +user.id === 2);
        cart.del(user.cart, req.params.id, req.body.amount);
        writer('./server/db/users.json', users)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  } else {
    fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
        let newCart = cart.del(JSON.parse(data), req.params.id, req.body.amount);
        writer('./server/db/cart.json', newCart)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          })
      }
    });
  }
});

server.post('/rating', jwtMW, (req, res) => {
  if (req.headers.authorization) {
    fs.readFile('./server/db/users.json', 'utf-8', (err, data) => {
      if (!err) {
        let obj = {
          product_id: req.body.product_id,
          rating: req.body.rating,
        };
        let users = JSON.parse(data);
        let user = users.find(user => +user.id === 2);
        let rating = user.rating.find(el => +el.product_id === +req.body.product_id);
        if (rating) {
          rating.product_id = req.body.product_id;
          rating.rating = req.body.rating;
        } else {
          user.rating.push(obj);
        }
        writer('./server/db/users.json', users)
          .then(status => {
            if (!status) {
              res.sendStatus(500);
            }
          });
      }
    });
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
      if (!err) {
        let obj = {
          user_id: +req.body.user_id,
          rating: req.body.rating,
        };
        let catalog = JSON.parse(data);
        let item = catalog.find(item => +item.id === +req.body.product_id);
        let el = item.rating.appraisals.find(el => +el.user_id === +req.body.user_id);
        if (el) {
          el.user_id = +req.body.user_id;
          el.rating = req.body.rating;
        } else {
          item.rating.appraisals.push(obj);
        }
        let sum = item.rating.appraisals.reduce((sum, current) => {
          return sum + current.rating;
        }, 0);
        item.rating.total_rating = sum / item.rating.appraisals.length;
        fs.readFile('./server/db/users.json', 'utf-8', (err, dataOne) => {
          if (!err) {
            let users = JSON.parse(dataOne);
            let user = users.find(user => +user.id === 2);
            let product = user.cart.contents.find(el => +el.product_id === +req.body.product_id);
            product.rating = sum / item.rating.appraisals.length;
            writer('./server/db/users.json', users)
              .then(status => {
                if (!status) {
                  res.sendStatus(500);
                }
              });
          }
        });
        fs.readFile('./server/db/cart.json', 'utf-8', (err, dataOne) => {
          if (!err) {
            let cart = JSON.parse(dataOne);
            let product = cart.contents.find(el => +el.product_id === +req.body.product_id);
            if (product) {
              product.rating = sum / item.rating.appraisals.length;
              writer('./server/db/cart.json', cart)
                .then(status => {
                  if (!status) {
                    res.sendStatus(500);
                  }
                });
            }
          }
        });
        writer('./server/db/catalog.json', catalog)
          .then(status => {
            if (status) {
              res.json({status});
            } else {
              res.sendStatus(500);
            }
          });
      }
    });
  } else {
    res.status(401).send({error: 'Вы должны войти в систему'});
  }
});

server.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

server.listen(3000, () => {
  console.log('SERVER AT PORT 3000');
});