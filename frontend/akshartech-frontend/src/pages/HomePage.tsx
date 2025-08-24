import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { contentApi, Content } from '../services/api';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Float animation for cards
const floatAnimation = {
  initial: { y: 0 },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const HomePage: React.FC = () => {
  const [heroContent, setHeroContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch content from API
  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        setLoading(true);
        // Fetch the hero content from the backend
        const content = await contentApi.getContentByKey('hero', 'main');
        setHeroContent(content);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content. Please try again later.');
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, []);

  // Stats data
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' }
  ];

  const serviceCategories = [
    {
      title: 'Software Development',
      services: [
        {
          title: 'Custom Software Development',
          description: 'Desktop, web, and mobile applications tailored to your business needs',
          icon: '💻'
        },
        {
          title: 'Website Design & Development',
          description: 'Custom web projects with modern design and responsive functionality',
          icon: '🌐'
        },
        {
          title: 'UI/UX Design Services',
          description: 'User-centered design for optimal user experience',
          icon: '🎨'
        }
      ]
    },
    {
      title: 'IT Consulting',
      services: [
        {
          title: 'IT Strategy & Transformation',
          description: 'Strategic planning for digital transformation initiatives',
          icon: '📊'
        },
        {
          title: 'Cybersecurity Consulting',
          description: 'Security assessments and protection strategy development',
          icon: '🔒'
        },
        {
          title: 'Cloud Migration Consulting',
          description: 'Strategic guidance for seamless cloud adoption',
          icon: '☁️'
        }
      ]
    },
    {
      title: 'IT Support',
      services: [
        {
          title: 'Remote Tech Support',
          description: '24/7 helpdesk support for all your technical needs',
          icon: '🛠️'
        },
        {
          title: 'Managed IT Services',
          description: 'Comprehensive managed services and maintenance contracts',
          icon: '👨‍💻'
        },
        {
          title: 'Data Backup & Recovery',
          description: 'Robust backup solutions and disaster recovery planning',
          icon: '💾'
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section - Modern Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background is now handled by the Layout component */}
        
        <div className="container-custom relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
            >
              {/* Premium badge */}
              <motion.div 
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.3, duration: 0.5}}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#2563EB]/10 to-[#60A5FA]/10 border border-[#2563EB]/30 text-[#2563EB] mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563EB] mr-2"></span>
                Next Generation IT Solutions
              </motion.div>
              
              <motion.h1 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4, duration: 0.8}}
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#111827] mb-6 leading-tight"
              >
                We Transform Ideas Into <span className="text-[#2563EB]">Standout</span> Digital Solutions
              </motion.h1>
              
              <motion.p 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6, duration: 0.8}}
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl"
              >
                {loading ? 'Loading...' : 
                  error ? 'From custom software development to strategic IT consulting, we deliver innovative solutions that drive growth and efficiency for your business.' : 
                  heroContent?.content || 'From custom software development to strategic IT consulting, we deliver innovative solutions that drive growth and efficiency for your business.'}
              </motion.p>
              
              <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8}}
                className="flex flex-col sm:flex-row gap-4"
              >
              <a href="/contact" className="px-8 py-4 rounded-lg bg-[#2563EB] text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow duration-300 text-center">
                  Get Started Today
                </a>
              <a href="/services" className="px-8 py-4 rounded-lg border border-[#2563EB]/30 text-[#2563EB] hover:bg-[#2563EB]/5 transition-colors duration-300 text-center">
                  Explore Services
                </a>
              </motion.div>
              
              {/* Social proof */}
              <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.2, duration: 1}}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <p className="text-gray-500 text-sm mb-4">Trusted by innovative companies</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <div className="h-6 w-20 bg-gray-300 rounded"></div>
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                  <div className="h-6 w-20 bg-gray-300 rounded"></div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Modern dynamic GFX element (no images) */}
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1, delay: 0.5}}
              className="hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Interactive shapes */}
                <motion.div 
                  initial={{scale: 0.95}}
                  animate={{scale: [0.95, 1.05, 0.95]}}
                  transition={{duration: 10, repeat: Infinity, ease: "easeInOut"}}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
                >
                  {/* Layered circles */}
                  <motion.div 
                    animate={{rotate: 360}}
                    transition={{duration: 40, repeat: Infinity, ease: "linear"}}
                    className="absolute inset-0 rounded-full border border-dashed border-[#2563EB]/20"
                  ></motion.div>
                  <motion.div 
                    animate={{rotate: -360}}
                    transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                    className="absolute inset-[30px] rounded-full border border-dashed border-[#60A5FA]/30"
                  ></motion.div>
                  <motion.div 
                    animate={{rotate: 360}}
                    transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    className="absolute inset-[60px] rounded-full border border-dashed border-[#93C5FD]/40"
                  ></motion.div>
                </motion.div>
                
                {/* Floating cards */}
                <motion.div 
                  initial={{y: 0}}
                  animate={{y: [-10, 0, -10]}}
                  transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
                  className="absolute top-[25%] right-[10%] w-32 h-32 bg-white rounded-xl p-4 shadow-lg flex flex-col justify-center items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-2 text-[#2563EB] text-xl">
                    💻
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-2 bg-[#2563EB]/20 rounded mb-2 mx-auto"></div>
                    <div className="w-12 h-2 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{y: 0}}
                  animate={{y: [5, -5, 5]}}
                  transition={{duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1}}
                  className="absolute bottom-[20%] left-[15%] w-28 h-28 bg-white rounded-xl p-4 shadow-lg flex flex-col justify-center items-center"
                >
                  <div className="w-8 h-8 rounded-full bg-[#60A5FA]/10 flex items-center justify-center mb-2 text-[#60A5FA] text-lg">
                    🔒
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-2 bg-[#60A5FA]/20 rounded mb-2 mx-auto"></div>
                    <div className="w-10 h-2 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{y: 0}}
                  animate={{y: [-3, 8, -3]}}
                  transition={{duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2}}
                  className="absolute top-[50%] right-[25%] w-24 h-24 bg-white rounded-xl p-3 shadow-lg flex flex-col justify-center items-center"
                >
                  <div className="w-7 h-7 rounded-full bg-[#93C5FD]/10 flex items-center justify-center mb-2 text-[#93C5FD] text-base">
                    📊
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-1.5 bg-[#93C5FD]/20 rounded mb-2 mx-auto"></div>
                    <div className="w-8 h-1.5 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid-responsive-4 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[#F9FAFB]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </motion.div>

          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mb-8 pb-3 border-b border-gray-200 text-[#2563EB] text-2xl font-semibold"
                >
                  {category.title}
                </motion.h3>

                <div className="grid-responsive-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" 
                      }}
                      transition={{ 
                        delay: serviceIndex * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden"
                    >
                      {/* Service card background gradients */}
                      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#2563EB]/5 to-transparent z-0"></div>
                      <div className="absolute -left-5 -bottom-5 w-24 h-24 rounded-full bg-gradient-to-tr from-[#60A5FA]/5 to-transparent z-0"></div>
                      
                      {/* Service content */}
                      <div className="relative z-10">
                        <motion.div 
                          initial={{ y: 0 }}
                          animate={{ y: [0, -8, 0] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            delay: serviceIndex * 0.2
                          }}
                          className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-4xl"
                        >
                          {service.icon}
                        </motion.div>
                        <h4 className="text-xl font-semibold mb-3 text-[#111827]">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                        
                        {/* Action link */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <a href="/services" className="inline-flex items-center text-[#2563EB] font-medium hover:text-[#60A5FA] transition-colors">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex-col-center mt-16"
          >
            <a href="/services" className="px-8 py-4 rounded-lg bg-[#2563EB] text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow duration-300 inline-block">
              Explore All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#2563EB] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full rounded-full bg-white/10 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 rounded-full bg-white/5 blur-[60px]"></div>
          
          {/* Animated geometric elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-80 h-80 border-[30px] border-white/5 rounded-full"
          ></motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-40 -bottom-40 w-120 h-120 border-[20px] border-white/5 rounded-full"
          ></motion.div>
        </div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8"
            >
              Our team of experts is ready to help you achieve your technology goals. Let's discuss your project and requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
            <a href="/contact" className="px-8 py-4 rounded-lg bg-white text-[#2563EB] font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow duration-300 inline-block">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
