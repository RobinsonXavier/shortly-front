import api from './axiosApi';

async function createAccount(data) {
  const request = api.post('signup', data)
    .catch( error => {
      return {
      message: error.message,
      status: error.status
      }
  });
  
    return request;
};

export default createAccount;