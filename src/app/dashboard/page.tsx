import { Metadata } from 'next';
import DashboardPageContent from './page-content';

export const metadata: Metadata = {
//   title: 'Login | HMS - Hotel Management System',
//   description: 'Login to your HMS account to manage your bookings and explore exclusive luxury offers worldwide.',
//   openGraph: {
//     title: 'HMS Login',
//     description: 'Experience luxury like never before.',
//     images: ['/og-image.jpg'],
//   },
};

export default function DashboardPage() {
  return <DashboardPageContent />;
}