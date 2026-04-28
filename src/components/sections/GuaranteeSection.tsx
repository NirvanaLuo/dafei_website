'use client';

import { GraduationCap, Wifi, Eye, CheckCircle, MessageCircle, Award, Users } from 'lucide-react';

const guarantees = [
  {
    icon: Users,
    title: '精细分班保障',
    description: '按需分班，适配孩子书写水平，因材施教',
  },
  {
    icon: GraduationCap,
    title: '双轨体系保障',
    description: '双轨并行、五阶进阶，成长路径清晰',
  },
  {
    icon: Wifi,
    title: '独家模式保障',
    description: '线上线下同步，请假不缺课，异地可学',
  },
  {
    icon: Users,
    title: '专业师资保障',
    description: '全职科班师资，培训考核后持证上岗',
  },
  {
    icon: Eye,
    title: '健康守护保障',
    description: '护眼硬件+全程正姿，守护视力与脊柱',
  },
  {
    icon: CheckCircle,
    title: '效果落地保障',
    description: '贴合作业考试，效果看得见',
  },
  {
    icon: MessageCircle,
    title: '透明服务保障',
    description: '专属教务1对1，进度实时同步',
  },
  {
    icon: Award,
    title: '品牌信誉保障',
    description: '13年品牌沉淀，值得信赖',
  },
];

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            8大保障 · 选择更放心
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
            全方位保障，让学习无后顾之忧
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-[#1a5d4c] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <guarantee.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{guarantee.title}</h3>
              <p className="text-sm text-white/60">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#c23a3a] to-[#a83232] rounded-full px-8 py-4">
            <p className="text-white font-semibold">
              13年品牌沉淀 · 50万+家庭信赖 · 值得您选择
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
