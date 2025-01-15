import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header'; // Headerコンポーネントのインポート
import Profile from './components/Profile';
import University from './components/University';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isScrolled={isScrolled} />

      {/* Profile Section */}
      <section id="profile" className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center"
        >
          <img 
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">情報工学専攻の院生</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            こんにちは、AIやソフトウェア開発に情熱を注いでいます。
            最新のテクノロジーを活用して、革新的なソリューションを生み出すことに取り組んでいます。
          </p>
        </motion.div>
      </section>

      {/* University Section */}
      <section id="university" className="pt-20">
        <University />
      </section>

      {/* Works Section */}
      <section id="works" className="pt-20">
        <Works />
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20">
        <Contact />
      </section>

      <footer className="bg-gray-800 py-6 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
