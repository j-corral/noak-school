// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Footer as NoakFooter, FooterProps } from '@hoomies/noak.components.footer';

import Routes from '~config/routes/footer';

export function Footer(props: FooterProps) {
  const { t } = useTranslation();

  return (
    <>
      <NoakFooter routes={Routes} />
    </>
  );
}
