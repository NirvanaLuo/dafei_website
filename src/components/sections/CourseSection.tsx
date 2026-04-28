'use client';

import { useState } from 'react';
import { PenTool, BookOpen, Briefcase, Zap, ArrowRight, Clock, Users } from 'lucide-react';

const courseCategories = [
  {
    id: 'hard-pen',
    icon: PenTool,
    title: '硬笔书法',
    subtitle: '双轨五阶体系',
    description: '科学的分龄分阶课程体系，从基础正姿到卷面提速，全面提升书写能力',
    levels: [
      { name: '启蒙阶', age: '5-6岁', focus: '握笔姿势、基础笔画' },
      { name: '基础阶', age: '7-8岁', focus: '结构入门、单字精练' },
      { name: '提升阶', age: '9-10岁', focus: '提速训练、卷面优化' },
      { name: '进阶阶', age: '11-12岁', focus: '综合应用、考试冲刺' },
      { name: '精英阶', age: '12岁+', focus: '风格形成、速度质量' },
    ],
    features: ['分龄分班', '正姿贯穿', '线上线下同步', '效果可见'],
    color: '#1a5d4c',
  },
  {
    id: 'soft-pen',
    icon: BookOpen,
    title: '毛笔书法',
    subtitle: '五阶进阶体系',
    description: '传承传统文化，从毛笔基础到作品创作，培养书法艺术修养',
    levels: [
      { name: '入门阶', age: '6岁+', focus: '毛笔基础、笔墨感受' },
      { name: '基础阶', age: '7岁+', focus: '基本笔画、简单结构' },
      { name: '提升阶', age: '8岁+', focus: '复杂笔画、作品临摹' },
      { name: '创作阶', age: '10岁+', focus: '章法布局、创作入门' },
      { name: '精通阶', age: '12岁+', focus: '风格形成、参赛投稿' },
    ],
    features: ['软硬互通', '小班教学', '名师指导', '作品收藏'],
    color: '#c23a3a',
  },
  {
    id: 'adult',
    icon: Briefcase,
    title: '成人课程',
    subtitle: '三类精品课程',
    description: '专为成人设计的实用书法课程，兼顾职场需求与心灵修养',
    levels: [
      { name: '修心养性班', age: '18岁+', focus: '静心解压、书法入门' },
      { name: '实用书写班', age: '18岁+', focus: '职场签名、日常书写' },
      { name: '师资认证班', age: '18岁+', focus: '书法教学、资格认证' },
    ],
    features: ['时间灵活', '小班授课', '线上可学', '证书获取'],
    color: '#f59e0b',
  },
];

const campCourses = [
  {
    icon: Zap,
    title: '正姿集训营',
    duration: '5天/期',
    description: '纠正握笔姿势，解决趴桌勾腕问题',
    suitable: '5-8岁',
  },
  {
    icon: Zap,
    title: '快写集训营',
    duration: '10天/期',
    description: '提升书写速度，保证速度与质量并存',
    suitable: '8-12岁',
  },
  {
    icon: Zap,
    title: '卷面冲刺营',
    duration: '3天/期',
    description: '考前突击训练，卷面得分立竿见影',
    suitable: '9-12岁',
  },
];

export function CourseSection() {
  const [activeCategory, setActiveCategory] = useState('hard-pen');

  const currentCourse = courseCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            科学课程体系
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            双轨五阶 · 因材施教 · 效果可见
          </p>
        </div>

        {/* Course Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5 gap-1">
            {courseCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-white text-[#1a5d4c] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Course Info */}
          <div>
            <div
              className="rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8"
              style={{ backgroundColor: currentCourse.color }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <currentCourse.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{currentCourse.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{currentCourse.subtitle}</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                {currentCourse.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentCourse.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <Clock className="w-6 h-6 text-[#1a5d4c] mb-2" />
                <h4 className="font-semibold text-[#1a1a2e] mb-1">灵活排课</h4>
                <p className="text-sm text-gray-600">周末平日均可，就近选择校区</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <Users className="w-6 h-6 text-[#1a5d4c] mb-2" />
                <h4 className="font-semibold text-[#1a1a2e] mb-1">小班教学</h4>
                <p className="text-sm text-gray-600">8-12人精品小班，关注每个孩子</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <PenTool className="w-6 h-6 text-[#1a5d4c] mb-2" />
                <h4 className="font-semibold text-[#1a1a2e] mb-1">专业教材</h4>
                <p className="text-sm text-gray-600">自主研发体系教材，效果保障</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <BookOpen className="w-6 h-6 text-[#1a5d4c] mb-2" />
                <h4 className="font-semibold text-[#1a1a2e] mb-1">效果追踪</h4>
                <p className="text-sm text-gray-600">定期测评，进步可视化</p>
              </div>
            </div>
          </div>

          {/* Right: Levels */}
          <div>
            <h4 className="text-xl font-bold text-[#1a1a2e] mb-6">课程阶段</h4>
            <div className="space-y-4">
              {currentCourse.levels.map((level) => (
                <div
                  key={level.name}
                  className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
                >
                  <div
                    className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px]"
                    style={{ backgroundColor: currentCourse.color }}
                  ></div>
                  <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold text-[#1a1a2e]">{level.name}</h5>
                      <span
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: currentCourse.color }}
                      >
                        {level.age}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{level.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-8 bg-[#c23a3a] hover:bg-[#a83232] text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              style={{ backgroundColor: currentCourse.color }}
            >
              咨询适合的课程
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Short-term Camps */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">
              短期集训营
            </h3>
            <p className="text-gray-600">快速突破，弯道超车</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {campCourses.map((camp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a5d4c] to-[#164d40] rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <camp.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">{camp.title}</h4>
                <p className="text-white/80 text-sm mb-4">{camp.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">{camp.suitable}</span>
                  <span>{camp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
