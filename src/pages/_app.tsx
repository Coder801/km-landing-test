import '@/styles/index.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ComponentType } from 'react';

import { AppProvider } from '@/context/AppContext';

import Home from './home';

function MyApp({ Component, pageProps, router }: AppProps) {
  const routesMap: Record<string, ComponentType> = {
    '/': Home,
  };

  const PageComponent = routesMap[router.pathname] || Component;

  return (
    <AppProvider>
      <Head>
        <title>Pepe</title>
        <meta name="description" content="Pepe" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <PageComponent {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
