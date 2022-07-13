import axios from 'axios';
import { PolicyHolder } from './policyholdersHelpers';

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

export const postPolicyholder = async (data: PolicyHolder) => {
  const response = await policyholdersApi.post('/api/policyholders', data);

  return response.data;
};
