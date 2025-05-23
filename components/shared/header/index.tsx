import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'

import Menu from './menu'
function index() {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href={'/'} className='flex-start'>
                    <Image src={'/images/logo.png'} alt={APP_NAME} height={48} width={48}  priority={true }/>
                </Link>
                <span className='ml-3 font-bold text-2xl hidden lg:block'>{APP_NAME}</span>
            </div>
            <Menu/>
        </div>
    </header>
  )
}

export default index
