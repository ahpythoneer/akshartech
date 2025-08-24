import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener with throttling for better performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/90 py-4'
      }`}
    >
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex-between h-16">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center mr-2">
                      <span className="text-white font-bold">AT</span>
                    </div>
                    <span className="text-2xl font-bold font-heading text-[#111827]">
                      AksharTech
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`${
                          isActive
                            ? 'text-[#2563EB] font-semibold'
                            : 'text-gray-600 hover:text-[#111827]'
                        } transition-colors duration-200 font-medium`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div 
                            className="h-0.5 bg-[#2563EB] mt-1"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Contact button */}
              <div className="hidden md:block">
                <Link 
                  to="/contact" 
                  className="px-4 py-2 rounded-lg bg-[#2563EB] text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Disclosure.Button 
                  className="inline-flex items-center justify-center p-2 rounded-md 
                    text-gray-700 hover:text-[#2563EB] hover:bg-gray-100 
                    focus:outline-none transition-colors"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="md:hidden bg-white shadow-lg rounded-b-lg">
              <div className="px-4 pt-3 pb-4 space-y-2">
                {navigation.map((item, index) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'bg-[#2563EB]/10 text-[#2563EB]'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#111827]'
                    } block px-4 py-3 rounded-md text-base font-medium w-full text-left transition-all`}
                  >
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.div>
                  </Disclosure.Button>
                ))}
                <div className="pt-4 pb-2">
                  <Link to="/contact" className="px-4 py-2 rounded-lg bg-[#2563EB] text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow duration-300 w-full block text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
