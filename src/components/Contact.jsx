import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Asunaro-k', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://x.com/asyanaro', label: 'Twitter' },
    { icon: FaEnvelope, label: 'Email : owarigami@gmail.com', display: 'owarigami@gmail.com' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 text-center mb-16"
        >
          Contact
        </motion.h2>

        <div className="flex justify-center gap-8">
          {/* Social Links */}
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-300 hover:text-primary transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
