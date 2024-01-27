import { FC, PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { Header } from '../molecules/Header';
import { Footer } from '../molecules/Footer';

type MainLayoutProps = PropsWithChildren<{
  router: Router;
}>;

export const MainLayout: FC<MainLayoutProps> = ({ children, router }) => (
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      className="flex flex-col w-full md:h-screen flex-grow"
      key={router.asPath}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Header />
      <div className="w-full h-full flex items-center justify-center px-5 md:px-20">
        {children}
      </div>
      <Footer />
    </motion.div>
  </AnimatePresence>
);
