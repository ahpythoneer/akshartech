import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    // Throttle scroll events for better performance
    let timeout: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null as unknown as ReturnType<typeof setTimeout>;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB] text-[#111827]">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 blur-[80px] animate-pulse"></div>
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-[#60A5FA]/10 to-[#93C5FD]/10 blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
        
        {/* Subtle accent elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-[#2563EB] shadow-[0_0_10px_2px_rgba(37,99,235,0.2)]"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 rounded-full bg-[#2563EB] shadow-[0_0_10px_2px_rgba(37,99,235,0.2)]"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#2563EB] shadow-[0_0_10px_2px_rgba(37,99,235,0.2)]"></div>
      </div>

      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.4 }}
          className="flex-grow relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-6 bottom-6 p-3 rounded-full bg-[#2563EB] text-white shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none z-50 transition-shadow duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
