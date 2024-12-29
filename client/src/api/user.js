import api from './api';

function getUsers() {
  return api.get('/users');
}
function updateOrCreateUser(data, newDate, id) {
  if (id) {
    data.updatedAt = newDate;
    return api.put('/users/' + id, data);
  } else {
    data.createdAt = newDate;
    data.updatedAt = newDate;
    return api.post('/users', data);
  }
}
function deleteUser(id) {
  return api.del('/users/' + id);
}
export default { getUsers, updateOrCreateUser, deleteUser };
