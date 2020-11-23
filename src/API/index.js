import axios from './axios';

const get = async (url, token) => {
  try {
    let config = '';
    if (token) {
      config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
    const response = await axios.get(url, config);

    return response;
  } catch (err) {
    throw err;
  }
};

const Delete = async (url, token) => {
  try {
    let config = '';
    if (token) {
      config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
    const response = await axios.delete(url, config);

    return response;
  } catch (err) {
    throw err;
  }
};

const put = async (url, data, token) => {
  try {
    let config = '';
    if (token) {
      config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
    return axios.put(url, data, config);
  } catch (err) {
    throw err;
  }
};

const patch = async (url, data, token) => {
  try {
    let config = '';
    if (token) {
      config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
    return axios.patch(url, data, config);
  } catch (err) {
    throw err;
  }
};
const post = async (url, data, token) => {
  try {
    let config = '';
    if (token) {
      config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      };
    }
    return axios.post(url, data, config);
  } catch (err) {
    throw err;
  }
};

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    if (response) {
      if (response.status !== 200) {
        // Todo: here goes the error handler
      }
      return response;
    }
    return Promise.reject(error);
  }
);
export default {
  get,
  post,
  put,
  patch,
  Delete
};
