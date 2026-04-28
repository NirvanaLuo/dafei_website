'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ageRanges = ['3-5岁', '6-8岁', '9-12岁', '12岁以上', '成人'];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ageRange: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#faf9f6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            我们期待，和你一起
          </h2>
          <p className="text-base sm:text-xl text-[#1a5d4c] font-medium mb-2">
            帮孩子写好字，放下陪写焦虑
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            写字这件事，早解决，早受益
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <div className="bg-[#1a1a2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white h-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">联系方式</h3>
              
              <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5d4c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">咨询热线</h4>
                    <p className="text-white/70">400-888-8888</p>
                    <p className="text-sm text-white/50">周一至周日 09:00-20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5d4c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">校区地址</h4>
                    <p className="text-white/70">济南市历下区龙奥北路海信龙奥九号</p>
                    <p className="text-sm text-white/50">（地铁3号线龙奥大厦站B口步行500米）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5d4c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">营业时间</h4>
                    <p className="text-white/70">周二至周日 09:00-20:00</p>
                    <p className="text-sm text-white/50">周一休息</p>
                  </div>
                </div>
              </div>

              {/* Value Props */}
              <div className="border-t border-white/10 pt-8">
                <h4 className="font-semibold mb-4">选择大飞书法，您可以：</h4>
                <ul className="space-y-3">
                  {[
                    '养成健康书写习惯，远离近视驼背',
                    '作业工整、卷面不丢分，升学有优势',
                    '短期集训快速提分，假期弯道超车',
                    '线上线下均可学，不受地域限制',
                    '成人收获好字与静心时光',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#1a5d4c] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1a5d4c] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">提交成功！</h3>
                <p className="text-gray-600 mb-6">
                  我们的课程顾问将在24小时内与您联系
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#1a5d4c] font-medium hover:underline"
                >
                  再填一次
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-2">预约免费试听</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">填写信息，专业顾问为您推荐合适课程</p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      您的姓名
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5d4c] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      手机号码
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入手机号码"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5d4c] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      孩子年龄段
                    </label>
                    <select
                      name="ageRange"
                      required
                      value={formData.ageRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5d4c] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">请选择年龄段</option>
                      {ageRanges.map((age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      留言（选填）
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请描述孩子的学习情况或您关心的问题"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a5d4c] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c23a3a] hover:bg-[#a83232] disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        立即预约免费试听
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                  或直接添加微信咨询：
                  <span className="text-[#1a5d4c] font-medium">dafeishufa888</span>
                </p>
              </>
            )}
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">
              关于大飞书法
            </h3>
            <p className="text-gray-600">13年专注少儿书法教育</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#1a5d4c] to-[#164d40] rounded-3xl p-8 md:p-12 text-white">
                <h4 className="text-xl font-bold mb-4">品牌故事</h4>
                <p className="text-white/80 leading-relaxed mb-6">
                  大飞书法创立于2013年，源于创始人对书法艺术的热爱和对少儿教育的执着。
                  十余年来，我们始终相信：每一个孩子都能写一手好字，关键在于科学的方法和专业的引导。
                </p>
                <p className="text-white/80 leading-relaxed">
                  我们自主研发了&ldquo;双轨五阶分龄体系&rdquo;，结合现代儿童心理学，让书法学习既专业又有趣，
                  帮助超过50万家庭解决了孩子的书写问题。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-[#1a1a2e] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#1a5d4c] rounded-lg flex items-center justify-center text-white text-sm">1</span>
                  专业标准
                </h4>
                <p className="text-gray-600 text-sm">
                  统一教学大纲、标准化课件，确保每位学员都能享受同等优质的教学质量
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-[#1a1a2e] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#1a5d4c] rounded-lg flex items-center justify-center text-white text-sm">2</span>
                  因材施教
                </h4>
                <p className="text-gray-600 text-sm">
                  根据每个孩子的年龄、基础、学习目标，制定个性化学习方案
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-[#1a1a2e] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#1a5d4c] rounded-lg flex items-center justify-center text-white text-sm">3</span>
                  全程服务
                </h4>
                <p className="text-gray-600 text-sm">
                  专属教务1对1服务，定期反馈学习进度，让家长省心放心
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
