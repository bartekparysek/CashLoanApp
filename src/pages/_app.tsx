import '../styles/tailwind.css';

import { AppProps } from 'next/app';

import { MainLayout } from '@/components/layouts/MainLayout';

export default function MyApp({ pageProps, Component, router }: AppProps) {
  return (
    <MainLayout router={router}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
