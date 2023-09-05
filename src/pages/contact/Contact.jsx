import React, { useState } from 'react'
import Header from '../../components/Navber'
import Profile from '../../components/Profile'
import '../contact/contacts.css'
import Messagemodal from '../../components/Messagemodal'

const Contact = () => {

  const [show, setShow] = useState(false);
  const handleclick = (e)=>{
    e.preventDefault();
    setShow(true)
  }
  return (
    <div className='bg-dark'>
      <Header />

      <section className='d-flex flex-wrap justify-content-center gap-2'>
        <div className=' big bg-dark'>
          <Profile />
        </div>

        <div className='ps- pp my-4'>
          <form >
           <h1 className="text-white">SEND A MESSAGE</h1> 
            <div> <input type="text" placeholder='From:' required /></div>  <br />
            <div> <input type="text" placeholder='Subject:' required /> </div> <br />
            <div> <textarea name="" placeholder='Write message...' id="" cols="30" rows="10" required></textarea> </div>
           <div className='d-flex justify-content-center w-100 my-2 ' onClick={handleclick}>
            <button className='btn  bt btn-primary w-50'>Send Message</button>
            {/* {
              show && (
                <div>
                  <Messagemodal/>
                </div>
              )
            } */}
             </div> 
          </form>
        </div>
      </section>
      hv
    </div>
  )
}

export default Contact