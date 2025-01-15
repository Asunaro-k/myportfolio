import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message
        },
        'YOUR_USER_ID'
      );

      setStatus({
        type: 'success',
        message: 'メッセージが送信されました！'
      });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: '送信に失敗しました。後でもう一度お試しください。'
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:your.email@example.com', label: 'Email' }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">SNSでつながる</h3>
            <div className="space-y-4">
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
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background-light rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background-light rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-background-light rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {status.message && (
              <div className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg bg-primary hover:bg-primary-dark transition-colors duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;