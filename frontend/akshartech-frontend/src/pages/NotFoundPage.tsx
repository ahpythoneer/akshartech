import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-8xl text-gray-300 block">404</span>
          <h1 className="text-3xl font-bold text-primary mt-4 mb-2">Page Not Found</h1>
          <p className="text-gray-600 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="btn btn-primary"
            >
              Back to Home
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200 mt-8">
            <p className="text-gray-600 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/services" 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
