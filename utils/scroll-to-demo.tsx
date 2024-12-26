'use client'

export const scrollToDemo = (calendarRef: React.RefObject<HTMLDivElement>) => {
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const isDemoPath = params.get('path') === 'demo';

    if (currentPath === '/' && isDemoPath) {
      calendarRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/?path=demo';
    }
  }
};

