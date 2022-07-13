import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { getPolicyholders } from '../../utils/apiClient';

const PolicyholdersView = () => {
  const { isLoading, isError, error, data } = useQuery(
    'policyholders',
    getPolicyholders
  );

  if (isLoading) return <Box>Loading...</Box>;
  if (isError && error instanceof Error) return <Box>{error.message}</Box>;

  console.log(data);

  return null;
};

export default PolicyholdersView;
