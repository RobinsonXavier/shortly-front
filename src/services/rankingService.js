import api from './axiosApi';

async function getSortedRanking() {
  const request = await api.get('ranking')
    .catch( error => ({
      message: error.response.data,
      status: error.response.status
    }));

    if(request.data) {
      request.data.sort((user1, user2) => (user1.visitCount < user2.visitCount) ? 1 : (user1.visitCount > user2.visitCount) ? -1 : 0);
      return request.data;
    }

    return request;
};

export default getSortedRanking;