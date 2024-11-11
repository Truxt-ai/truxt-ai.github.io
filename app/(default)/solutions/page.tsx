import React from 'react'
import HeroHome from './hero'
import Solutions from '@/components/solution'
export const metadata = {
    title: "AI Solutions by Truxt",
    description: "Page description",
  };

function Page() {
  return (
    <>
        <HeroHome/>
        <Solutions/>
    </>
  )
}

export default Page