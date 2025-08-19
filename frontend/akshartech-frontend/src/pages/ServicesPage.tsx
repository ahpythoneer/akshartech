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

const ServicesPage: React.FC = () => {
  // This would typically come from an API in a real app
  const serviceCategories = [
    {
      title: 'Software Development',
      description: 'Custom software solutions to address your unique business challenges and opportunities.',
      services: [
        {
          title: 'Custom Software Development',
          description: 'We develop tailor-made software applications that address your specific business needs, whether it\'s automating processes, improving customer experience, or integrating existing systems.',
          icon: '💻',
          benefits: [
            'Personalized solutions for your unique challenges',
            'Scalable architecture that grows with your business',
            'User-friendly interfaces designed for your team',
            'Ongoing support and maintenance'
          ]
        },
        {
          title: 'Website Design & Development',
          description: 'Our web development team creates stunning, high-performance websites that engage visitors and drive conversions, from corporate websites to complex web applications.',
          icon: '🌐',
          benefits: [
            'Responsive designs that work on all devices',
            'SEO-optimized structure and content',
            'Integration with your CRM and marketing tools',
            'Regular updates and security maintenance'
          ]
        },
        {
          title: 'UI/UX Design Services',
          description: 'We craft intuitive, beautiful user interfaces that enhance user experience and satisfaction, ensuring your digital products are not just functional but delightful to use.',
          icon: '🎨',
          benefits: [
            'User-centered design approach',
            'Comprehensive user research and testing',
            'Intuitive navigation and information architecture',
            'Conversion-focused visual design'
          ]
        },
        {
          title: 'Mobile App Development',
          description: 'Our team builds native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.',
          icon: '📱',
          benefits: [
            'Native performance with cross-platform efficiency',
            'Offline functionality for uninterrupted usage',
            'Push notifications for user engagement',
            'Integration with device features (camera, GPS, etc.)'
          ]
        },
        {
          title: 'E-commerce Solutions',
          description: 'We develop secure, scalable online stores that drive sales and provide excellent shopping experiences for your customers.',
          icon: '🛒',
          benefits: [
            'Secure payment processing',
            'Inventory management integration',
            'Customer account management',
            'Analytics and reporting dashboards'
          ]
        }
      ]
    },
    {
      title: 'IT Consulting',
      description: 'Strategic guidance to help you leverage technology for business growth and transformation.',
      services: [
        {
          title: 'IT Strategy & Transformation',
          description: 'We help you develop comprehensive IT strategies that align with your business goals, ensuring technology investments deliver maximum value and competitive advantage.',
          icon: '📊',
          benefits: [
            'Alignment of IT initiatives with business objectives',
            'Roadmap for digital transformation',
            'Technology stack optimization',
            'IT governance and compliance frameworks'
          ]
        },
        {
          title: 'Cybersecurity Consulting',
          description: 'Our security experts assess your current vulnerabilities and develop robust protection strategies to safeguard your critical data and systems from evolving threats.',
          icon: '🔒',
          benefits: [
            'Comprehensive security assessments',
            'Incident response planning',
            'Security awareness training',
            'Compliance with industry regulations (GDPR, HIPAA, etc.)'
          ]
        },
        {
          title: 'Cloud Migration Consulting',
          description: 'We guide you through seamless cloud adoption, from strategy development to implementation, helping you leverage the scalability and cost benefits of cloud computing.',
          icon: '☁️',
          benefits: [
            'Cloud readiness assessment',
            'Migration strategy and planning',
            'Vendor selection and management',
            'Post-migration optimization and support'
          ]
        },
        {
          title: 'Business Process Automation',
          description: 'We identify opportunities to automate repetitive tasks and workflows, increasing efficiency and allowing your team to focus on high-value activities.',
          icon: '⚙️',
          benefits: [
            'Workflow analysis and optimization',
            'Custom automation solution development',
            'Integration with existing systems',
            'Training and adoption support'
          ]
        }
      ]
    },
    {
      title: 'IT Support',
      description: 'Reliable technical assistance to keep your systems running smoothly and efficiently.',
      services: [
        {
          title: 'Remote Tech Support',
          description: 'Our 24/7 helpdesk provides immediate assistance for all your technical issues, ensuring minimal disruption to your business operations.',
          icon: '🛠️',
          benefits: [
            'Round-the-clock availability',
            'Multi-channel support (phone, email, chat)',
            'Fast resolution times',
            'Detailed ticketing and reporting'
          ]
        },
        {
          title: 'Managed IT Services',
          description: 'We provide comprehensive IT management, including network monitoring, software updates, and preventative maintenance to keep your systems secure and performing optimally.',
          icon: '👨‍💻',
          benefits: [
            'Proactive system monitoring and maintenance',
            'Regular security updates and patches',
            'Performance optimization',
            'Predictable monthly IT costs'
          ]
        },
        {
          title: 'Data Backup & Recovery',
          description: 'Our robust backup solutions and disaster recovery planning ensure your critical business data is protected and quickly recoverable in case of any data loss incident.',
          icon: '💾',
          benefits: [
            'Automated, regular backups',
            'Secure offsite storage',
            'Rapid recovery capabilities',
            'Regular testing and verification'
          ]
        },
        {
          title: 'Network Design & Management',
          description: 'We design, implement, and manage secure, high-performance networks that serve as the reliable foundation for all your business operations.',
          icon: '🔌',
          benefits: [
            'Scalable infrastructure design',
            'Network security implementation',
            'Performance monitoring and optimization',
            'Wireless and remote access solutions'
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
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
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-4xl">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="text-lg font-medium mb-3 text-primary">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8"
            >
              Contact us today to discuss your project requirements and discover how our services can transform your business.
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

export default ServicesPage;
