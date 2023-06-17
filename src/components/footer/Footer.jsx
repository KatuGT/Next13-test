import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between py-4'>
      <p className='text-sm'>2023 Lamamia. All rights reserved</p>
      <div className='flex gap-4 items-center'>
        <Image src='/1.png' className='hover:opacity-50' width={20} height={20} alt='Facebook'/>
        <Image src='/2.png' className='hover:opacity-50' width={20} height={20} alt='Instagram'/>
        <Image src='/3.png' className='hover:opacity-50' width={20} height={20} alt='lamadev'/>
        <Image src='/4.png' className='hover:opacity-50' width={20} height={20} alt='lamadev'/>
      </div>
    </footer>
  )
}

export default Footer