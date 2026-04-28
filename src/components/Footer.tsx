'use client';

import { MapPin, Phone, Clock } from 'lucide-react';

const footerLinks = {
  课程体系: ['硬笔书法', '毛笔书法', '成人课程', '短期集训营'],
  关于我们: ['品牌故事', '师资团队', '校区环境', '新闻动态'],
  联系我们: ['在线咨询', '预约试听', '校区地址', '合作加盟'],
};

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
              大飞书法
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              正姿养习惯，轻松守卷面。专注少儿书法教育13年，帮助50万+家庭培养孩子良好书写习惯。
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c23a3a]" />
                <span>济南·海信龙奥九号</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c23a3a]" />
                <span>咨询热线：400-888-8888</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c23a3a]" />
                <span>周二至周日 09:00-20:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c23a3a]">13年</div>
              <div className="text-sm text-white/60 mt-1">教学沉淀</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c23a3a]">50万+</div>
              <div className="text-sm text-white/60 mt-1">家庭信赖</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c23a3a]">98%</div>
              <div className="text-sm text-white/60 mt-1">满意度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c23a3a]">95%</div>
              <div className="text-sm text-white/60 mt-1">学员进步率</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>© 2026 大飞书法 All Rights Reserved</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors">
                用户协议
              </a>
              <a href="#" className="hover:text-white transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
