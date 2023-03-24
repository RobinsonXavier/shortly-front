import api from './axiosApi';

function login(data) {
  const request = api.post('signin', data)
    .catch( error => {
      console.log(error)
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
    return request;
};

export default login;