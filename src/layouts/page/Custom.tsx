import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export declare interface CustomLayoutProps {
  children?: React.ReactNode;
}

export default function CustomLayout(props: CustomLayoutProps) {
  return (
    <>
      <Text>Custom layout</Text>
      {props.children}
    </>
  );
}
