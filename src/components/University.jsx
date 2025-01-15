import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, description, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8`}
    >
      <div className="hidden md:block w-1/2" />
      <div className="w-full md:w-1/2 flex">
        <div className={`w-full ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
          <div className="bg-background-light p-6 rounded-lg">
            <span className="text-primary font-bold">{date}</span>
            <h3 className="text-xl font-bold mt-2 mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const University = () => {
  const timelineData = [
    {
      date: '2023年4月',
      title: '情報工学専攻 入学',
      description: '中京大学大学院 工学研究科 情報工学専攻に入学。AI・機械学習の研究を開始。'
    },
    {
      date: '2023年10月',
      title: '研究テーマ決定',
      description: '「機械学習を用いた自然言語処理の研究」をテーマに設定し、本格的な研究活動を開始。'
    },
    {
      date: '2024年1月',
      title: '学会発表',
      description: '情報処理学会第86回全国大会にて研究成果を発表。優秀発表賞を受賞。'
    },
    {
      date: '2024年4月',
      title: '研究プロジェクト参加',
      description: '産学共同研究プロジェクトに参加。実務での機械学習応用に関する知見を深める。'
    }
  ];

  return (
    <section id="university" className="section-padding">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 text-center mb-16"
        >
          Chukyo University
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.date}
                date={item.date}
                title={item.title}
                description={item.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default University;