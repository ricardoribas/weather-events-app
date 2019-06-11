

export default function executeRequest(method, path, params = {}, body) {
  return fetch(`http://localhost:4000/api/events/${path}?${getParams(params)}`, {
    method,
    body
  })
    .then(response => response.json())
    .catch((err) => {
      throw err;
    });
}
