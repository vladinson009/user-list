import api from './api';

function getUsers() {
  return api.get('/users');
}
function updateOrCreateUser(data, id, newDate) {
  if (id) {
    data.updatedAt = newDate;
    return api.put('/users/' + id, data);
  } else {
    data.createdAt = newDate;
    return api.post('/users', data);
  }
}

export default { getUsers, updateOrCreateUser };
