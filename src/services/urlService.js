import api from './axiosApi';

async function getUserUrls(config) {
  const token = "Bearer " + config.token;
  const headers = {
    headers: {
      'Authorization': `${token}`,
      'user': `${config.userId}`
    }
  };
  const request = await api.get('urls', headers)
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
  const headers = {
    headers: {
      'Authorization': `${token}`,
      'user': `${config.userId}`
    }
  };
  const request = await api.post('urls/shorten', data, headers)
    .catch( error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
  return request;
}

async function deleteUrl(id, config) {
  const token = "Bearer " + config.token;
  const headers = {
    headers: {
      'Authorization': `${token}`,
      'user': `${config.userId}`
    }
  };
  const request = api.delete(`urls/${id}`, headers)
    .catch( error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
  console.log('Link encurtado deletado')
}

export {
  getUserUrls,
  postNewUrl,
  deleteUrl
};