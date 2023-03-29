import api from './axiosApi';

async function statusUpdate(config) {
  const token = "Bearer " + config.token;
  const request = await api.post('status',{} , {
    Authorization: {
      token 
    },
    user: {
      userId: config.userId
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