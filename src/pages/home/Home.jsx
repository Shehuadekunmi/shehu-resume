import React from 'react'
import Header from '../../components/Navber'
import 'iconify-icon'
import group from '../../assets/Group 2.png'
import '../home/home.css'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile'
const Home = () => {
  return (
    <div>
      <Header t1={'Projects'} t2={'Download-projects'} t3={'Contact'} />

      <div className="bg-dark d-flex flex-wrap ">

      <div className="text text-white  ">
                <button className='btn bg-white my-3 mx-4 text-danger'>Full Stack Developer</button>
                <h1 className='px-4'>SHEHU ADEKUNMI</h1>
                <p className='text-start px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit.
                    Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                <div className='d-flex justify-content-around my-3'>
                    <h1 className="ico">  <Iconify-icon className='ico ' icon='logos:bootstrap' /></h1>
                    <h1 className="ico">  <Iconify-icon icon='logos:javascript' className='icon' /></h1>
                    <h1 className="ico">  <Iconify-icon icon='devicon:nodejs' className='icon' /></h1>
                    <h1 className="ico">  <Iconify-icon icon='logos:html-5' className='icon' /></h1>
                    <h1 className="ico">  <Iconify-icon icon='devicon:reactbootstrap' className='icon' /></h1>

                </div>
                <div className='d-flex justify-content-around'>
                    <h1 className="ico">  <Iconify-icon icon='logos:css-3' className='icon' /></h1>
                    <h1 className="ico">   <Iconify-icon icon='skill-icons:sass' className='icon' /></h1>
                    <h1 className="ico">   <Iconify-icon icon='skill-icons:redux' className='icon' /></h1>
                    <h1 className="ico">   <Iconify-icon icon='logos:tailwindcss-icon' className='icon' /></h1>
                    <h1 className="ico">    <Iconify-icon icon='logos:typescript-icon' className='icon' /></h1>
                </div>
            </div>

        <div className="imgg my-5">
          <img src={group} alt="" />
        </div>

      </div>

      <div className='d-flex gap-5 ic bg-dark text-white  ps-2 ps-md-5 '>
        <div className='m w-5'>
          <Link className='w-50 text-white text-decoration-none px-'>  <p><Iconify-icon icon='wpf:message-outline' /> Email <Iconify-icon icon='bi:box-arrow-up-right' />  </p> </Link>
        </div>
        <div className='w-5 gap-2'>
          <Link className='w-50 text-white text-decoration-none'> <p><Iconify-icon icon='icon-park:github' /> Github  <Iconify-icon icon='bi:box-arrow-up-right' /></p>   </Link>
        </div>

      </div>
    </div>
  )
}

export default Home