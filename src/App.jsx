import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Projects from './pages/projects/Project'
import Contact from './pages/contact/Contact'
import Download from './pages/download/Download'

function App() {


  return (
    <>
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Download Project' element={<Download/>}/>
        </Routes>s
      </Router>
      </div>
    </>
  )
}

export default App
