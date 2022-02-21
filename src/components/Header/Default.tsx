// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React, { useMemo } from 'react';
import NextImage from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@chakra-ui/react';

import { Header as NoakHeader, HeaderProps } from '@hoomies/unagui.components.header';
import { LocaleSwitcher } from '@hoomies/noak.components.switcher.locale';
import { ThemeSwitcher } from '@hoomies/noak.components.switcher.theme';
import { Menu } from '@hoomies/noak.components.navigation.menu';

import { getRoute } from '~config/routes';
import HeaderRoutes from '~config/routes/header';
import Logo from '~public/logo.svg';

import { useRouter } from 'next/router';

export function Header(props: HeaderProps) {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  const label = t('menu:lang.text');

  const logo = useMemo(
    () => (
      <Box>
        <NextImage src={Logo} width="50px" height="80px" alt="logo" />
      </Box>
    ),
    [],
  );
  const menu = useMemo(() => <Menu routes={HeaderRoutes} />, []);

  const themeSwitcher = useMemo(() => <ThemeSwitcher />, []);

  const localeSwitcher = useMemo(() => {
    const route = getRoute(asPath);
    if (typeof route === 'object') {
      return <LocaleSwitcher route={route} label={label} variant="outline" />;
    }
    return <LocaleSwitcher label={label} variant="outline" />;
  }, [asPath, label]);

  return (
    <>
      <NoakHeader logo={logo} menu={menu} p="0 2rem" {...props}>
        {localeSwitcher}
        {themeSwitcher}
      </NoakHeader>
    </>
  );
}
