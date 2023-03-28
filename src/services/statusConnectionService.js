import api from './axiosApi';

async function statusUpdate(config) {
  const token = "Bearer " + config.token;
  const request = await api.put('status',config , {
    Authorization: {
      token 
    }
  })
    .catch(error => {
      return {
        message: error.response.data,
        status: error.response.status
      }
    });
  
  console.log('Atualizado!');
}

export default statusUpdate;