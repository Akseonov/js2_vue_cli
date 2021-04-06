'use strict';

function isToken(token) {
 if (token) {
   return {
     'Content-Type': 'application/json',
     'Authorization':  'Bearer ' + token,
   }
 } else {
   return {
     'Content-Type': 'application/json',
   }
 }
}

export let getItems = function(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers(isToken(token)),
  })
    .then(items => items.json())
};

export let postItem = function (url, item, token) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers(isToken(token)),
    body: JSON.stringify(item),
  })
    .then(status => status.json());
};

export let putItem = function (url, amount, token) {
  return fetch(url, {
    method: 'PUT',
    headers: new Headers(isToken(token)),
    body: JSON.stringify({ amount }),
  })
    .then(status => status.json());
};

export let deleteItem = function (url, amount, token) {
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers(isToken(token)),
    body: JSON.stringify({ amount }),
  })
    .then(status => status.json());
};

export let postUser = function (url, user) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(user),
  })
    .then(status => status.json());
};

export let getUser = function (url, token) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers(isToken(token)),
  })
    .then(user => user.json());
};