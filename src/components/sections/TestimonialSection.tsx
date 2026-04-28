'use client';

import { Star, Quote, ThumbsUp, TrendingUp, Award } from 'lucide-react';

const testimonials = [
  {
    name: '王妈妈',
    role: '二年级学员家长',
    avatar: '王',
    rating: 5,
    content: '之前孩子写字歪歪扭扭，握笔姿势也不对。在大飞学了半年，不仅字变漂亮了，坐姿也端正了很多。班主任经常发孩子的进步照片，很放心！',
    improvement: '正姿养成·字迹工整',
    highlight: '半年显著进步',
  },
  {
    name: '李爸爸',
    role: '四年级学员家长',
    avatar: '李',
    rating: 5,
    content: '孩子马上要小升初了，卷面分特别重要。报了快写集训营，10天下来写作文速度快了一倍，老师说卷面比以前整洁多了。',
    improvement: '卷面提分·速度提升',
    highlight: '小升初冲刺',
  },
  {
    name: '张同学',
    role: '初中一年级',
    avatar: '张',
    rating: 5,
    content: '初中学业忙，没时间练字。线上课帮了大忙，周末抽空学，期末考试作文比上学期多了3分卷面分！',
    improvement: '线上同步·效果可见',
    highlight: '期末卷面+3分',
  },
  {
    name: '陈阿姨',
    role: '成人班学员',
    avatar: '陈',
    rating: 5,
    content: '退休后想学点雅兴，毛笔课老师特别有耐心。从零开始，现在能写完整的作品了，感觉生活充实了很多。',
    improvement: '修身养性·书法入门',
    highlight: '零基础到作品',
  },
];

const achievements = [
  {
    icon: ThumbsUp,
    value: '50万+',
    label: '学员家庭',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: '进步率',
  },
  {
    icon: Award,
    value: '98%',
    label: '满意度',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: '家长评分',
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            学员真实见证
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            50万+家庭的共同选择，见证每一次进步
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a5d4c] to-[#164d40] rounded-2xl p-6 text-white text-center"
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">{item.value}</div>
              <div className="text-sm opacity-80">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#1a5d4c]/10" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#c23a3a] to-[#a83232] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a5d4c]/10 text-[#1a5d4c] rounded-full text-sm">
                  {testimonial.improvement}
                </span>
                <span className="px-3 py-1 bg-[#c23a3a]/10 text-[#c23a3a] rounded-full text-sm">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-[#1a1a2e] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            下一个进步的就是您的孩子
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            13年品牌沉淀，50万+家庭信赖。科学分龄课程，专业师资团队，让每一个孩子都能写一手好字。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#c23a3a] hover:bg-[#a83232] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
            >
              立即预约免费试听
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              查看更多学员案例
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
