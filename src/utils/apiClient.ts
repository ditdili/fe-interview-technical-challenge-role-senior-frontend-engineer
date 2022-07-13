import axios from 'axios';

const policyholdersApi = axios.create({
  baseURL:
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getPolicyholders = async () => {
  const response = await policyholdersApi.get('/api/policyholders');

  return response.data;
};
