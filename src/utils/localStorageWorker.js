const localStorageWorker = {
  getItem: function (key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setItem: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export default localStorageWorker;
