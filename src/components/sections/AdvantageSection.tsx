'use client';

import { CheckCircle, XCircle, ArrowRight, GraduationCap, Wifi, Users, Award } from 'lucide-react';

const advantages = [
  {
    icon: GraduationCap,
    title: '双轨五阶分龄体系',
    dafei: '根据年龄和基础，科学分班，因材施教',
    others: '统一教学，忽视个体差异',
  },
  {
    icon: Award,
    title: '卷面实用结构法',
    dafei: '贴合作业考试，卷面提分看得见',
    others: '传统艺术练字，与实用脱节',
  },
  {
    icon: Users,
    title: '全职科班师资',
    dafei: '全职老师，培训考核持证上岗',
    others: '兼职或非专业师资，质量不稳定',
  },
  {
    icon: Wifi,
    title: '线上线下同步',
    dafei: '请假不缺课，线上同步学',
    others: '线下课缺席，学习进度断层',
  },
  {
    icon: CheckCircle,
    title: '正姿全程贯穿',
    dafei: '从入门到进阶，正姿训练不松懈',
    others: '忽视书写姿势，治标不治本',
  },
  {
    icon: Users,
    title: '软硬笔互通教学',
    dafei: '硬笔毛笔相互促进，全面提升',
    others: '单一课程，缺乏体系化培养',
  },
];

export function AdvantageSection() {
  return (
    <section id="advantages" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            为什么选择大飞书法？
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            专业与普通的差距，体现在每一个教学细节中
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#1a1a2e] text-white">
            <div className="p-6 font-semibold text-center">对比维度</div>
            <div className="p-6 font-semibold text-center bg-[#1a5d4c]">大飞书法</div>
            <div className="p-6 font-semibold text-center">普通练字班</div>
          </div>

          {/* Table Body */}
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-gray-100 ${
                  index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                }`}
              >
                <div className="p-5 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#1a5d4c] flex-shrink-0" />
                  <span className="font-medium text-[#1a1a2e] text-sm">
                    {advantage.title}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2 bg-[#1a5d4c]/5">
                  <CheckCircle className="w-5 h-5 text-[#1a5d4c] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{advantage.dafei}</span>
                </div>
                <div className="p-5 flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-500">{advantage.others}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#1a5d4c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-[#1a5d4c]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">科学分龄体系</h3>
            <p className="text-gray-600 leading-relaxed">
              5-8岁黄金期专注习惯养成，9-12岁提升速度与卷面效果，成人课程注重实用与修身
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#c23a3a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-[#c23a3a]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">效果立竿见影</h3>
            <p className="text-gray-600 leading-relaxed">
              贴合作业考试需求的实用教学，短期内可见书写改善，卷面成绩提升有保障
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#1a5d4c]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wifi className="w-8 h-8 text-[#1a5d4c]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">线上线下同步</h3>
            <p className="text-gray-600 leading-relaxed">
              首创线上线下同步教学模式，请假不缺课，异地也能享受同等教学质量
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.querySelector('#courses');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#1a5d4c] hover:bg-[#164d40] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
          >
            了解更多课程详情
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
