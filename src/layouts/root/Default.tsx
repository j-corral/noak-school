// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RootLayout as NoakRootLayout, RootLayoutProps } from '@hoomies/noak.layouts.root';

export function RootLayout(props: RootLayoutProps) {
  return (
    <>
      <NoakRootLayout header={<Header />} footer={<Footer />} {...props}>
        {props.children}
      </NoakRootLayout>
    </>
  );
}
