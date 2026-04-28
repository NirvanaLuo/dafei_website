'use client';

import { useState } from 'react';
import { AlertTriangle, Lightbulb, BookOpen, Briefcase, Users } from 'lucide-react';

const painPointTabs = [
  {
    id: 'young',
    icon: Users,
    title: '低龄段',
    ageRange: '中班-2年级',
    problems: ['趴桌勾腕', '写字喊累', '抵触书写', '握笔姿势错误'],
    consequence: '错过黄金习惯期',
    consequenceDesc: '坏习惯一旦养成，纠正难度倍增',
  },
  {
    id: 'older',
    icon: BookOpen,
    title: '高龄段',
    ageRange: '3年级以上',
    problems: ['作业潦草', '书写缓慢', '卷面丢分', '考试吃亏'],
    consequence: '卷面直接丢分',
    consequenceDesc: '每次考试因书写损失3-5分',
  },
  {
    id: 'adult',
    icon: Briefcase,
    title: '成人',
    ageRange: '职场/家长',
    problems: ['职场书写潦草', '影响个人形象', '自学难坚持', '渴望静心解压'],
    consequence: '错失提升机会',
    consequenceDesc: '好字是职场加分项，也是生活仪式感',
  },
];

export function PainPointSection() {
  const [activeTab, setActiveTab] = useState('young');

  const currentTab = painPointTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section id="pain-points" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            您的孩子是否有这些困扰？
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            每个年龄段的孩子都面临着不同的书写挑战，及早发现并解决，才能让孩子受益终身
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5">
            {painPointTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-[#1a5d4c] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.title}</span>
                  <span className="sm:hidden text-xs">{tab.ageRange}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">{currentTab.title}痛点</h3>
                <p className="text-sm text-gray-500">{currentTab.ageRange}</p>
              </div>
            </div>

            <ul className="space-y-4">
              {currentTab.problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>

            {/* Warning Box */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700">
                    不解决：{currentTab.consequence}
                  </p>
                  <p className="text-sm text-red-600/80 mt-1">
                    {currentTab.consequenceDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-[#1a5d4c]/5 to-[#1a5d4c]/10 rounded-2xl p-8 border border-[#1a5d4c]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a5d4c] rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">大飞书法解决方案</h3>
                <p className="text-sm text-[#1a5d4c]">科学分龄，因材施教</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#1a5d4c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong className="text-[#1a5d4c]">双轨五阶体系</strong>，适配不同年龄段需求
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#1a5d4c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong className="text-[#1a5d4c]">正姿全程贯穿</strong>，养成正确书写习惯
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#1a5d4c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong className="text-[#1a5d4c]">全职科班师资</strong>，专业培训持证上岗
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#1a5d4c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong className="text-[#1a5d4c]">线上线下同步</strong>，请假不缺课
                </span>
              </li>
            </ul>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-8 bg-[#c23a3a] hover:bg-[#a83232] text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              立即咨询解决方案
            </button>
          </div>
        </div>

        {/* Golden Period Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-800">黄金习惯养成期</h4>
                <p className="text-amber-700">5-8岁是培养书写习惯的最佳时机，别让孩子错过</p>
              </div>
            </div>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-all whitespace-nowrap"
            >
              抢占黄金期名额
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
