import React from 'react'
import Header from '../../components/Navber'
import Profile from '../../components/Profile'
import '../contact/contacts.css'

const Contact = () => {
  return (
    <div className='bg-dark'>
      <Header />

      <section className='d-flex flex-wrap justify-content-center gap-2'>
        <div className=' big bg-dark'>
          <Profile />
        </div>

        <div className='px-2 pp my-4'>
          <form >
           <h1 className="text-white">SEND A MESSAGE</h1> 
            <div> <input type="text" placeholder='From:' /></div>  <br />
            <div> <input type="text" placeholder='Subject:' /> </div> <br />
            <div> <textarea name="" placeholder='Write message...' id="" cols="30" rows="10"></textarea> </div>
           <div className='d-flex justify-content-center my-2'><button className='btn  bt btn-primary w-50'>Send Message</button> </div> 
          </form>
        </div>
      </section>
      hv
    </div>
  )
}

export default Contact