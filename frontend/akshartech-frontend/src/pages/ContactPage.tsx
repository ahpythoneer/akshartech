import React, { useState } from 'react';
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

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to the backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      title: 'Email',
      info: 'info@akshartech.us',
      icon: '✉️'
    },
    {
      title: 'Phone',
      info: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      title: 'Address',
      info: '123 Tech Boulevard, Innovation District, San Francisco, CA 94105',
      icon: '📍'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'career', label: 'Career Information' }
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
              Contact Us
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Let's discuss how we can help your business succeed with the right technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you. Feel free to reach out with any questions about our services or to schedule a consultation.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl text-primary mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-6 border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gray-50 p-8 rounded-lg"
            >
              {formSubmitted ? (
                <div className="text-center p-8">
                  <div className="text-5xl text-primary mb-4">✓</div>
                  <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {subjectOptions.map((option, index) => (
                          <option key={index} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full md:w-auto"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office to meet our team and discuss your project in person
            </p>
          </motion.div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* In a real application, this would be a Google Maps or similar integration */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl">🗺️</span>
                <span className="ml-4 text-gray-600 text-lg">Map would be displayed here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">What types of businesses do you work with?</h3>
              <p className="text-gray-600">
                We work with businesses of all sizes across various industries, from startups to established enterprises. Our solutions are tailored to meet the specific needs and challenges of each client.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity of the work. A simple website might take 4-6 weeks, while a custom software application could take several months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer ongoing support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we provide ongoing maintenance and support services for all our solutions. We offer various support packages to ensure your systems continue to operate efficiently and remain up-to-date with the latest security standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">How do you handle data security and privacy?</h3>
              <p className="text-gray-600">
                Data security is a top priority for us. We implement industry-standard security measures and comply with relevant data protection regulations. All sensitive information is encrypted, and we follow best practices for secure development and deployment.
              </p>
            </motion.div>
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
              Ready to transform your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8"
            >
              Contact us today to schedule a free consultation and discover how our IT solutions can help your business grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="tel:+15551234567" className="btn bg-white text-primary hover:bg-gray-100">
                Call Now
              </a>
              <a href="mailto:info@akshartech.us" className="btn btn-outline text-white hover:bg-white/10">
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
