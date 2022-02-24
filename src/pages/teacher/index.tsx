import type { NextPage } from '@hoomies/noak.types.next';
import useTranslation from 'next-translate/useTranslation';
import { Text } from '@chakra-ui/react';

const Teacher: NextPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Text>Teacher</Text>
    </>
  );
};

export default Teacher;
