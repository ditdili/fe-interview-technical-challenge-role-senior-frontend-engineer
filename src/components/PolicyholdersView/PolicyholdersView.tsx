import { Box, Button } from '@mui/material';
import { useMutation, useQuery } from 'react-query';
import { getPolicyholders, postPolicyholder } from '../../utils/apiClient';
import {
  mockPostData,
  policyholdersKeyValueGenerator,
} from '../../utils/policyholdersHelpers';
import InfoTable from '../InfoTable';

const PolicyholdersView = () => {
  const { isLoading, isError, error, data } = useQuery(
    'policyholders',
    getPolicyholders
  );

  const addPolicyHolderMutation = useMutation(postPolicyholder, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handlePostPolicyholder = () => {
    addPolicyHolderMutation.mutate(mockPostData);
  };

  if (isLoading) return <Box>Loading...</Box>;
  if (isError && error instanceof Error) return <Box>{error.message}</Box>;

  const policyHoldersKeyValues = policyholdersKeyValueGenerator(
    data.policyHolders
  );

  return (
    <Box sx={{ textAlign: 'center' }}>
      <InfoTable header="Policy Holder" rows={policyHoldersKeyValues[0]} />

      <Button
        sx={{ my: 2 }}
        onClick={() => handlePostPolicyholder()}
        variant="contained"
        color="primary"
        size="large"
      >
        Add a policyholder
      </Button>
    </Box>
  );
};

export default PolicyholdersView;
