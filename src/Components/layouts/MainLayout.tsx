import { FC, PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { Header } from '../molecules/Header';

type MainLayoutProps = PropsWithChildren<{
  router: Router;
}>;

export const MainLayout: FC<MainLayoutProps> = ({ children, router }) => (
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      className="w-full h-full pb-20 "
      key={router.asPath}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Header />
      <div className="w-full h-full flex items-center px-5 md:px-20">
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);
