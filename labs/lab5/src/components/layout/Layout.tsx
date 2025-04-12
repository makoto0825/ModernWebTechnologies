import { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Navigation />
      <main className='max-w-screen-2xl mx-auto'>{children}</main>
    </div>
  );
};

export default Layout;
