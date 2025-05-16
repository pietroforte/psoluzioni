import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import GoogleAnalytics from '../components/GoogleAnalytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}