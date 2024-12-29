const endpoint = 'http://localhost:3030/jsonstore';

async function fetchData(url, options) {
  try {
    const response = await fetch(endpoint + url, options);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    if (response.status == 204) {
      return response;
    }
    return response.json();
  } catch (error) {
    throw error.message;
  }
}
function createOptions(method = 'GET', data) {
  const result = {
    method,
    headers: {},
  };
  if (data) {
    result.headers['Content-Type'] = 'application/json';
    result.body = JSON.stringify(data);
  }
  return result;
}
function get(url) {
  return fetchData(url);
}
function post(url, data) {
  return fetchData(url, createOptions('POST', data));
}
function put(url, data) {
  return fetchData(url, createOptions('PUT', data));
}
function del(url) {
  return fetchData(url, createOptions('DELETE'));
}
export default { get, post, put, del };
