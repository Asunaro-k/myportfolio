import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header'; // Headerコンポーネントのインポート
import Profile from './components/Profile';
import MyResearch from './components/MyResearch';
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
          {/* アイコン画像を追加 */}
          <img 
            src="./src/assets/images/1B8504D9-D563-4558-90BD-00ED285993E3.png"  // アイコン画像のパスを指定
            alt="Profile Icon"
            className="w-64 h-64 rounded-full mx-auto mb-8"  // アイコンのサイズとスタイルを調整
          />
          <img 
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Asyanaro</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            こんにちは<br />
            AIやソフトウェア開発に情熱を注いでいます。<br />最近はLLMをメインにフルスタックで触ってます。<br />
            最新のテクノロジーを活用して、革新的なソリューションを生み出すことに取り組んでいます。
          </p>
        </motion.div>
      </section>

      {/* MyResearch Section */}
      <section id="myresearch" className="pt-20">
        <MyResearch />
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
