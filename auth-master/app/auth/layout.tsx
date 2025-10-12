import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
      {children}
    </div>
  );
};

export default AuthLayout;
