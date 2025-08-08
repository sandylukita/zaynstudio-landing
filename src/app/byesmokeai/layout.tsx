import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ByeSmoke AI - AI-Powered Smoking Cessation App | ZaynStudio',
  description: 'Quit smoking with ByeSmoke AI - your intelligent companion featuring personalized AI coaching, real-time support, and proven strategies for a smoke-free life.',
  keywords: 'quit smoking, smoking cessation, AI app, stop smoking, smoke-free, addiction recovery, health app',
  authors: [{ name: 'ZaynStudio' }],
  creator: 'ZaynStudio',
  publisher: 'ZaynStudio',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'ByeSmoke AI - AI-Powered Smoking Cessation App',
    description: 'Break free from smoking with personalized AI coaching, real-time support, and proven strategies. Your journey to a smoke-free life starts here.',
    url: 'https://zaynstudio.app/byesmokeai',
    siteName: 'ZaynStudio',
    images: [
      {
        url: '/byesmokeai-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'ByeSmoke AI App Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByeSmoke AI - AI-Powered Smoking Cessation App',
    description: 'Quit smoking with personalized AI coaching and real-time support. Join thousands who have successfully quit with ByeSmoke AI.',
    images: ['/byesmokeai-screenshot.png'],
    creator: '@zaynstudio',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Health & Fitness',
};

export default function ByeSmokeAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}