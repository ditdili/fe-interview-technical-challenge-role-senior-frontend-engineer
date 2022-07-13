type Address = {
  line1: string;
  line2: string | undefined;
  city: string;
  state: string;
  postalCode: string;
};

export type PolicyHolder = {
  name: string;
  age: number;
  address: Address;
  phoneNumber: string;
  isPrimary: boolean;
};

const keyValueDict: Record<string, string> = {
  name: 'Name',
  age: 'Age',
  address: 'Address',
  phoneNumber: 'Phone number',
  isPrimary: 'Primary policyholder?',
};
type Values = {
  address: string;
  isPrimary: string;
};

type KeyValueGeneratorReturn = {
  key: string;
  value: string | number;
};

const keyValueGenerator = (
  policyHolder: PolicyHolder,
  keyValue: string
): KeyValueGeneratorReturn => {
  const value = policyHolder[keyValue as keyof PolicyHolder];

  const values: Values = {
    address:
      typeof value === 'object'
        ? `${value.line1} ${value.line2}, ${value.city}, ${value.state} ${value.postalCode}`
        : '',
    isPrimary: value.toString(),
  };

  return {
    key: keyValueDict[keyValue],
    value: values[keyValue as keyof Values] || (value as string),
  };
};

export const policyholdersKeyValueGenerator = (
  policyHoldersArray: PolicyHolder[]
) => {
  const result = policyHoldersArray.map((policyHolder: PolicyHolder) => {
    return Object.keys(policyHolder).map((keyValue: string) => {
      return keyValueGenerator(policyHolder, keyValue);
    });
  });

  return result;
};

export const mockPostData: PolicyHolder = {
  name: 'Mr. Simpson',
  age: 39,
  address: {
    line1: '742 Evergreen Terrace',
    line2: '2',
    city: 'Springfield',
    state: 'NA',
    postalCode: '55555',
  },
  phoneNumber: '1-555-123-4567',
  isPrimary: true,
};
