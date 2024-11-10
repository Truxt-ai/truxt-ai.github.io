import React from 'react'
import Image from 'next/image'

function BusinessCategories() {
  return (
    <div className='flex justify-center items-center max-w-7xl m-auto mb-16' data-aos='zoom-y-out' data-aos-delay={400}>
        <Image src='/images/truxt-arch.png' width={500} height={250} className='w-full rounded-lg mix-blend-multiply bg-transparent' alt='Error in loading enginer'/>
    </div>
  )
}

export default BusinessCategories