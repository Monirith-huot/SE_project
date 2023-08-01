import React from 'react';

interface pageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout(props: pageLayoutProps) {
  const { children } = props;
  return (
    <div className='flex h-screen w-full bg-background px-20'>{children}</div>
  );
}
