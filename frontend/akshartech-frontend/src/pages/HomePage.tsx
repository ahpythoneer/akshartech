import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage: React.FC = () => {
  // This would typically come from an API in a real app
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/src/assets/hero-pattern.svg')] opacity-20"></div>
        </div>
        <div className="container-custom relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn} 
              className="mb-6 leading-tight"
            >
              Transform Your Business with Expert IT Solutions
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              From custom software development to strategic IT consulting, we deliver innovative solutions that drive growth and efficiency for your business.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <a href="/contact" className="btn btn-accent">
                Get Started Today
              </a>
              <a href="/services" className="btn btn-outline text-white hover:bg-white/10">
                View Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Services</h2>
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
                  className="mb-8 pb-3 border-b border-gray-200"
                >
                  {category.title}
                </motion.h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 + 0.2 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
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
            className="text-center mt-16"
          >
            <a href="/services" className="btn btn-primary">
              Explore All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
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
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
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
