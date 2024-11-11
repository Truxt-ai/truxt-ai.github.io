export const metadata = {
  title: 'About - Truxt',
  description: 'Page description',
}

import Intro from './intro'
import Stats from '@/components/stats'
import Cta from '@/components/cta-02'

export default function About() {
  return (
    <>
      <Intro />
      <Stats />
      <Cta />
    </>
  )
}
