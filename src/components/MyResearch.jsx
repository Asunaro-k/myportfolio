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

const MyResearch = () => {
  const timelineData = [
    {
      date: '2019年4月',
      title: '情報工学科 入学',
      description: '大学 工学部 情報工学科に入学。'
    },
    {
      date: '2022年3月',
      title: '学会発表',
      description: '情報処理学会第84回全国大会にて研究成果を発表。'
    },
    {
      date: '2023年4月',
      title: '情報工学専攻 入学',
      description: '大学院 工学研究科 情報工学専攻に入学。AI・機械学習の研究を専門に。'
    },
    {
      date: '2024年3月',
      title: '学会発表',
      description: '情報処理学会第86回全国大会にて研究成果を発表。'
    },
    {
      date: '2025年1月',
      title: '修士論文執筆',
      description: 'AIを活用したフルスタックアプリの開発'
    }
  ];

  return (
    <section id="myresearch" className="section-padding">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 text-center mb-16"
        >
          MyResearch
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

export default MyResearch;