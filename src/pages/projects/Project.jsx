import React from 'react'
import Header from '../../components/Navber'
import Profile from '../../components/Profile'
import Website from '../../components/Website'
import '../../pages/projects/project.css'

const Projects = () => {
  return (
    <div>

      <Header />

      <section className='d-flex flex-wrap  bg-dark'>
        <div className=" tex bg-dark">
          <Profile />
        </div>

         <div  className="img sec text-white ">
          <div className=" sec text-white mb-5 px-2 d-flex flex-wrap">
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-primary'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website className='ic' />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-success'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-danger'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-warning'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-warning'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-warning'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-warning'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
            <div className='one px-2 my-3 mx-md-4'>
              <p className='text-warning'>React & Node</p>
              <h2>POSTIT - Blog Website</h2>
              <Website />
            </div>
          </div>
          </div>
      </section>
    </div>
  )
}

export default Projects