import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const footerLinks = {
    services: [
      { name: 'Software Development', href: '/services#software-development' },
      { name: 'IT Consulting', href: '/services#it-consulting' },
      { name: 'IT Support', href: '/services#it-support' },
      { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
      { name: 'Cybersecurity', href: '/services#cybersecurity' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/about#careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  };

  return (
    <footer className="bg-[#F3F4F6] text-[#111827] pt-16 pb-8 relative z-10">
      {/* Subtle footer background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-80 rounded-full bg-gradient-to-r from-[#2563EB]/5 to-[#60A5FA]/5 blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-1/4 h-60 rounded-full bg-gradient-to-r from-[#3B82F6]/5 to-[#93C5FD]/5 blur-[100px]"></div>
      </div>
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid-responsive-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
              <Link to="/" className="inline-block mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center mr-2">
                    <span className="text-white font-bold">AT</span>
                  </div>
                  <span className="text-2xl font-bold font-heading text-[#111827]">
                    AksharTech
                  </span>
                </div>
              </Link>
            <p className="text-gray-600 mb-6">
              Transforming businesses through innovative IT solutions since 2010.
            </p>
            <div className="space-x-4">
              {/* Social Media Icons */}
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-[#2563EB] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-[#2563EB] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-[#2563EB] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.644c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-[#2563EB]">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#2563EB] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-[#2563EB]">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#111827] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-[#2563EB]">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <motion.li 
                className="flex items-start"
                variants={fadeInUp}
              >
                <span className="text-[#2563EB] mr-2">Email:</span>
                <a
                  href="mailto:support@akshartech.us"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  support@akshartech.us
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInUp}
              >
                <span className="text-[#2563EB] mr-2">Address:</span>
                <span>
                  18367 Magnolia Run Lane<br />
                  Moseley VA- 23130-1929
                </span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInUp}
              >
                <span className="text-[#2563EB] mr-2">Hours:</span>
                <span>
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  24/7 Emergency Support
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AksharTech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-500 hover:text-[#2563EB] text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
