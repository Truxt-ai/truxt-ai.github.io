'use client'

export const scrollToDemo = (calendarRef: React.RefObject<HTMLDivElement>) => {
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const isDemoPath = params.get('path') === 'demo';

    if (currentPath === '/' && isDemoPath) {
      // We're already on the home page, just scroll
      calendarRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // We're on a different page, redirect and then scroll
      window.location.href = '/?path=demo';
    }
  }
};

