import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { getPolicyholders } from '../../utils/apiClient';
import { policyholdersKeyValueGenerator } from '../../utils/policyholdersHelpers';
import InfoTable from '../InfoTable';

const PolicyholdersView = () => {
  const { isLoading, isError, error, data } = useQuery(
    'policyholders',
    getPolicyholders
  );

  if (isLoading) return <Box>Loading...</Box>;
  if (isError && error instanceof Error) return <Box>{error.message}</Box>;

  const policyHoldersKeyValues = policyholdersKeyValueGenerator(
    data.policyHolders
  );

  return (
    <Box sx={{ textAlign: 'center' }}>
      <InfoTable header="Policy Holder" rows={policyHoldersKeyValues[0]} />
    </Box>
  );
};

export default PolicyholdersView;
