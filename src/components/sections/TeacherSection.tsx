'use client';

import { Award, GraduationCap } from 'lucide-react';

const teachers = [
  {
    name: '大飞老师',
    title: '创始人 / 教学总监',
    avatar: '大',
    specialty: '硬笔书法 · 卷面提升',
    experience: '15年书法教学经验',
    certifications: ['中国书法家协会会员', '国家书法等级考试考官'],
    highlight: '独创"卷面结构法"，帮助上万学员提升卷面分数',
  },
  {
    name: '小颜老师',
    title: '硬笔教学主管',
    avatar: '颜',
    specialty: '儿童硬笔 · 正姿训练',
    experience: '8年书法教学经验',
    certifications: ['高级书法教师', '儿童心理指导师'],
    highlight: '专注儿童书写习惯培养，善于因材施教',
  },
  {
    name: '萍果老师',
    title: '毛笔教学主管',
    avatar: '萍',
    specialty: '毛笔书法 · 软硬互通',
    experience: '10年书法教学经验',
    certifications: ['书法学专业硕士', '省市书法家协会会员'],
    highlight: '科班出身，传承与创新并重',
  },
];

const stats = [
  { value: '100%', label: '全职师资' },
  { value: '100%', label: '持证上岗' },
  { value: '200+', label: '年均培训时长' },
  { value: '98%', label: '家长满意度' },
];

export function TeacherSection() {
  return (
    <section id="teachers" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            专业师资团队
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            全职科班师资 · 系统培训认证 · 标准教学体系
          </p>
        </div>

        {/* Teacher Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1a5d4c] to-[#164d40] rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                  {teacher.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">{teacher.name}</h3>
                  <p className="text-sm text-[#1a5d4c]">{teacher.title}</p>
                </div>
              </div>

              {/* Specialty */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#1a5d4c]/10 text-[#1a5d4c] rounded-full text-sm">
                  {teacher.specialty}
                </span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>{teacher.experience}</span>
              </div>

              {/* Certifications */}
              <div className="space-y-1 mb-4">
                {teacher.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-[#c23a3a]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-700 italic">&ldquo;{teacher.highlight}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Standards */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">师资保障体系</h3>
            <p className="text-gray-600">严格的选拔标准，完善的培训体系</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#c23a3a] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: '严格选拔', desc: '书法专业背景' },
              { step: '02', title: '系统培训', desc: '教学方法论' },
              { step: '03', title: '考核认证', desc: '持证上岗' },
              { step: '04', title: '持续提升', desc: '定期教研' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-[#1a5d4c] mb-2">{item.step}</div>
                <div className="font-semibold text-[#1a1a2e] mb-1">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
