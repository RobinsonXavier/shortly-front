import api from './axiosApi';

async function getUserUrls(config) {
  const token = "Bearer " + config.token;
  const request = api.get(`urls`, {
    Authorization: {
      token
    }
  })
    .catch( error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
  return request.data;
}

async function postNewUrl(data, config) {
  const token = "Bearer " + config.token;
  const request = api.post('urls/shorten', data, {
    Authorization: {
      token
    }
  })
    .catch( error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
  return request;
}


export {
  getUserUrls,
  postNewUrl
};