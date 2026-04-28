import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '大飞书法 | 正姿养习惯，轻松守卷面',
    template: '%s | 大飞书法',
  },
  description:
    '大飞书法，13年书法教育品牌。专注少儿硬笔书法、毛笔教学，专业师资团队，科学分龄课程体系，帮助50万+家庭培养孩子良好书写习惯。',
  keywords: [
    '大飞书法',
    '少儿书法',
    '硬笔书法',
    '毛笔书法',
    '济南书法培训',
    '儿童写字',
    '卷面提分',
    '正姿养习惯',
  ],
  authors: [{ name: '大飞书法', url: 'https://dafeishufa.com' }],
  generator: 'Coze Code',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '大飞书法 | 正姿养习惯，轻松守卷面',
    description:
      '13年书法教育品牌，专注少儿硬笔书法、毛笔教学，帮助50万+家庭培养孩子良好书写习惯。',
    url: 'https://dafeishufa.com',
    siteName: '大飞书法',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
