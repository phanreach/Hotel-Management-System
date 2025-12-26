import { Metadata } from 'next';
import AdminLoginPageContent from './page-content';

export const metadata: Metadata = {
  title: 'Admin Login | HMS Portal',
  description: 'Secure staff portal for Hotel Management System. Restricted access for authorized personnel only.',
  robots: {
    index: false, // Don't index admin login pages for security
    follow: false,
  }
};

export default function AdminLoginPage() {
  return <AdminLoginPageContent />;
}