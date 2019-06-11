const getParams = query => Object.keys(query).map(k => `${k}=${query[k]}`).join('&');

export function executeRequest(method, path = '', params = {}, body) {
  return fetch(`http://localhost:4000/api/events/${path}?${getParams(params)}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
    .then(response => response.json())
    .catch((err) => {
      throw err;
    });
}
