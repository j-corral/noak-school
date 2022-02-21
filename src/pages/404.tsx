import React from 'react';
import { Heading } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

import { Hero } from '@hoomies/unagui.components.hero';
import { Capitalize } from '@hoomies/fuel.functions.capitalize';

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <Hero title="404" section={{ h: '75vh', bgColor: 'transparent', direction: 'column' }}>
        <Heading as="h1" color="gray.500" fontSize="3xl">
          <Capitalize>{t('msg:error.notFound')}</Capitalize>
        </Heading>
      </Hero>
    </>
  );
}
