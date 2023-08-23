import '@/styles/globals.css';

import { AppContext, AppProps } from 'next/app';

import { MainLayout } from '@/components/layouts/MainLayout';

export default function MyApp({ pageProps, Component, router }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
