import React from 'react'
import 'iconify-icon'
import { Link } from 'react-router-dom'


const Messagemodal = () => {
    return (
        <div className='bg-dar dar'>
            <div className="sheu"><Link to={'/'}> <Iconify-icon className='ico ' icon='emojione-v1:cross-mark' /> </Link> </div>

            <div className='text-center bg-dark sent pt-5  text-white my-5'>
            <span className='ico '>  <Iconify-icon  icon='ic:baseline-forward-to-inbox' className='ico' /> </span>
                <h1>Message Sent!</h1>
                <p className='px-1 px-lg-4'>Thank you for reaching out, a response will be sent shortly.
                    In the meantime, kindly check projects I’ve worked on.</p>
                <Link>  <button className='btn btn-primary my-1'>Go to Projects</button> </Link>
            </div>
        </div>
    )
}

export default Messagemodal