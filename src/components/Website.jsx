import React from 'react'
import { Link } from 'react-router-dom'
import '../style/website.css'

const Website = () => {
  return (
    <div>
        <div className='d-flex gap-3 ic text-white  ms-2  '>
        <div className='m '>
          <Link className=' nam text-white text-decoration-none px-'> 
           <p><Iconify-icon icon='wpf:message-outline' /> Email <Iconify-icon icon='bi:box-arrow-up-right' />  </p> 
          </Link>
        </div>
        <div className=' m gap-2'>
          <Link className=' nam text-white text-decoration-none'>
             <p><Iconify-icon icon='icon-park:github' className='git' /> Github  <Iconify-icon icon='bi:box-arrow-up-right' /></p> 
            </Link>
        </div>

      </div>
    </div>
  )
}

export default Website