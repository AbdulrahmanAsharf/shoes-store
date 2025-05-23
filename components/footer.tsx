import { APP_NAME } from '@/lib/constants';
import React from 'react'

function footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='border-t'>
        <div className='flex-center p-4'>
            {year} {APP_NAME}. All Rights Reserved.
        </div>
      
    </footer>
  )
}

export default footer
