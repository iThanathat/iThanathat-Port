import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {AnimatePresence} from 'framer-motion';
import Layout from '../components/Layouts/main';

config.autoAddCss = false;

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
