import api from './axiosApi';

async function statusUpdate(config) {
  const token = "Bearer " + config.token;
  const headers = {
    headers: {
      'Authorization': `${token}`,
      'user': `${config.userId}`
    }
  };
  const request = await api.post('status',{} , headers)
    .catch(error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  console.log('Atualizado!');
}

export default statusUpdate;