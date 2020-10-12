const ACCESS_TOKEN = "ACCESS_TOKEN";

const _setToken = function (token) {
  localStorage.setItem(ACCESS_TOKEN, token);
};

const _getToken = function () {
  return localStorage.getItem(ACCESS_TOKEN);
};

const _removeToken = function () {
  localStorage.removeItem(ACCESS_TOKEN);
};

const _getRole = function () {
  if (_getToken()) {
    return "user";
  }
  return "guest";
};

export default {
  setToken: _setToken,
  getToken: _getToken,
  removeToken: _removeToken,
  getRole: _getRole,
};
