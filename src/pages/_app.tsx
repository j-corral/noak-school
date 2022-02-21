import React from 'react';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { AppProps as CustomAppProps } from '@hoomies/noak.types.next';
import { PageLayout as DefaultPageLayout } from '@hoomies/noak.layouts.page.default';

import RootLayout from '@/layouts/root';
import theme from '@/theme';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const PageLayout = React.useMemo(() => {
    return Component.pageLayout ?? DefaultPageLayout;
  }, [Component.pageLayout]);

  return (
    <Wrapper resetCSS={true} theme={theme}>
      <RootLayout {...Component.rootProps}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </RootLayout>
    </Wrapper>
  );
}

export default MyApp;
