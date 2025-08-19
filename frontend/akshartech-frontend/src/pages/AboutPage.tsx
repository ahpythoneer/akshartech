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

const AboutPage: React.FC = () => {
  // This would typically come from an API in a real app
  const companyHistory = [
    {
      year: '2012',
      title: 'Founded',
      description: 'AksharTech was founded with a vision to provide innovative technology solutions to businesses of all sizes.'
    },
    {
      year: '2014',
      title: 'Expansion',
      description: 'Expanded our service offerings to include cloud solutions and cybersecurity services.'
    },
    {
      year: '2016',
      title: 'Growth',
      description: 'Opened our second office and grew our team to over 25 IT professionals.'
    },
    {
      year: '2018',
      title: 'Innovation',
      description: 'Launched our custom software development division to help businesses build tailored solutions.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Helped dozens of businesses navigate remote work challenges during the pandemic.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Began serving international clients and established partnerships with leading technology providers.'
    },
    {
      year: 'Today',
      title: 'Continuing Growth',
      description: 'Continuing to innovate and expand our services to meet the evolving needs of our clients.'
    }
  ];

  const teamMembers = [
    {
      name: 'Akshar Patel',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in IT and software development, Akshar leads our company with a passion for innovation and excellence.',
      image: '/src/assets/team/akshar.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'Priya brings her extensive knowledge in software architecture and emerging technologies to drive our technical strategy and innovation.',
      image: '/src/assets/team/priya.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Client Services',
      bio: 'Michael ensures our clients receive exceptional service and that our solutions meet their business objectives effectively.',
      image: '/src/assets/team/michael.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      bio: 'Sarah leads our development team, bringing technical excellence and creative problem-solving to every project.',
      image: '/src/assets/team/sarah.jpg'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in everything we do, from code to customer service.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to provide forward-thinking solutions to complex problems.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical conduct in all our business relationships.',
      icon: '🤝'
    },
    {
      title: 'Client Focus',
      description: 'We put our clients\' needs at the center of our work, building lasting partnerships based on trust and results.',
      icon: '👥'
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
              About AksharTech
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              We're a team of passionate technology experts dedicated to helping businesses thrive in the digital era.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2012, AksharTech began with a simple mission: to provide businesses with technology solutions that drive growth and efficiency. What started as a small IT consulting firm has grown into a comprehensive technology partner offering a wide range of services from custom software development to IT strategy and support.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've helped hundreds of businesses across various industries leverage technology to overcome challenges and seize opportunities. Our team has grown in both size and expertise, but our commitment to excellence and client satisfaction remains unwavering.
              </p>
              <p className="text-lg text-gray-700">
                Today, AksharTech stands as a trusted technology partner for businesses looking to navigate the complex digital landscape and achieve their goals through innovative solutions and reliable support.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🏢</span>
                  <span className="ml-4 text-gray-600 text-lg">Company Image</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth and key milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-12">
              {companyHistory.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2 pr-8 md:pr-12 text-right">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-xl font-bold text-primary">{item.year} - {item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </>
                    )}
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary w-4 h-4 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2 pl-8 md:pl-12">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-xl font-bold text-primary">{item.year} - {item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <div className="text-5xl mb-4 text-primary">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind AksharTech
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                  <span className="ml-2 text-gray-600">Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Join our team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8"
            >
              We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
