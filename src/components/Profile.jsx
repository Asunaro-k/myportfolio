import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Profile = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto shadow-xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="heading-1 mb-6"
          >
            情報工学専攻の院生
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="paragraph max-w-2xl mx-auto mb-8"
          >
            こんにちは、AIやソフトウェア開発に情熱を注いでいます。
            最新のテクノロジーを活用して、革新的なソリューションを生み出すことに取り組んでいます。
            特に機械学習と自然言語処理の分野に興味があり、日々研究を重ねています。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;