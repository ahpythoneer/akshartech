import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-bold font-heading text-primary">
                    AksharTech
                  </span>
                </Link>
              </div>

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
                            ? 'text-primary font-semibold'
                            : 'text-gray-700 hover:text-primary'
                        } transition-colors duration-200 font-medium`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="h-0.5 bg-primary mt-1"
                            initial={false}
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
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none">
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
            <Disclosure.Panel className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'bg-primary-light/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="pt-4 pb-2">
                  <Link to="/contact" className="btn btn-primary w-full">
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
